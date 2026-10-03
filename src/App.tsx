/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Check, 
  Copy, 
  GraduationCap, 
  Award, 
  Sparkles, 
  Users, 
  Code2, 
  BarChart3, 
  Terminal,
  CircleDot
} from 'lucide-react';

const PROFILE = {
  name: "Dharmender Thakur",
  title: "Data & AI Professional",
  subtitle: "Client Solutions, Enablement & Business Development",
  email: "dharmender98thakur@gmail.com",
  phone: "+91 8544713601",
  location: "Chandigarh, India",
  linkedin: "https://linkedin.com/in/dharmender-thakur1220",
  github: "https://github.com/dharmender12",
  summary: "Data & AI professional with hands-on experience delivering technical training to university and corporate cohorts, including an ongoing EY engagement via Chitkara University and IBM Career Education Program training at Allsoft Solution. Skilled in machine learning, NLP, GenAI (LangChain), Apache Spark, GCP, Databricks and Power BI, with a proven ability to turn technical capability into clear, business-ready language for mixed audiences. Experienced in understanding client needs, tailoring content to them, presenting to stakeholders, and reporting on outcomes."
};

const MARQUEE_SKILLS = [
  "Apache Spark",
  "LangChain & GenAI",
  "Databricks",
  "GCP BigQuery",
  "Power BI",
  "PySpark",
  "Machine Learning",
  "Advanced SQL",
  "Medallion Architecture",
  "NLP Text Analytics",
  "Client Enablement",
  "Statistical Inference"
];

const EXPERIENCES = [
  {
    index: "01",
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
    index: "02",
    role: "Data Science Instructor",
    company: "Allsoft Solution (IBM Career Education Program)",
    period: "Oct 2025 – Jul 2026",
    badge: "IBM Partner Model",
    highlights: [
      "Delivered Business Analytics using Python to 100+ university students under IBM's Career Education Program, working within a partner-led delivery model.",
      "Covered KPI analysis, Power BI dashboard creation, and translation of business problems into decision-ready analytical outputs.",
      "Coached learners on presenting data insights to non-technical audiences, mirroring the analyst-to-stakeholder handoff in client engagements."
    ],
    skills: ["Python", "Power BI", "KPI Frameworks", "Stakeholder Handoff", "Mentorship"]
  },
  {
    index: "03",
    role: "Visiting Research Student - Data Analytics",
    company: "Indian Institute of Astrophysics (IIA)",
    period: "Apr 2025 – Sep 2025",
    badge: "Scientific Computing",
    highlights: [
      "Built end-to-end pipelines to clean, preprocess and validate high-volume, multi-dimensional datasets, ensuring data quality for downstream analysis.",
      "Produced analytical dashboards and research reports that translated complex technical findings into clear summaries for non-technical stakeholders.",
      "Applied hypothesis testing, regression and statistical methods to derive insights from structured and unstructured data."
    ],
    skills: ["Data Pipelines", "Hypothesis Testing", "Spectroscopic Analytics", "Dashboards"]
  }
];

