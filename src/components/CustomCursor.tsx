import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [hoverText, setHoverText] = useState<string | null>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  // Smooth position tracking with LERP
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const vel = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Check for touch device
    if (window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window) {
      setIsTouchDevice(true);
      return;
    }

    const onMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseDown = () => setIsMouseDown(true);
    const onMouseUp = () => setIsMouseDown(false);

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactiveEl = target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer, .glass-card, [data-cursor]'
      );

      if (interactiveEl) {
        setIsHovered(true);

        // Check if there's custom cursor text requested
        const customText = interactiveEl.getAttribute('data-cursor-text');
        if (customText) {
          setHoverText(customText);
        } else if (interactiveEl.tagName === 'A' || interactiveEl.closest('a')) {
          setHoverText('OPEN');
        } else if (interactiveEl.tagName === 'BUTTON' || interactiveEl.closest('button')) {
          setHoverText('CLICK');
        } else if (interactiveEl.classList.contains('glass-card')) {
          setHoverText('VIEW');
        } else {
          setHoverText(null);
        }
      } else {
        setIsHovered(false);
        setHoverText(null);
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseover', onMouseOver);

    // Animation Loop for smooth trailing outer ring
    let animId: number;
    const animate = () => {
      // Calculate delta & LERP
      const dx = mousePos.current.x - ringPos.current.x;
      const dy = mousePos.current.y - ringPos.current.y;

      vel.current.x = dx * 0.18;
      vel.current.y = dy * 0.18;

      ringPos.current.x += vel.current.x;
      ringPos.current.y += vel.current.y;

      // Direct placement for sharp inner dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // Smooth lerp placement for outer 3D aura ring with velocity dynamic rotation
      if (ringRef.current) {
        const speed = Math.sqrt(vel.current.x * vel.current.x + vel.current.y * vel.current.y);
        const rotX = Math.min(Math.max(vel.current.y * 1.5, -30), 30);
        const rotY = Math.min(Math.max(-vel.current.x * 1.5, -30), 30);

        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${
          isMouseDown ? 0.75 : isHovered ? 1.6 : 1 + Math.min(speed * 0.01, 0.3)
        })`;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [isVisible, isMouseDown, isHovered]);

  if (isTouchDevice || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden">
      {/* Outer 3D Interactive Aura Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -mt-6 -ml-6 w-12 h-12 rounded-full border transition-colors duration-300 ease-out flex items-center justify-center preserve-3d shadow-2xl ${
          isHovered
            ? 'border-cyan-400/80 bg-cyan-500/15 shadow-[0_0_25px_rgba(56,189,248,0.4)] backdrop-blur-[2px]'
            : 'border-cyan-400/40 bg-cyan-950/10 shadow-[0_0_12px_rgba(56,189,248,0.2)]'
        }`}
        style={{
          willChange: 'transform',
        }}
      >
        {/* Decorative 3D Orbit Lines inside cursor ring */}
        <div
          className={`absolute inset-1 rounded-full border border-dashed transition-all duration-500 ${
            isHovered
              ? 'border-purple-400/60 animate-[spin_4s_linear_infinite]'
              : 'border-cyan-400/20 animate-[spin_8s_linear_infinite]'
          }`}
        />

        {/* Optional Hover Action Text inside expanded cursor */}
        {isHovered && hoverText && (
          <span className="text-[9px] font-mono font-black uppercase tracking-widest text-cyan-300 animate-in fade-in zoom-in-75 duration-200">
            {hoverText}
          </span>
        )}
      </div>

      {/* Inner Precision Sharp Core Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -mt-1 -ml-1 w-2 h-2 rounded-full transition-transform duration-150 ${
          isHovered
            ? 'bg-purple-300 scale-150 shadow-[0_0_10px_#c084fc]'
            : 'bg-cyan-300 shadow-[0_0_8px_#38bdf8]'
        }`}
        style={{
          willChange: 'transform',
        }}
      />
    </div>
  );
};
