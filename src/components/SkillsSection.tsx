import React, { useState } from 'react';
import { Cpu, Users, Sparkles, CheckCircle } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/resumeData';

export const SkillsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'technical' | 'soft'>('all');

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (filter === 'all') return true;
    return cat.category === filter;
  });

  return (
    <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-xs font-mono text-cyan-300">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Core Capabilities</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Skills & <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Competencies</span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Comprehensive breakdown of both technical engineering capabilities and professional soft skills.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex justify-center mb-12">
        <div className="p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 inline-flex gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              filter === 'all'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            All Skills
          </button>

          <button
            onClick={() => setFilter('technical')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              filter === 'technical'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Cpu className="w-4 h-4" />
            <span>Technical Skills</span>
          </button>

          <button
            onClick={() => setFilter('soft')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              filter === 'soft'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Soft Skills</span>
          </button>
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredCategories.map((cat, idx) => (
          <div
            key={idx}
            className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl shadow-2xl space-y-6 hover:border-cyan-500/40 transition-all duration-300 group"
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-950 border border-cyan-500/30 text-cyan-400">
                  {cat.category === 'technical' ? <Cpu className="w-5 h-5" /> : <Users className="w-5 h-5" />}
                </div>
                <span>{cat.name}</span>
              </h3>
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-slate-950 text-cyan-400 border border-slate-800 uppercase">
                {cat.category}
              </span>
            </div>

            <div className="space-y-4">
              {cat.skills.map((skill, sIdx) => (
                <div key={sIdx} className="space-y-1.5">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-200 flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs text-cyan-400">{skill.level}%</span>
                  </div>

                  {/* Level Bar */}
                  <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 transition-all duration-1000 shadow-[0_0_10px_#38bdf8]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
