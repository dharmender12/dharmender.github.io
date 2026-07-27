import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, ExternalLink, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';
import { handleResumeAction } from '../utils/resumeGenerator';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
  onOpenDeployModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate, onOpenDeployModal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // MANDATORY ORDER: Home, About, Skills, Projects, Contact, Resume
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume', isResume: true },
  ];

  const handleNavClick = (item: typeof navItems[0]) => {
    if (item.isResume) {
      handleResumeAction();
    } else {
      onNavigate(item.id);
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      id="main-navbar"
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl shadow-cyan-950/20'
          : 'bg-slate-950/40 backdrop-blur-md border-b border-slate-800/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          id="navbar-logo-btn"
          onClick={() => onNavigate('home')}
          className="flex items-center gap-3 group text-left focus:outline-none"
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[2px] transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-cyan-500/20 overflow-hidden shrink-0">
            <img
              src={PERSONAL_INFO.profileImage}
              alt={PERSONAL_INFO.name}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center rounded-full"
            />
          </div>
          <div>
            <span className="block font-bold text-lg tracking-wide text-slate-100 group-hover:text-cyan-400 transition-colors">
              DHARMENDER THAKUR
            </span>
            <span className="block text-xs font-mono text-cyan-400/80 tracking-widest uppercase">
              Data Scientist & Analyst
            </span>
          </div>
        </button>

        {/* Desktop Navigation - Exact Required Order: Home, About, Skills, Projects, Contact, Resume */}
        <nav id="desktop-nav-menu" className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id && !item.isResume;
            if (item.isResume) {
              return (
                <button
                  key={item.id}
                  id="navbar-resume-btn"
                  onClick={() => handleNavClick(item)}
                  title="Open in new tab & download resume PDF"
                  className="ml-2 flex items-center gap-2 px-4 py-2 rounded-lg font-medium text-sm text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/40 hover:border-cyan-400 transition-all duration-200 shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/30 active:scale-95 group"
                >
                  <FileDown className="w-4 h-4 text-cyan-400 group-hover:bounce" />
                  <span>Resume</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400/70" />
                </button>
              );
            }

            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item)}
                className={`relative px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-500/30 shadow-inner'
                    : 'text-slate-300 hover:text-cyan-300 hover:bg-slate-800/40'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_#38bdf8]" />
                )}
              </button>
            );
          })}

          {/* Vercel & GitHub Deploy Button */}
          <button
            id="navbar-deploy-info-btn"
            onClick={onOpenDeployModal}
            className="ml-3 flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-slate-300 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-600 transition-all"
            title="View Vercel & GitHub deployment status"
          >
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Deploy Docs</span>
          </button>
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="flex items-center md:hidden gap-2">
          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-slate-300 hover:text-cyan-400 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 backdrop-blur-2xl border-b border-slate-800/90 px-4 pt-2 pb-6 space-y-2 animate-in slide-in-from-top-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.id && !item.isResume;
            return (
              <button
                key={item.id}
                id={`mobile-nav-link-${item.id}`}
                onClick={() => handleNavClick(item)}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-medium text-base text-left transition-all ${
                  item.isResume
                    ? 'bg-gradient-to-r from-cyan-950/80 to-indigo-950/80 border border-cyan-500/50 text-cyan-300 font-semibold'
                    : isActive
                    ? 'bg-cyan-950/50 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-slate-900'
                }`}
              >
                <span>{item.label}</span>
                {item.isResume ? (
                  <span className="flex items-center gap-1 text-xs bg-cyan-500/20 px-2 py-1 rounded text-cyan-300">
                    <FileDown className="w-3.5 h-3.5" /> PDF (New Tab + Download)
                  </span>
                ) : (
                  isActive && <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                )}
              </button>
            );
          })}

          <button
            id="mobile-deploy-btn"
            onClick={() => {
              onOpenDeployModal();
              setMobileMenuOpen(false);
            }}
            className="w-full mt-2 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-mono text-amber-300 bg-amber-950/40 border border-amber-500/30"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Vercel & GitHub Deployment Instructions</span>
          </button>
        </div>
      )}
    </header>
  );
};
