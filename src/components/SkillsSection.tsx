import React, { useState } from 'react';
import { Cpu, Users, Sparkles, CheckCircle, Radar as RadarIcon, Award, Activity } from 'lucide-react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip } from 'recharts';
import { SKILL_CATEGORIES } from '../data/resumeData';

// Domain proficiency data for the Radar Chart
const DOMAIN_RADAR_DATA = [
  { domain: 'Machine Learning', score: 94, fullMark: 100, description: 'Scikit-Learn, ANN, Regression, Classification' },
  { domain: 'Deep Learning', score: 90, fullMark: 100, description: 'TensorFlow, Keras, Neural Networks' },
  { domain: 'Big Data & Spark', score: 88, fullMark: 100, description: 'PySpark, Hadoop, Scala, ETL Pipelines' },
  { domain: 'Cloud & GCP', score: 86, fullMark: 100, description: 'Google Cloud, Databricks, BigQuery' },
  { domain: 'SQL & Analytics', score: 92, fullMark: 100, description: 'CTEs, Window Functions, Query Tuning' },
  { domain: 'BI & Power BI', score: 92, fullMark: 100, description: 'DAX, Interactive Dashboards, KPIs' },
  { domain: 'NLP & Text Mining', score: 90, fullMark: 100, description: 'NLTK, Sentiment Ingestion, TF-IDF' },
  { domain: 'Scientific Research', score: 95, fullMark: 100, description: 'Astrophysics, Spectral Analysis, DLAs' },
];

const CustomRadarTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    const data = payload[0].payload;
    return (
      <div className="bg-slate-900/95 border border-cyan-500/50 p-3.5 rounded-2xl shadow-2xl backdrop-blur-md text-xs space-y-1 max-w-xs">
        <div className="flex items-center justify-between gap-3">
          <span className="font-bold text-cyan-300 text-sm">{data.domain}</span>
          <span className="font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30">
            {data.score}%
          </span>
        </div>
        <p className="text-slate-400 text-[11px] leading-tight">{data.description}</p>
      </div>
    );
  }
  return null;
};

export const SkillsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'technical' | 'soft'>('all');
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);

  const filteredCategories = SKILL_CATEGORIES.filter((cat) => {
    if (filter === 'all') return true;
    return cat.category === filter;
  });

  const activeDomainInfo = DOMAIN_RADAR_DATA.find((d) => d.domain === selectedDomain) || DOMAIN_RADAR_DATA[0];

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
          Comprehensive breakdown of both technical engineering capabilities, data science domain mastery, and professional soft skills.
        </p>
      </div>

      {/* Dynamic Interactive Radar Chart Card */}
      <div className="mb-16 p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-transparent pointer-events-none" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
          {/* Radar Chart Left Description */}
          <div className="lg:w-5/12 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-500/30 text-xs font-mono">
              <RadarIcon className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>Interactive Skill Matrix</span>
            </div>

            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Domain Proficiency <span className="text-cyan-400">Radar</span>
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                Multi-dimensional visualization representing balanced mastery across Data Science, Deep Learning, Big Data pipelines, Cloud Infrastructure, and Astrophysics Research.
              </p>
            </div>

            {/* Selected Domain Highlight Badge */}
            <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400 uppercase tracking-wider font-mono">Focused Domain</span>
                <span className="text-xs font-mono font-bold text-cyan-400 bg-cyan-950 px-2.5 py-0.5 rounded-full border border-cyan-500/30">
                  {activeDomainInfo.score}% Rating
                </span>
              </div>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Activity className="w-4 h-4 text-purple-400 shrink-0" />
                <span>{activeDomainInfo.domain}</span>
              </h4>
              <p className="text-slate-300 text-xs">{activeDomainInfo.description}</p>
            </div>

            {/* Quick Domain Click Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {DOMAIN_RADAR_DATA.map((item) => (
                <button
                  key={item.domain}
                  onClick={() => setSelectedDomain(item.domain)}
                  className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                    (selectedDomain === item.domain || (!selectedDomain && item === DOMAIN_RADAR_DATA[0]))
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'bg-slate-950/60 text-slate-400 hover:text-slate-200 border border-slate-800/80'
                  }`}
                >
                  {item.domain}
                </button>
              ))}
            </div>
          </div>

          {/* Radar Chart Component */}
          <div className="w-full lg:w-7/12 h-[340px] sm:h-[400px] flex items-center justify-center relative">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={DOMAIN_RADAR_DATA}>
                <PolarGrid stroke="#334155" strokeDasharray="3 3" />
                <PolarAngleAxis
                  dataKey="domain"
                  tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 600 }}
                />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: '#64748b', fontSize: 10 }} />
                <Radar
                  name="Proficiency"
                  dataKey="score"
                  stroke="#38bdf8"
                  fill="#0284c7"
                  fillOpacity={0.45}
                  dot={{ r: 4, fill: '#38bdf8', stroke: '#0f172a', strokeWidth: 2 }}
                  activeDot={{ r: 7, fill: '#c084fc', stroke: '#38bdf8', strokeWidth: 2 }}
                />
                <Tooltip content={<CustomRadarTooltip />} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </div>
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

            <div className="space-y-3">
              {cat.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-3 rounded-2xl bg-slate-950/40 border border-slate-800/60 hover:border-cyan-500/40 hover:bg-slate-800/50 hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 ease-out hover:shadow-lg hover:shadow-cyan-500/10 group/skill cursor-default space-y-2"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-slate-200 group-hover/skill:text-cyan-300 transition-colors flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 group-hover/skill:scale-110 transition-transform duration-300" />
                      {skill.name}
                    </span>
                    <span className="font-mono text-xs font-bold text-cyan-400 group-hover/skill:text-cyan-200 transition-colors">
                      {skill.level}%
                    </span>
                  </div>

                  {/* Level Bar */}
                  <div className="w-full h-2.5 bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800/80 group-hover/skill:border-cyan-500/30 transition-colors">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-500 transition-all duration-700 group-hover/skill:brightness-125 shadow-[0_0_10px_#38bdf8]"
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

