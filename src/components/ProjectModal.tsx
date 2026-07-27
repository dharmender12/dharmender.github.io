import React from 'react';
import { Project } from '../types/portfolio';
import { ExternalLink, Github, X, Check, ShieldCheck, Sparkles, Layers, Cpu, Code2 } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Modal Container */}
      <div className="glass-panel w-full max-w-3xl rounded-2xl border border-white/20 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col relative animate-in zoom-in-95 duration-200">
        
        {/* Header Banner */}
        <div className={`h-40 sm:h-52 bg-gradient-to-br ${project.imagePlaceholderGradient} p-6 flex flex-col justify-between relative`}>
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-slate-950/60 hover:bg-slate-950 text-white flex items-center justify-center border border-white/20 transition-all cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div>
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-950/70 text-blue-300 border border-blue-400/30">
              {project.category}
            </span>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-white mt-2 drop-shadow-md">
              {project.title}
            </h3>
            <p className="text-blue-100 text-sm font-medium">{project.subtitle}</p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-mono">
            {project.metrics?.map((m, mIdx) => (
              <span key={mIdx} className="px-2.5 py-1 rounded bg-black/40 text-emerald-300 border border-emerald-400/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> {m}
              </span>
            ))}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Detailed Description */}
          <div>
            <h4 className="text-sm font-mono text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Project Architecture & Workflow
            </h4>
            <p className="text-slate-300 text-base leading-relaxed">
              {project.longDescription}
            </p>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-sm font-mono text-purple-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Check className="w-4 h-4 text-emerald-400" /> Key Features & Capabilities
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-300">
              {project.keyFeatures.map((feat, fIdx) => (
                <li key={fIdx} className="flex items-start gap-2 bg-slate-900/50 p-2.5 rounded-lg border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-mono text-cyan-400 uppercase tracking-wider mb-3 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Tech Stack Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, tIdx) => (
                <span key={tIdx} className="px-3 py-1 rounded-lg bg-blue-950/60 text-blue-300 border border-blue-500/30 text-xs font-mono font-semibold">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer with mandatory target="_blank" links */}
        <div className="p-4 sm:p-6 bg-slate-950/90 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold flex items-center justify-center gap-2 border border-white/10 transition-all cursor-pointer"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Repository</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-70" />
          </a>

          {/* MANDATORY LIVE DEMO LINK - ALWAYS OPENS IN A NEW TAB INDIVIDUALLY */}
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white text-sm font-bold flex items-center justify-center gap-2 shadow-lg shadow-blue-500/30 transition-all cursor-pointer"
          >
            <Code2 className="w-4 h-4" />
            <span>Open Live Demo App</span>
            <ExternalLink className="w-4 h-4" />
          </a>

        </div>

      </div>
    </div>
  );
};
