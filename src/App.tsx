/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ExternalLink, 
  Check, 
  Copy, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Code2, 
  Sparkles, 
  ChevronRight, 
  Layers, 
  TrendingUp, 
  Database, 
  MessageSquare, 
  Cpu, 
  BarChart3, 
  Users, 
  Compass, 
  FileText 
} from 'lucide-react';

// Resume Details grounded in the user's document
const PROFILE = {
  name: "Dharmender Thakur",
  title: "Data & AI Professional | Client Solutions, Enablement & Business Development",
  email: "dharmender98thakur@gmail.com",
  phone: "+91 8544713601",
  location: "Chandigarh, India",
  linkedin: "https://linkedin.com/in/dharmender-thakur1220",
  github: "https://github.com/dharmender12",
  summary: "Data & AI professional with hands-on experience delivering technical training to university and corporate cohorts, including an ongoing EY engagement via Chitkara University and IBM Career Education Program training at Allsoft Solution. Skilled in machine learning, NLP, GenAI (LangChain), Apache Spark, GCP, Databricks and Power BI, with a proven ability to turn technical capability into clear, business-ready language for mixed audiences. Experienced in understanding client needs, tailoring content to them, presenting to stakeholders, and reporting on outcomes."
};

const EXPERIENCES = [
  {
    role: "Corporate Training Engagement",
    company: "EY",
    period: "Aug 2026 – Oct 2026",
    badge: "Corporate Enablement",
    highlights: [
      "Delivered Data Analytics and Big Data Analytics training for BBA cohorts and Advanced Data Analytics using Excel for MBA cohorts, as part of an engagement for EY.",
      "Adapted technical content to business-focused audiences, linking analytics techniques to practical decision-making use cases."
    ],
    skills: ["Big Data Analytics", "Advanced Excel", "Business Translation", "Corporate Training"]
  },
  {
    role: "Data Science Instructor",
    company: "Allsoft Solution (IBM Career Education Program)",
    period: "Oct 2025 – Jul 2026",
    badge: "IBM Partner Model",
    highlights: [
      "Delivered Business Analytics using Python to 100+ university students under IBM's Career Education Program, working within a partner-led delivery model.",
      "Covered KPI analysis, Power BI dashboard creation, and translation of business problems into decision-ready analytical outputs.",
      "Coached learners on presenting data insights to non-technical audiences, mirroring the analyst-to-stakeholder handoff in client engagements."
    ],
    skills: ["Python", "Power BI", "KPI Frameworks", "Client Enablement", "Mentorship"]
  },
  {
    role: "Visiting Research Student - Data Analytics",
    company: "Indian Institute of Astrophysics (IIA)",
    period: "Apr 2025 – Sep 2025",
    badge: "Scientific Computing",
    highlights: [
      "Built end-to-end pipelines to clean, preprocess and validate high-volume, multi-dimensional datasets, ensuring data quality for downstream analysis.",
      "Produced analytical dashboards and research reports that translated complex technical findings into clear summaries for non-technical stakeholders.",
      "Applied hypothesis testing, regression and statistical methods to derive insights from structured and unstructured data."
    ],
    skills: ["Data Pipelines", "Hypothesis Testing", "Spectroscopic Data", "Statistical Modeling", "Dashboards"]
  }
];

