import React from 'react';
import { PUBLICATIONS, PERSONAL_INFO } from '../data/resumeData';
import { BookOpen, ExternalLink, Github, GraduationCap, FileText, Atom, IdCard } from 'lucide-react';

export const PublicationsSection: React.FC = () => {
  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300 text-xs font-mono uppercase tracking-widest">
          <BookOpen className="w-3.5 h-3.5" /> Scholarly Research
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Research & <span className="gradient-text-3d">Publications</span>
        </h2>
        <p className="max-w-2xl mx-auto text-slate-300 text-sm sm:text-base">
          Academic research projects, preprints, and astrophysical publications bridging data science, observational astronomy, and machine learning.
        </p>
      </div>

      {/* Google Scholar & ORCID Profile Highlight Cards */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Google Scholar Card */}
        <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-purple-950/60 via-slate-900/80 to-slate-950 border border-purple-500/30 shadow-2xl relative overflow-hidden group flex flex-col justify-between gap-5">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-500/40 text-purple-300 flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/20">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">Google Scholar</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-cyan-950 text-cyan-300 border border-cyan-500/30">
                  Verified
                </span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Track citations, upcoming paper preprints, and academic collaborations on Google Scholar.
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.scholarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-purple-600/30 transition-all cursor-pointer hover:scale-[1.02] relative z-10"
          >
            <span>Google Scholar Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* ORCID iD Card */}
        <div className="p-6 sm:p-7 rounded-3xl bg-gradient-to-br from-emerald-950/60 via-slate-900/80 to-slate-950 border border-emerald-500/30 shadow-2xl relative overflow-hidden group flex flex-col justify-between gap-5">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="flex items-start gap-4 relative z-10">
            <div className="w-14 h-14 rounded-2xl bg-emerald-600/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
              <IdCard className="w-7 h-7" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white">ORCID iD</h3>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                  {PERSONAL_INFO.orcidId}
                </span>
              </div>
              <p className="text-slate-300 text-xs leading-relaxed">
                Official persistent digital identifier connecting researchers, publications, and grants.
              </p>
            </div>
          </div>

          <a
            href={PERSONAL_INFO.orcidUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-emerald-600/30 transition-all cursor-pointer hover:scale-[1.02] relative z-10"
          >
            <span>View ORCID Record</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Publications List */}
      <div className="space-y-6">
        {PUBLICATIONS.map((pub) => (
          <div
            key={pub.id}
            className="p-6 sm:p-8 rounded-3xl bg-slate-900/70 border border-white/10 hover:border-purple-500/40 hover:bg-slate-900 transition-all duration-300 relative group shadow-xl"
          >
            <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
              
              {/* Publication Details */}
              <div className="space-y-4 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-lg text-xs font-mono font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30 flex items-center gap-1.5">
                    <Atom className="w-3.5 h-3.5 text-amber-400" />
                    <span>{pub.status}</span>
                  </span>

                  <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-slate-400" />
                    <span>{pub.journalOrConference} ({pub.year})</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-200 transition-colors leading-snug">
                  {pub.title}
                </h3>

                <p className="text-xs sm:text-sm font-medium text-cyan-400 font-mono">
                  Authors: {pub.authors.join(', ')}
                </p>

                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {pub.abstract}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {pub.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-purple-950/60 text-purple-300 border border-purple-500/20"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-row lg:flex-col items-center gap-3 w-full lg:w-auto shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-white/10">
                {pub.githubUrl && (
                  <a
                    href={pub.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 lg:flex-initial w-full px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs font-semibold flex items-center justify-center gap-2 border border-white/10 transition-all cursor-pointer"
                  >
                    <Github className="w-4 h-4 text-cyan-400" />
                    <span>Research Repo</span>
                  </a>
                )}

                {pub.scholarUrl && (
                  <a
                    href={pub.scholarUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 lg:flex-initial w-full px-4 py-2.5 rounded-xl bg-purple-950 hover:bg-purple-900 text-purple-200 font-mono text-xs font-semibold flex items-center justify-center gap-2 border border-purple-500/30 transition-all cursor-pointer"
                  >
                    <GraduationCap className="w-4 h-4 text-purple-300" />
                    <span>Scholar Profile</span>
                  </a>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
