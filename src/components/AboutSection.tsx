import React, { useState } from 'react';
import { Briefcase, GraduationCap, Award, Trophy, MapPin, Calendar, CheckCircle2, Building2 } from 'lucide-react';
import { EXPERIENCES, EDUCATION_LIST, CERTIFICATIONS, ACHIEVEMENTS, PERSONAL_INFO } from '../data/resumeData';

export const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education' | 'achievements'>('experience');

  return (
    <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          About <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Me</span>
        </h2>

        <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
          Combining rigorous scientific data analysis (Ph.D. Astronomy candidate) with real-world enterprise software engineering, ML instruction, and end-to-end data pipeline development.
        </p>
      </div>

      {/* Overview Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Bio Card */}
        <div className="lg:col-span-2 p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl shadow-2xl space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 pb-2 border-b border-slate-800/80">
            <div className="relative shrink-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-cyan-400/80 shadow-xl shadow-cyan-950/80 bg-slate-950 ring-4 ring-cyan-500/10">
                <img
                  src={PERSONAL_INFO.profileImage}
                  alt={PERSONAL_INFO.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-emerald-500 border-2 border-slate-950 flex items-center justify-center shadow-md" title="Active & Available">
                <span className="w-1.5 h-1.5 rounded-full bg-white" />
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_#38bdf8]" />
                Career Overview & Expertise
              </h3>
              <p className="text-xs font-mono text-cyan-400 mt-1">
                {PERSONAL_INFO.name} • {PERSONAL_INFO.title}
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {PERSONAL_INFO.summary}
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
              <MapPin className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-mono text-slate-400">Current Base</span>
                <span className="text-sm font-semibold text-slate-200">{PERSONAL_INFO.location}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-3">
              <Building2 className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
              <div>
                <span className="block text-xs font-mono text-slate-400">Target Core Roles</span>
                <span className="text-sm font-semibold text-slate-200">Data Scientist | Data Analyst | Data Engineer</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Card */}
        <div className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800/90 backdrop-blur-xl shadow-2xl flex flex-col justify-between space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-cyan-400" />
              Key Certifications
            </h3>

            <ul className="space-y-3">
              {CERTIFICATIONS.map((cert, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-200">{cert.title}</span>
                    <span className="block text-xs text-slate-400">{cert.issuer}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Tabs Switcher for Detail Timeline */}
      <div className="flex justify-center mb-8">
        <div className="p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800 inline-flex gap-2">
          <button
            onClick={() => setActiveTab('experience')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'experience'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Briefcase className="w-4 h-4" />
            <span>Experience</span>
          </button>

          <button
            onClick={() => setActiveTab('education')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'education'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>Education</span>
          </button>

          <button
            onClick={() => setActiveTab('achievements')}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
              activeTab === 'achievements'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Trophy className="w-4 h-4" />
            <span>Achievements</span>
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="max-w-4xl mx-auto space-y-6">
        {activeTab === 'experience' && (
          <div className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="p-8 rounded-3xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl shadow-xl space-y-4 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 border-b border-slate-800 pb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    <p className="text-cyan-400 font-medium text-sm">
                      {exp.company} {exp.program && <span className="text-slate-400">({exp.program})</span>}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{exp.period}</span>
                    <span className="text-slate-600">|</span>
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {exp.highlights.map((hl, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 mt-2" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.skillsUsed.map((sk, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/50 text-[11px] font-mono text-cyan-300"
                    >
                      {sk}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {EDUCATION_LIST.map((edu) => (
              <div
                key={edu.id}
                className="overflow-hidden rounded-3xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl shadow-xl flex flex-col hover:border-cyan-500/30 transition-all group"
              >
                {edu.imageUrl && (
                  <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                    <img
                      src={edu.imageUrl}
                      alt={edu.degree}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
                    <div className="absolute top-3 left-3 p-2.5 rounded-2xl bg-slate-950/80 border border-cyan-500/30 backdrop-blur-md text-cyan-400">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  </div>
                )}
                
                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div>
                    {!edu.imageUrl && (
                      <div className="p-3 w-12 h-12 rounded-2xl bg-cyan-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                        <GraduationCap className="w-6 h-6" />
                      </div>
                    )}
                    <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {edu.degree}
                    </h4>
                    <p className="text-sm font-medium text-cyan-400 mt-1">{edu.institution}</p>
                  </div>
                  
                  <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'achievements' && (
          <div className="space-y-4">
            {ACHIEVEMENTS.map((ach, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800/80 backdrop-blur-xl shadow-xl flex items-center justify-between gap-4 hover:border-cyan-500/30 transition-all"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-2xl bg-purple-950/80 border border-purple-500/30 text-purple-400">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white">{ach.role} – {ach.event}</h4>
                    <p className="text-sm text-slate-300">{ach.organization}</p>
                  </div>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1.5 rounded-lg border border-slate-800">
                  {ach.period}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
