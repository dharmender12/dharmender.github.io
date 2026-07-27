import React, { useState } from 'react';
import { PROJECTS } from '../data/resumeData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Github, Sparkles, Layers, ArrowUpRight, Eye, CheckCircle } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const availableCategories = Array.from(new Set(PROJECTS.map((p) => p.category)));
  const categories = ['All', ...availableCategories];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === 'All') return true;
    return proj.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Title */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> Featured Engineering
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Featured <span className="gradient-text-3d">Projects</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base">
          Mandatory 4+ deployed data science, deep learning, NLP, and full-stack software applications with individual live deployments.
        </p>
      </div>

      {/* Category Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-slate-900/60 text-slate-400 hover:text-white border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((proj) => (
          <div
            key={proj.id}
            className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 relative"
          >
            <div>
              {/* Card Banner Header */}
              <div className={`h-40 bg-gradient-to-br ${proj.imagePlaceholderGradient} p-5 flex flex-col justify-between relative overflow-hidden`}>
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold uppercase tracking-wider bg-slate-950/80 text-blue-300 border border-blue-400/30">
                    {proj.category}
                  </span>
                  <button
                    onClick={() => setActiveModalProject(proj)}
                    className="p-2 rounded-lg bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors cursor-pointer"
                    title="View Project Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-blue-100 font-medium">{proj.subtitle}</p>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 space-y-4">
                <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                  {proj.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {proj.techStack.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-blue-950/50 text-blue-300 border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Footer with MANDATORY Live Links (Opens in New Tab) */}
            <div className="p-4 bg-slate-950/80 border-t border-white/5 flex items-center justify-between gap-2">
              <button
                onClick={() => setActiveModalProject(proj)}
                className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1 cursor-pointer"
              >
                <span>Details</span>
                <Layers className="w-3.5 h-3.5 text-blue-400" />
              </button>

              <div className="flex items-center gap-2">
                <a
                  href={proj.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 transition-colors"
                  title="View GitHub Code (Opens in new tab)"
                >
                  <Github className="w-4 h-4" />
                </a>

                {/* MANDATORY DEPLOYMENT / LIVE DEMO LINK - ALWAYS OPENS IN NEW TAB INDIVIDUALLY */}
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-1.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white flex items-center gap-1.5 shadow-md shadow-blue-600/30 transition-all cursor-pointer group/link"
                  title={`Open Live Demo for ${proj.title} in new tab`}
                >
                  <span>Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
};
