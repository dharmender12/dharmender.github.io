import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../data/resumeData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';
import { ExternalLink, Github, Sparkles, Layers, Eye, RefreshCw, Star, GitFork, Code2, CheckCircle2 } from 'lucide-react';

export interface GithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
  fork: boolean;
}

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [viewMode, setViewMode] = useState<'featured' | 'github'>('featured');

  const [githubRepos, setGithubRepos] = useState<GithubRepo[]>([]);
  const [loadingRepos, setLoadingRepos] = useState<boolean>(false);
  const [lastSynced, setLastSynced] = useState<string | null>(null);

  const fetchGithubRepos = async () => {
    setLoadingRepos(true);
    try {
      const res = await fetch('https://api.github.com/users/dharmender12/repos?sort=updated&per_page=30');
      if (res.ok) {
        const data: GithubRepo[] = await res.json();
        setGithubRepos(data);
        setLastSynced(new Date().toLocaleTimeString());
      }
    } catch (err) {
      console.error('Failed to fetch GitHub repositories:', err);
    } finally {
      setLoadingRepos(false);
    }
  };

  useEffect(() => {
    fetchGithubRepos();
  }, []);

  const availableCategories = Array.from(new Set(PROJECTS.map((p) => p.category)));
  const categories = ['All', ...availableCategories];

  const filteredProjects = PROJECTS.filter((proj) => {
    if (selectedCategory === 'All') return true;
    return proj.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      
      {/* Section Title */}
      <div className="text-center space-y-3 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-400 text-xs font-mono uppercase tracking-widest">
          <Sparkles className="w-3.5 h-3.5" /> Live Repository Sync
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Projects & <span className="gradient-text-3d">GitHub Repos</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base">
          Showcasing deployed applications and real-time synchronized repositories directly connected to GitHub (<span className="text-cyan-400 font-mono font-semibold">@dharmender12</span>).
        </p>
      </div>

      {/* Main Switcher: Featured Projects vs Live GitHub Repos */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/80 p-2 rounded-2xl border border-white/10 mb-8 max-w-3xl mx-auto">
        <div className="flex items-center gap-1.5 w-full sm:w-auto">
          <button
            onClick={() => setViewMode('featured')}
            className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              viewMode === 'featured'
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Sparkles className="w-4 h-4 text-cyan-300" />
            <span>Featured Case Studies ({PROJECTS.length})</span>
          </button>

          <button
            onClick={() => setViewMode('github')}
            className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center justify-center gap-2 ${
              viewMode === 'github'
                ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/30'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            <Github className="w-4 h-4 text-cyan-300" />
            <span>Live GitHub Repos {githubRepos.length > 0 && `(${githubRepos.length})`}</span>
          </button>
        </div>

        {viewMode === 'github' && (
          <button
            onClick={fetchGithubRepos}
            disabled={loadingRepos}
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50 shrink-0"
            title="Refresh repositories live from GitHub"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${loadingRepos ? 'animate-spin' : ''}`} />
            <span>{loadingRepos ? 'Syncing...' : lastSynced ? `Synced ${lastSynced}` : 'Sync Repos'}</span>
          </button>
        )}
      </div>

      {/* FEATURED PROJECTS VIEW */}
      {viewMode === 'featured' && (
        <>
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

          {/* Grid of Featured Projects */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="glass-card rounded-2xl overflow-hidden border border-white/10 flex flex-col justify-between group hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(56,189,248,0.25)] transition-all duration-300 relative"
              >
                {/* Hover ambient radial glow */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-0" />

                <div className="relative z-10">
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

                {/* Card Footer */}
                <div className="p-4 bg-slate-950/80 border-t border-white/5 flex items-center justify-between gap-2 relative z-10">
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
        </>
      )}

      {/* LIVE GITHUB REPOSITORIES VIEW */}
      {viewMode === 'github' && (
        <div className="space-y-6">
          <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-xs sm:text-sm text-cyan-200">
                Connected directly to GitHub account <span className="font-mono font-bold text-white">@dharmender12</span>. Any new repository you create on GitHub will automatically appear here!
              </p>
            </div>
            <a
              href="https://github.com/dharmender12"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyan-400 hover:text-cyan-200 underline flex items-center gap-1"
            >
              <span>View GitHub Profile</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {loadingRepos && githubRepos.length === 0 ? (
            <div className="text-center py-16 space-y-3">
              <RefreshCw className="w-8 h-8 text-cyan-400 animate-spin mx-auto" />
              <p className="text-sm font-mono text-slate-400">Fetching live repositories from GitHub...</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubRepos.map((repo) => (
                <div
                  key={repo.id}
                  className="p-6 rounded-2xl bg-slate-900/70 border border-white/10 hover:border-cyan-400/50 hover:bg-slate-900 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-mono text-xs font-bold text-cyan-400 truncate flex items-center gap-1.5">
                        <Code2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        {repo.name}
                      </span>
                      {repo.language && (
                        <span className="px-2 py-0.5 rounded-md text-[10px] font-mono font-semibold bg-slate-800 text-slate-300 border border-white/5 shrink-0">
                          {repo.language}
                        </span>
                      )}
                    </div>

                    <p className="text-slate-300 text-xs line-clamp-3 leading-relaxed min-h-[2.5rem]">
                      {repo.description || 'No description provided.'}
                    </p>

                    {repo.topics && repo.topics.length > 0 && (
                      <div className="flex flex-wrap gap-1 pt-1">
                        {repo.topics.slice(0, 4).map((topic, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-cyan-950/60 text-cyan-300 border border-cyan-500/20"
                          >
                            #{topic}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-5 border-t border-white/5 mt-4 flex items-center justify-between text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-slate-300" title="Stars">
                        <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400/20" />
                        <span>{repo.stargazers_count}</span>
                      </span>
                      <span className="flex items-center gap-1 text-slate-300" title="Forks">
                        <GitFork className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{repo.forks_count}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {repo.homepage && (
                        <a
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-md bg-cyan-950 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/30 transition-colors"
                          title="Open Homepage"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-md bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 flex items-center gap-1.5 transition-colors"
                        title="View Repo on GitHub"
                      >
                        <Github className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Repo</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Project Detail Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />

    </section>
  );
};