const PROJECTS = [
  {
    title: "Supply Chain & Inventory Optimization Analytics",
    subtitle: "Manufacturing & Logistics Decision Intelligence",
    description: "Designed an analytics system evaluating shipment performance, supplier reliability and inventory efficiency for manufacturing and logistics decision-making. Built interactive Power BI dashboards tracking on-time delivery, inventory turnover, and supplier risk scores.",
    tools: ["Python", "SQL", "Power BI", "Supply Chain Analytics"],
    metric: "Turnover & Reliability Optimization",
    githubUrl: "https://github.com/dharmender12/Supply-Chain-Inventory-Optimization-System",
    liveUrl: "https://supply-chain-analytics-app.vercel.app/"
  },
  {
    title: "Twitter Sentiment Analysis - Real-Time NLP Pipeline",
    subtitle: "High-Volume Social Text Analytics",
    description: "Processed 1M+ tweets end-to-end (ingestion, preprocessing, inference) at ~96% accuracy. Delivered sentiment insights, polarity distributions, and trend telemetry through structured reports and real-time dashboards.",
    tools: ["Python", "NLP", "TensorFlow", "Streamlit"],
    metric: "1M+ Tweets Processed / ~96% Accuracy",
    githubUrl: "https://github.com/dharmender12/end-to-end-twitter-sentiment-analysis",
    liveUrl: "https://end-to-end-twitter-sentiment-analysis.streamlit.app/"
  },
  {
    title: "Amazon Reviews Big Data Pipeline",
    subtitle: "Medallion Architecture at Scale",
    description: "Built a large-scale review-processing pipeline using Medallion Architecture (Bronze, Silver, Gold layers) for scalable, reliable data processing across multi-gigabyte e-commerce datasets.",
    tools: ["PySpark", "Apache Spark", "Scala", "Medallion ETL"],
    metric: "Multi-Layered Scalable Processing",
    githubUrl: "https://github.com/dharmender12"
  },
  {
    title: "Text-to-Math Solver (GenAI)",
    subtitle: "Agentic Reasoning & Prompt Engineering",
    description: "Built a GenAI application applying prompt-based reasoning to structured math problems and natural language querying, demonstrating practical hands-on GenAI application development with low-latency LLM inference.",
    tools: ["Python", "LangChain", "Groq Llama 3", "Streamlit"],
    metric: "Sub-Second Agentic Reasoning",
    githubUrl: "https://github.com/dharmender12/text-to-math-solver-groq",
    liveUrl: "https://text-to-maths-groq.streamlit.app/"
  }
];

const SKILL_DOMAINS = [
  {
    category: "Client & Stakeholder Engagement",
    icon: Users,
    items: [
      "Needs Assessment",
      "Solution Tailoring",
      "Client Presentations",
      "Trusted-Advisor Communication",
      "Partner & Ecosystem Collaboration (IBM)",
      "Cross-Functional Collaboration"
    ]
  },
  {
    category: "Data & AI Domain Knowledge",
    icon: Sparkles,
    items: [
      "Machine Learning",
      "NLP & Text Analytics",
      "GenAI-Enabled Analytics (LangChain)",
      "Recommendation Systems",
      "Supply Chain & Manufacturing Analytics",
      "Sentiment Analytics"
    ]
  },
  {
    category: "Platforms & Tools",
    icon: Code2,
    items: [
      "Python",
      "SQL",
      "Apache Spark (PySpark)",
      "GCP & BigQuery",
      "Databricks",
      "Power BI & Advanced Excel",
      "R",
      "PostgreSQL & MySQL"
    ]
  },
  {
    category: "Reporting & Performance Metrics",
    icon: BarChart3,
    items: [
      "KPI Frameworks",
      "Executive Dashboards",
      "Performance Reporting",
      "Statistical & Hypothesis Testing",
      "Data Storytelling",
      "A/B Evaluation"
    ]
  }
];

const EDUCATION = [
  {
    degree: "Ph.D. in Astronomy (Statistical Analysis & Large-Scale Data Processing)",
    institution: "Central University of Himachal Pradesh",
    status: "Pursuing",
    badge: "Doctoral Research"
  },
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    status: "Pursuing",
    badge: "Computer Science"
  },
  {
    degree: "Master of Science - Physics",
    institution: "Central University of Himachal Pradesh",
    status: "Completed",
    badge: "Graduate Degree"
  },
  {
    degree: "Data Science Bootcamp",
    institution: "Masai School",
    status: "Completed",
    badge: "Full-Stack Analytics"
  }
];

