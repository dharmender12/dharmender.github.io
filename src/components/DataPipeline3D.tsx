import React, { useState } from 'react';
import { Database, Cpu, Zap, Activity, BarChart2, ShieldCheck, ChevronRight, Terminal, Server } from 'lucide-react';

interface StageProps {
  id: string;
  name: string;
  role: string;
  tools: string[];
  metrics: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  active: boolean;
  onClick: () => void;
}

const StageCard: React.FC<StageProps> = ({
  name,
  role,
  tools,
  metrics,
  icon: Icon,
  color,
  active,
  onClick
}) => {
  return (
    <div
      onClick={onClick}
      className={`relative p-5 rounded-2xl border transition-all duration-300 cursor-pointer group select-none ${
        active 
          ? 'bg-slate-900/90 border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.35)] scale-105' 
          : 'bg-slate-950/60 border-slate-800/80 hover:border-slate-700 hover:bg-slate-900/40'
      }`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Stage Connector Pulse */}
      {active && (
        <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-cyan-400 animate-ping" />
      )}

      <div className="flex items-center justify-between mb-3">
        <div className={`p-2.5 rounded-xl ${color} bg-opacity-20 text-white border border-white/10 shadow-lg`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-white/5">
          STAGE
        </span>
      </div>

      <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
        {name}
      </h4>
      <p className="text-xs text-slate-400 font-medium mb-3 mt-1 line-clamp-2">
        {role}
      </p>

      <div className="pt-3 border-t border-white/5 flex flex-wrap gap-1 mb-3">
        {tools.map(tool => (
          <span key={tool} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-cyan-500/20">
            {tool}
          </span>
        ))}
      </div>

      <div className="text-[11px] font-mono text-emerald-400 flex items-center gap-1.5 bg-emerald-950/30 px-2 py-1 rounded border border-emerald-500/20">
        <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
        <span>{metrics}</span>
      </div>
    </div>
  );
};

export const DataPipeline3D: React.FC = () => {
  const [selectedStage, setSelectedStage] = useState<number>(1);

  const stages = [
    {
      id: "ingest",
      name: "1. Data Ingestion & Streams",
      role: "High-throughput telemetry ingestion & multi-gigabyte astronomical spectroscopy.",
      tools: ["Apache Kafka", "Spectroscopy FITS", "Web Scraping", "REST APIs"],
      metrics: "500GB+ Ingested / 99.8% Uptime",
      icon: Database,
      color: "bg-blue-600",
      description: "Automated pipelines continuously pull from raw spectroscopic instruments, public e-commerce APIs, and web endpoints with automated schema verification and data integrity checks."
    },
    {
      id: "transform",
      name: "2. Distributed ETL & Cleaning",
      role: "Parallel transformation, feature normalization, and SQL data warehousing.",
      tools: ["Apache Spark", "PySpark", "PostgreSQL", "dbt", "Pandas"],
      metrics: "3.2x Query Acceleration",
      icon: Server,
      color: "bg-cyan-600",
      description: "Distributed compute clusters process millions of rows to clean noise, remove outliers with statistical confidence intervals, and aggregate multi-dimensional feature cubes."
    },
    {
      id: "modeling",
      name: "3. ML & Bayesian Modeling",
      role: "Deep neural networks, Bayesian MCMC inference, and NLP agents.",
      tools: ["PyTorch", "Bayesian Stats", "Groq / LangChain", "XGBoost"],
      metrics: "98.2% Anomaly Precision",
      icon: Cpu,
      color: "bg-purple-600",
      description: "Statistical modeling calibrated with signal-to-noise ratio reduction, agentic reasoning chains, and cross-validated predictive models."
    },
    {
      id: "serving",
      name: "4. Deployment & Live Analytics",
      role: "Real-time production APIs, Streamlit dashboards, and automated triggers.",
      tools: ["FastAPI", "Streamlit", "Docker", "Power BI", "Vercel"],
      metrics: "<120ms P99 Latency",
      icon: BarChart2,
      color: "bg-emerald-600",
      description: "End-to-end containerized endpoints delivering interactive drill-down analytics, executive reporting, and real-time inference scores."
    }
  ];

  return (
    <div className="relative p-6 sm:p-10 rounded-3xl bg-slate-950/80 border border-slate-800 backdrop-blur-xl shadow-2xl overflow-hidden">
      {/* 3D Wireframe Cyber Grid Background */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, #06b6d4 1px, transparent 1px),
            linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(600px) rotateX(45deg) scale(1.5)',
          transformOrigin: 'top center'
        }}
      />

      <div className="relative z-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-2">
              <Zap className="w-3 h-3 text-cyan-400 animate-pulse" />
              <span>Interactive 3D Pipeline Topology</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              End-to-End Data & ML Engineering Flow
            </h3>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900/80 px-3 py-1.5 rounded-xl border border-white/5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Telemetry: Live Active Stream</span>
          </div>
        </div>

        {/* 4 Pipeline Stages in Grid with flowing visual arrows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {stages.map((stage, idx) => (
            <StageCard
              key={stage.id}
              {...stage}
              active={selectedStage === idx}
              onClick={() => setSelectedStage(idx)}
            />
          ))}
        </div>

        {/* Deep Dive Panel for Selected Stage */}
        <div className="p-5 sm:p-6 rounded-2xl bg-slate-900/90 border border-cyan-500/30 shadow-xl flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-1.5 flex-1">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
              <Terminal className="w-4 h-4" />
              <span>ACTIVE ARCHITECTURE SPECIFICATION</span>
            </div>
            <h5 className="text-lg font-bold text-white">
              {stages[selectedStage].name}
            </h5>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-3xl">
              {stages[selectedStage].description}
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <div className="px-4 py-2 rounded-xl bg-slate-950 border border-white/10 text-right">
              <div className="text-[10px] font-mono text-slate-400 uppercase">Impact Metric</div>
              <div className="text-sm font-mono font-bold text-emerald-400">{stages[selectedStage].metrics}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
