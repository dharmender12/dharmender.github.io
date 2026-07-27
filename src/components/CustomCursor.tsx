import React, { useEffect, useState, useRef } from 'react';

export const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
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
      } else {
        setIsHovered(false);
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

      vel.current.x = dx * 0.22;
      vel.current.y = dy * 0.22;

      ringPos.current.x += vel.current.x;
      ringPos.current.y += vel.current.y;

      // Direct placement for sharp inner dot
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0)`;
      }

      // Smooth lerp placement for outer subtle ring with mild tilt
      if (ringRef.current) {
        const speed = Math.sqrt(vel.current.x * vel.current.x + vel.current.y * vel.current.y);
        const rotX = Math.min(Math.max(vel.current.y * 0.8, -15), 15);
        const rotY = Math.min(Math.max(-vel.current.x * 0.8, -15), 15);

        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) rotateX(${rotX}deg) rotateY(${rotY}deg) scale(${
          isMouseDown ? 0.85 : isHovered ? 1.25 : 1 + Math.min(speed * 0.005, 0.15)
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
      {/* Outer Sleek Aura Ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 -mt-4 -ml-4 w-8 h-8 rounded-full border transition-colors duration-200 ease-out flex items-center justify-center preserve-3d ${
          isHovered
            ? 'border-cyan-300/80 bg-cyan-400/10 shadow-[0_0_12px_rgba(56,189,248,0.3)]'
            : 'border-cyan-400/30 bg-cyan-950/5'
        }`}
        style={{
          willChange: 'transform',
        }}
      >
        {/* Subtle Inner Accent Ring */}
        <div
          className={`absolute inset-0.5 rounded-full border transition-opacity duration-300 ${
            isHovered ? 'border-cyan-400/30 opacity-100' : 'opacity-0'
          }`}
        />
      </div>

      {/* Inner Precision Sharp Core Dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 -mt-1 -ml-1 w-2 h-2 rounded-full transition-all duration-150 ${
          isHovered
            ? 'bg-cyan-300 scale-125 shadow-[0_0_8px_#38bdf8]'
            : 'bg-cyan-400 shadow-[0_0_6px_rgba(56,189,248,0.6)]'
        }`}
        style={{
          willChange: 'transform',
        }}
      />
    </div>
  );
};