const CERTIFICATIONS = [
  {
    title: "A Level - IT Professional Course",
    issuer: "NIELIT (Govt. of India)",
    detail: "Equivalent to Advanced Diploma in Computer Applications; aligned to Level 6 of NSQF."
  },
  {
    title: "O Level - Business Professional Programmer",
    issuer: "NIELIT (Govt. of India)",
    detail: "First level of the NIELIT IT Professional Course scheme."
  },
  {
    title: "Introduction to Machine Learning",
    issuer: "IIT Kharagpur (NPTEL)",
    detail: "Core algorithms, supervised and unsupervised learning theory."
  },
  {
    title: "Introduction to Big Data",
    issuer: "IBM Cognitive Classes",
    detail: "Distributed architecture, MapReduce concepts, and enterprise big data."
  },
  {
    title: "Introduction to Data Science",
    issuer: "Infosys Springboard",
    detail: "Statistical analysis, data pipelines, and exploratory methods."
  }
];

export default function App() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PROFILE.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-cyan-400 selection:text-black antialiased relative">
      {/* Subtle Ambient Glows - Editorial & Calm */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-blue-500/10 rounded-full blur-[130px]" />
      </div>

      {/* Simplified Editorial Navigation */}
      <header className="sticky top-0 z-50 bg-[#090d16]/80 backdrop-blur-md border-b border-white/5 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <span className="font-bold tracking-tight text-white text-base group-hover:text-cyan-400 transition-colors">
              {PROFILE.name.toUpperCase()}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/60 border border-emerald-500/30 text-[11px] font-mono text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-slate-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-400 hover:text-blue-400 hover:bg-white/5 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-slate-950 hover:bg-cyan-400 hover:text-slate-950 text-xs font-semibold tracking-wide transition-all shadow-md active:scale-95"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 relative z-10 space-y-28 pt-12 pb-24">
        {/* Editorial Hero Section (Inspired by Dribbble clean typography & calm structure) */}
        <section id="hero" className="pt-10 sm:pt-16 pb-8 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-white/10 text-xs font-mono text-cyan-300"
          >
            <Sparkles size={13} className="text-cyan-400" />
            <span>Data & AI Professional // Client Enablement</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] max-w-4xl"
          >
            Translating complex <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-300 to-purple-400">Data & AI capability</span> into business-ready impact.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed font-normal"
          >
            {PROFILE.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 pt-2"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-white text-slate-950 hover:bg-cyan-400 hover:text-slate-950 font-medium text-sm flex items-center gap-2 transition-all shadow-lg active:scale-95"
            >
              <span>Selected Projects</span>
              <ArrowUpRight size={16} />
            </a>
            <a
              href="#experience"
              className="px-6 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 font-medium text-sm flex items-center gap-2 transition-all active:scale-95"
            >
              <span>Professional Experience</span>
            </a>
            <button
              onClick={copyEmail}
              className="px-5 py-3 rounded-full bg-transparent hover:bg-white/5 text-slate-400 hover:text-white font-mono text-xs flex items-center gap-2 transition-all cursor-pointer"
            >
              {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copiedEmail ? "Email Copied!" : PROFILE.email}</span>
            </button>
          </motion.div>

          {/* Highlights Grid */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-white/5"
          >
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold font-mono text-white">EY</div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">Corporate Training Cohorts</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold font-mono text-cyan-400">100+</div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">IBM Program Learners</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold font-mono text-purple-400">1M+</div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">Tweets NLP Pipeline</div>
            </div>
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/5">
              <div className="text-2xl font-bold font-mono text-emerald-400">Ph.D.</div>
              <div className="text-xs text-slate-400 font-mono mt-0.5">Astronomy Data Analytics</div>
            </div>
          </motion.div>
        </section>

        {/* Selected Projects Section */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/5 pb-4">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Case Studies</span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
                Featured Projects
              </h2>
            </div>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-400 hover:text-cyan-400 flex items-center gap-1.5 transition-colors"
            >
              <span>View all on GitHub</span>
              <ArrowUpRight size={14} />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {PROJECTS.map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group p-7 rounded-2xl bg-white/[0.02] hover:bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-slate-900 text-cyan-300 border border-white/10">
                      {project.subtitle}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                          title="Open Live App"
                        >
                          <ArrowUpRight size={16} />
                        </a>
                      )}
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        title="View GitHub Repository"
                      >
                        <Github size={16} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-white/5 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-500">Key Outcome</span>
                    <span className="text-emerald-400 font-semibold">{project.metric}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map(tool => (
                      <span key={tool} className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/80 text-slate-300 border border-white/5">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Professional Experience Section */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <div className="border-b border-white/5 pb-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Career History</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Professional Experience
            </h2>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {exp.role}
                    </h3>
                    <div className="text-sm text-cyan-400 font-medium mt-0.5">
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-slate-900 text-slate-300 border border-white/10">
                      {exp.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-500">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-sm text-slate-300">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2">
                  {exp.skills.map(s => (
                    <span key={s} className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/5 text-slate-400">
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Skills & Competencies Grid */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="border-b border-white/5 pb-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Capabilities</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Skills & Competencies
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SKILL_DOMAINS.map((domain, idx) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={domain.category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-7 rounded-2xl bg-white/[0.02] border border-white/10 space-y-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-slate-900 text-cyan-400 border border-white/10">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-base font-bold text-white">
                      {domain.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {domain.items.map(item => (
                      <span
                        key={item}
                        className="text-xs font-mono px-3 py-1.5 rounded-xl bg-slate-900/80 text-slate-300 border border-white/5 hover:border-cyan-400/40 hover:text-white transition-all"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="space-y-8 scroll-mt-24">
          <div className="border-b border-white/5 pb-4">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Credentials</span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mt-1">
              Education & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Education List */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <GraduationCap size={16} className="text-cyan-400" />
                <span>Academic Degrees</span>
              </h3>
              <div className="space-y-3">
                {EDUCATION.map(edu => (
                  <div key={edu.degree} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-white leading-snug">{edu.degree}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-white/10 shrink-0">
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications List */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider flex items-center gap-2">
                <Award size={16} className="text-purple-400" />
                <span>Government & Industry Certifications</span>
              </h3>
              <div className="space-y-3">
                {CERTIFICATIONS.map(cert => (
                  <div key={cert.title} className="p-5 rounded-xl bg-white/[0.02] border border-white/5 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                      <span className="text-[10px] font-mono text-purple-300 shrink-0">{cert.issuer}</span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">{cert.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Footer Section (Clean Editorial Call to Action) */}
        <section id="contact" className="pt-12 scroll-mt-24">
          <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-b from-white/[0.04] to-transparent border border-white/10 text-center space-y-6">
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest">Connect Directly</span>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let's Discuss Data & AI Solutions.
            </h2>
            
            <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Open for Data & AI enablement roles, client solutions consulting, and technical leadership engagements.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="px-6 py-3 rounded-full bg-white text-slate-950 hover:bg-cyan-400 hover:text-slate-950 font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all shadow-md active:scale-95"
              >
                <Mail size={14} />
                <span>{PROFILE.email}</span>
              </a>

              <button
                onClick={copyPhone}
                className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 border border-white/10 font-mono text-xs flex items-center gap-2 transition-all cursor-pointer"
              >
                {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Phone size={14} />}
                <span>{copiedPhone ? "Phone Copied!" : PROFILE.phone}</span>
              </button>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-full bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-blue-400 border border-white/10 font-mono text-xs flex items-center gap-2 transition-all"
              >
                <Linkedin size={14} />
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={12} />
              </a>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/5 text-xs font-mono text-slate-500">
              <div>
                <span>{PROFILE.name.toUpperCase()}</span>
                <span className="mx-2">•</span>
                <span>{PROFILE.location}</span>
              </div>
              <div>
                © 2026 // DESIGNED_WITH_INTENTION
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
