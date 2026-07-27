import React from 'react';
import { PERSONAL_INFO } from '../data/resumeData';
import { handleDownloadAndOpenResume } from '../utils/resumeHandler';
import { Code2, Github, Linkedin, Mail, Download, ExternalLink, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 relative z-10 text-slate-400 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Brand */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 flex items-center justify-center text-white font-bold">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-white text-base">DHARMENDER THAKUR</p>
            <p className="text-xs text-slate-400">Data Scientist | Data Analyst | Data Engineer</p>
          </div>
        </div>

        {/* Quick Links & Resume */}
        <div className="flex items-center gap-4 text-xs font-mono">
          <a
            href="#about"
            className="hover:text-white transition-colors"
          >
            About
          </a>
          <span>•</span>
          <a
            href="#projects"
            className="hover:text-white transition-colors"
          >
            Projects
          </a>
          <span>•</span>
          <button
            onClick={(e) => {
              e.preventDefault();
              handleDownloadAndOpenResume();
            }}
            className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 cursor-pointer"
            title="Download Resume in new tab"
          >
            <span>Resume PDF</span>
            <Download className="w-3 h-3" />
          </button>
        </div>

        {/* Right Socials & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
            title="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
            title="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-blue-600/20 text-blue-400 hover:bg-blue-600 hover:text-white border border-blue-500/30 transition-all cursor-pointer"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-white/5 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Dharmender Thakur. Built with React, Three.js 3D WebGL, and Tailwind CSS.
      </div>
    </footer>
  );
};