const PROJECTS = [
  {
    index: "01",
    title: "Supply Chain & Inventory Optimization Analytics",
    category: "Decision Intelligence",
    description: "Designed an analytics system evaluating shipment performance, supplier reliability and inventory efficiency for manufacturing and logistics decision-making. Built interactive Power BI dashboards tracking on-time delivery, inventory turnover, and supplier risk scores.",
    tools: ["Python", "SQL", "Power BI", "Supply Chain Analytics"],
    metric: "Turnover & Reliability Optimization",
    githubUrl: "https://github.com/dharmender12/Supply-Chain-Inventory-Optimization-System",
    liveUrl: "https://supply-chain-analytics-app.vercel.app/"
  },
  {
    index: "02",
    title: "Twitter Sentiment Analysis - Real-Time NLP Pipeline",
    category: "NLP & Streaming Analytics",
    description: "Processed 1M+ tweets end-to-end (ingestion, preprocessing, inference) at ~96% accuracy. Delivered sentiment insights, polarity distributions, and trend telemetry through structured reports and real-time dashboards.",
    tools: ["Python", "NLP", "TensorFlow", "Streamlit"],
    metric: "1M+ Tweets Processed / ~96% Accuracy",
    githubUrl: "https://github.com/dharmender12/end-to-end-twitter-sentiment-analysis",
    liveUrl: "https://end-to-end-twitter-sentiment-analysis.streamlit.app/"
  },
  {
    index: "03",
    title: "Amazon Reviews Big Data Pipeline",
    category: "Distributed Data Engineering",
    description: "Built a large-scale review-processing pipeline using Medallion Architecture (Bronze, Silver, Gold layers) for scalable, reliable data processing across multi-gigabyte e-commerce datasets.",
    tools: ["PySpark", "Apache Spark", "Scala", "Medallion ETL"],
    metric: "Multi-Layered Scalable Processing",
    githubUrl: "https://github.com/dharmender12"
  },
  {
    index: "04",
    title: "Text-to-Math Solver (GenAI)",
    category: "Agentic AI & Prompt Systems",
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
    <div className="min-h-screen bg-[#fafafa] text-zinc-900 font-sans selection:bg-zinc-900 selection:text-white antialiased">
      {/* Editorial Navigation */}
      <header className="sticky top-0 z-50 bg-[#fafafa]/90 backdrop-blur-md border-b border-zinc-200/80 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <span className="font-extrabold tracking-tight text-zinc-950 text-base group-hover:text-zinc-600 transition-colors">
              {PROFILE.name.toUpperCase()}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-700 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for Data & AI Roles
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-zinc-600">
            <a href="#about" className="hover:text-zinc-950 transition-colors">About</a>
            <a href="#projects" className="hover:text-zinc-950 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-zinc-950 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-zinc-950 transition-colors">Skills</a>
            <a href="#education" className="hover:text-zinc-950 transition-colors">Education</a>
            <a href="#contact" className="hover:text-zinc-950 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-all"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 text-xs font-medium tracking-wide transition-all shadow-sm active:scale-95"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 relative space-y-24 pt-10 pb-28">
        {/* Editorial Hero Section (Dymas Alfin Style: Clean, Monochromatic, Typographic) */}
        <section id="hero" className="pt-8 sm:pt-14 pb-4 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700"
          >
            <CircleDot size={12} className="text-zinc-900" />
            <span>Data & AI Professional • Enablement & Client Solutions</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 max-w-4xl"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-950 leading-[1.06]">
              Turning technical capability into clear, <span className="underline decoration-zinc-300 underline-offset-8">business-ready</span> impact.
            </h1>
            <p className="text-lg sm:text-xl text-zinc-600 font-medium">
              {PROFILE.title} — {PROFILE.subtitle}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-700 text-base sm:text-lg max-w-2xl leading-relaxed font-normal"
          >
            {PROFILE.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-zinc-950 text-white hover:bg-zinc-800 font-medium text-sm flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <span>Selected Projects</span>
              <ArrowUpRight size={15} />
            </a>
            <a
              href="#experience"
              className="px-6 py-3 rounded-full bg-white hover:bg-zinc-100 text-zinc-900 border border-zinc-300 font-medium text-sm flex items-center gap-2 transition-all active:scale-95 shadow-sm"
            >
              <span>View Experience</span>
            </a>
            <button
              onClick={copyEmail}
              className="px-5 py-3 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-700 font-mono text-xs flex items-center gap-2 transition-all cursor-pointer border border-zinc-200"
            >
              {copiedEmail ? <Check size={14} className="text-emerald-600" /> : <Copy size={14} />}
              <span>{copiedEmail ? "Email Copied!" : PROFILE.email}</span>
            </button>
          </motion.div>

          {/* Quick Metrics Editorial Strip */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-zinc-200"
          >
            <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <div className="text-3xl font-extrabold font-mono text-zinc-950">EY</div>
              <div className="text-xs text-zinc-500 font-mono mt-1">Corporate Training Engagement</div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <div className="text-3xl font-extrabold font-mono text-zinc-950">100+</div>
              <div className="text-xs text-zinc-500 font-mono mt-1">Learners Coached (IBM Program)</div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <div className="text-3xl font-extrabold font-mono text-zinc-950">1M+</div>
              <div className="text-xs text-zinc-500 font-mono mt-1">Tweets NLP Pipeline</div>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm">
              <div className="text-3xl font-extrabold font-mono text-zinc-950">Ph.D.</div>
              <div className="text-xs text-zinc-500 font-mono mt-1">Astronomy Data Analytics (CUHP)</div>
            </div>
          </motion.div>
        </section>

        {/* Infinite Marquee Strip (Clean Monochrome Animation) */}
        <section className="overflow-hidden py-4 border-y border-zinc-200 bg-white -mx-6 px-6">
          <div className="animate-marquee flex items-center gap-8 text-xs font-mono text-zinc-600 uppercase tracking-widest whitespace-nowrap">
            {[...MARQUEE_SKILLS, ...MARQUEE_SKILLS].map((item, i) => (
              <span key={i} className="flex items-center gap-6">
                <span>{item}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-zinc-300" />
              </span>
            ))}
          </div>
        </section>

        {/* Selected Projects (Dribbble Layout: Generous Cards, Clean Typography, Hover Animations) */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-4">
            <div>
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Portfolio</span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mt-1">
                Featured Case Studies
              </h2>
            </div>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-zinc-600 hover:text-zinc-950 flex items-center gap-1.5 transition-colors"
            >
              <span>View all on GitHub (@dharmender12)</span>
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
                className="group p-8 rounded-3xl bg-white hover:bg-zinc-50 border border-zinc-200 hover:border-zinc-900 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200 font-medium">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a 
                          href={project.liveUrl} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="w-8 h-8 rounded-full bg-zinc-100 group-hover:bg-zinc-950 text-zinc-700 group-hover:text-white flex items-center justify-center transition-all"
                          title="Open Live App"
                        >
                          <ArrowUpRight size={15} />
                        </a>
                      )}
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-full bg-zinc-100 group-hover:bg-zinc-950 text-zinc-700 group-hover:text-white flex items-center justify-center transition-all"
                        title="View GitHub Repository"
                      >
                        <Github size={15} />
                      </a>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-zinc-950 group-hover:text-zinc-800 transition-colors leading-tight">
                    {project.title}
                  </h3>

                  <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                    {project.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-zinc-100 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-zinc-500">Business Impact</span>
                    <span className="text-zinc-900 font-semibold">{project.metric}</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.map(tool => (
                      <span key={tool} className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-zinc-100 text-zinc-700 border border-zinc-200/60">
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
          <div className="border-b border-zinc-200 pb-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Career</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mt-1">
              Professional Experience
            </h2>
          </div>

          <div className="space-y-4">
            {EXPERIENCES.map((exp, idx) => (
              <motion.div
                key={exp.role + exp.company}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-zinc-200 hover:border-zinc-400 transition-all space-y-4 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-mono text-zinc-400 font-bold">{exp.index}</span>
                    <div>
                      <h3 className="text-xl font-bold text-zinc-950">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-medium text-zinc-600 mt-0.5">
                        {exp.company}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-800 border border-zinc-200">
                      {exp.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-500">
                      {exp.period}
                    </span>
                  </div>
                </div>

                <ul className="space-y-2.5 text-sm text-zinc-700 pt-2">
                  {exp.highlights.map((item, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-3 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-900 mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-zinc-100 flex flex-wrap gap-2">
                  {exp.skills.map(s => (
                    <span key={s} className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-100 text-zinc-600">
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
          <div className="border-b border-zinc-200 pb-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Expertise</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mt-1">
              Skills & Core Competencies
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
                  className="p-8 rounded-3xl bg-white border border-zinc-200 space-y-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-2xl bg-zinc-100 text-zinc-900 border border-zinc-200">
                      <Icon size={18} />
                    </div>
                    <h3 className="text-base font-bold text-zinc-950">
                      {domain.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {domain.items.map(item => (
                      <span
                        key={item}
                        className="text-xs font-mono px-3 py-1.5 rounded-xl bg-zinc-50 text-zinc-800 border border-zinc-200 hover:border-zinc-950 hover:bg-zinc-900 hover:text-white transition-all cursor-default"
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
          <div className="border-b border-zinc-200 pb-4">
            <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">Credentials</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-950 tracking-tight mt-1">
              Education & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Education List */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-sm font-mono text-zinc-600 uppercase tracking-wider flex items-center gap-2">
                <GraduationCap size={16} className="text-zinc-950" />
                <span>Academic Degrees</span>
              </h3>
              <div className="space-y-3">
                {EDUCATION.map(edu => (
                  <div key={edu.degree} className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-zinc-950 leading-snug">{edu.degree}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-100 text-zinc-800 border border-zinc-200 shrink-0">
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-500">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications List */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-sm font-mono text-zinc-600 uppercase tracking-wider flex items-center gap-2">
                <Award size={16} className="text-zinc-950" />
                <span>Government & Industry Certifications</span>
              </h3>
              <div className="space-y-3">
                {CERTIFICATIONS.map(cert => (
                  <div key={cert.title} className="p-5 rounded-2xl bg-white border border-zinc-200 shadow-sm space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-zinc-950">{cert.title}</h4>
                      <span className="text-[10px] font-mono text-zinc-600 shrink-0 font-medium">{cert.issuer}</span>
                    </div>
                    <p className="text-xs text-zinc-500 leading-relaxed">{cert.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Footer Section (Clean Editorial Call to Action) */}
        <section id="contact" className="pt-8 scroll-mt-24">
          <div className="p-8 sm:p-16 rounded-3xl bg-zinc-950 text-white text-center space-y-6 shadow-2xl">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">Connect Directly</span>
            
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let's build Data & AI solutions together.
            </h2>
            
            <p className="text-zinc-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
              Open for Data & AI enablement roles, client solutions consulting, and technical training leadership engagements.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
              <a
                href={`mailto:${PROFILE.email}`}
                className="px-6 py-3.5 rounded-full bg-white text-zinc-950 hover:bg-zinc-200 font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all shadow-md active:scale-95"
              >
                <Mail size={14} />
                <span>{PROFILE.email}</span>
              </a>

              <button
                onClick={copyPhone}
                className="px-5 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-mono text-xs flex items-center gap-2 transition-all cursor-pointer"
              >
                {copiedPhone ? <Check size={14} className="text-emerald-400" /> : <Phone size={14} />}
                <span>{copiedPhone ? "Phone Copied!" : PROFILE.phone}</span>
              </button>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-mono text-xs flex items-center gap-2 transition-all"
              >
                <Linkedin size={14} />
                <span>LinkedIn Profile</span>
                <ArrowUpRight size={12} />
              </a>

              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 border border-zinc-700 font-mono text-xs flex items-center gap-2 transition-all"
              >
                <Github size={14} />
                <span>GitHub (@dharmender12)</span>
                <ArrowUpRight size={12} />
              </a>
            </div>

            <div className="pt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800 text-xs font-mono text-zinc-400">
              <div>
                <span>{PROFILE.name.toUpperCase()}</span>
                <span className="mx-2">•</span>
                <span>{PROFILE.location}</span>
              </div>
              <div>
                © 2026 // PERSONAL PORTFOLIO
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
