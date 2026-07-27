import React from 'react';
import { FileDown, ArrowRight, ExternalLink, Brain, Database, Code } from 'lucide-react';
import { PERSONAL_INFO } from '../data/resumeData';
import { handleResumeAction } from '../utils/resumeGenerator';

interface HeroSectionProps {
  onNavigate: (sectionId: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8">
        {/* Profile Picture Avatar */}
        <div className="flex justify-center">
          <div className="relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-full blur-md opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-2 border-cyan-400/80 bg-slate-900 shadow-2xl shadow-cyan-950/80">
              <img
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center shadow-lg" title="Available for Roles">
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
            </div>
          </div>
        </div>

        {/* Primary Headline: Name */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-md">
            <span className="bg-gradient-to-r from-slate-100 via-cyan-200 to-indigo-300 bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </span>
          </h1>

          {/* Brief Intro Requirement: "Hey, I'm a..." */}
          <p className="text-xl sm:text-2xl md:text-3xl font-medium text-cyan-400 font-sans tracking-wide">
            {PERSONAL_INFO.tagline}
          </p>

          <p className="max-w-2xl mx-auto text-sm sm:text-base text-slate-300 leading-relaxed pt-2">
            Specialized in Machine Learning & Deep Learning, Scalable Big Data Pipelines (PySpark, Databricks, GCP), SQL Query Optimization, and Interactive Business Intelligence Dashboards.
          </p>
        </div>

        {/* Home Action Buttons (Includes Resume as requested) */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          {/* Resume Button in Home Section */}
          <button
            id="hero-resume-btn"
            onClick={handleResumeAction}
            title="Open in new tab & automatically download resume PDF"
            className="flex items-center gap-3 px-7 py-3.5 rounded-2xl font-semibold text-base text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-300 hover:from-cyan-300 hover:to-teal-200 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-400/50 hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer group"
          >
            <FileDown className="w-5 h-5 text-slate-950 group-hover:bounce" />
            <span>Resume</span>
            <ExternalLink className="w-4 h-4 text-slate-800" />
          </button>

          {/* Explore About / Portfolio */}
          <button
            id="hero-explore-btn"
            onClick={() => onNavigate('about')}
            className="flex items-center gap-2 px-7 py-3.5 rounded-2xl font-semibold text-base text-slate-200 bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700 hover:border-cyan-500/50 hover:text-cyan-300 shadow-xl backdrop-blur-md hover:scale-105 active:scale-95 transition-all duration-200 group"
          >
            <span>Explore Experience</span>
            <ArrowRight className="w-5 h-5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Highlights Badges */}
        <div className="pt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex flex-col items-center justify-center text-center hover:border-cyan-500/40 transition-colors">
            <Brain className="w-6 h-6 text-cyan-400 mb-1" />
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Data Scientist</span>
            <span className="text-sm font-semibold text-slate-200">ML & Deep Learning</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex flex-col items-center justify-center text-center hover:border-indigo-500/40 transition-colors">
            <Code className="w-6 h-6 text-indigo-400 mb-1" />
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Data Analyst</span>
            <span className="text-sm font-semibold text-slate-200">SQL & Power BI KPIs</span>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md flex flex-col items-center justify-center text-center hover:border-purple-500/40 transition-colors">
            <Database className="w-6 h-6 text-purple-400 mb-1" />
            <span className="text-xs text-slate-400 font-mono uppercase tracking-wider">Data Engineer</span>
            <span className="text-sm font-semibold text-slate-200">PySpark & GCP ETL</span>
          </div>
        </div>
      </div>
    </section>
  );
};
