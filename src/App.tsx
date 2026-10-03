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
  CircleDot,
  MessageSquare,
  Send,
  ExternalLink,
  Layers,
  Cpu
} from 'lucide-react';
import { StarBackground } from './components/StarBackground';
import { ContactModal } from './components/ContactModal';

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
    location: "Corporate Delivery",
    bullets: [
      "Selected as specialized trainer for university corporate cohorts, focusing on Advanced Data Analytics with Python, business intelligence storytelling, and applied machine learning.",
      "Delivered real-world client-focused case studies, bridging classroom theory and enterprise analytics needs for mixed stakeholder cohorts.",
      "Conducted weekly assessments and progress tracking, providing structured feedback reports to academic coordinators and corporate program sponsors."
    ]
  },
  {
    index: "02",
    role: "Data Science & AI Lead Trainer",
    company: "Allsoft Solutions (IBM Career Education Program Partner)",
    period: "Jan 2026 – Ongoing",
    badge: "IBM Program Partner",
    location: "Chandigarh, India",
    bullets: [
      "Engaged directly with partner institutions and prospective student cohorts to introduce IBM Career Education Program curricula in Data Science & AI.",
      "Delivered hands-on training to batches of 30+ in Machine Learning, Deep Learning, Big Data Analytics (Apache Spark), and Power BI.",
      "Created course materials, capstone project blueprints, and assessment rubrics tailored to student learning curves.",
      "Mentored students on end-to-end data pipelines, model deployment, and interview preparation for entry-level data roles."
    ]
  },
  {
    index: "03",
    role: "Project Intern (Astrophysics Data Processing)",
    company: "Indian Institute of Astrophysics (IIA)",
    period: "May 2022 – Aug 2022",
    badge: "Scientific Research",
    location: "Bengaluru, India",
    bullets: [
      "Analyzed astronomical observational datasets using Python and scientific computing libraries (NumPy, SciPy, Matplotlib).",
      "Assisted senior researchers in data reduction, error estimation, and statistical modeling of celestial photometric observations.",
      "Delivered a technical project report summarizing methodology and findings to the research supervisor."
    ]
  }
];

const PROJECTS = [
  {
    index: "01",
    title: "Supply Chain Analytics & Optimization",
    category: "Operational Intelligence & Predictive Analytics",
    description: "Designed a comprehensive analytics dashboard and predictive models to optimize supply chain inventory levels, forecast product demand, and identify fulfillment bottlenecks across multi-tier supplier networks.",
    tools: ["Python", "Pandas", "Scikit-Learn", "Power BI", "SQL"],
    metric: "Inventory Turnover & Lead-Time Optimization",
    githubUrl: "https://github.com/dharmender12/supply-chain-analytics-dashboard"
  },
  {
    index: "02",
    title: "Twitter Sentiment Analysis & NLP Engine",
    category: "Enterprise NLP & Stream Processing",
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
    category: "Tools & Technologies",
    icon: Code2,
    items: [
      "Python (NumPy, Pandas, Scikit-Learn)",
      "Apache Spark / PySpark",
      "Google Cloud Platform (BigQuery)",
      "Databricks Lakehouse",
      "Power BI & DAX",
      "Advanced SQL & ETL"
    ]
  },
  {
    category: "Enablement & Training Delivery",
    icon: BarChart3,
    items: [
      "Curriculum Design & Courseware",
      "Technical Workshops & Cohort Delivery",
      "Assessment Design & Outcome Reporting",
      "Individual Mentoring & Capstone Coaching",
      "Pre-Sales Technical Demos",
      "Knowledge Transfer Documentation"
    ]
  }
];

const EDUCATION = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "Lovely Professional University",
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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // In-Page Contact Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formSubject, setFormSubject] = useState('Data & AI Role Inquiry');
  const [formMessage, setFormMessage] = useState('');
  const [formStatus, setFormStatus] = useState<string | null>(null);

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

  const handleInPageSend = (e: React.FormEvent) => {
    e.preventDefault();
    const formattedSubject = encodeURIComponent(`[Portfolio Inquiry] ${formSubject} - from ${formName || 'Prospective Partner'}`);
    const formattedBody = encodeURIComponent(
      `Hello Dharmender,\n\n${formMessage || 'I would like to connect regarding Data & AI opportunities.'}\n\nBest regards,\n${formName || 'Inquirer'}\nEmail: ${formEmail || 'Not provided'}`
    );

    // Open Gmail directly in new tab
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}&su=${formattedSubject}&body=${formattedBody}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    // Also copy draft to clipboard
    navigator.clipboard.writeText(`To: ${PROFILE.email}\nSubject: ${formSubject}\n\n${formMessage}\n\nFrom: ${formName} (${formEmail})`);
    setFormStatus('Draft opened in Gmail & copied to clipboard!');
    setTimeout(() => setFormStatus(null), 4500);
  };

  const whatsappUrl = `https://wa.me/918544713601?text=${encodeURIComponent(
    `Hi Dharmender, I visited your portfolio and would like to discuss Data & AI solutions / opportunities.`
  )}`;

  return (
    <div className="relative min-h-screen bg-[#030014] text-zinc-100 font-sans selection:bg-violet-600 selection:text-white antialiased overflow-x-hidden">
      {/* 3D Space Background from sanidhyy/space-portfolio pattern */}
      <StarBackground />

      {/* Cosmic Nebula Ambient Glow Meshes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-[25%] left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-gradient-to-b from-violet-600/20 via-indigo-600/10 to-transparent blur-[120px] rounded-full" />
        <div className="absolute top-[35%] -right-[15%] w-[600px] h-[600px] bg-cyan-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-[10%] -left-[10%] w-[650px] h-[650px] bg-purple-600/10 blur-[140px] rounded-full" />
      </div>

      {/* Interactive Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        email={PROFILE.email}
        phone={PROFILE.phone}
        linkedin={PROFILE.linkedin}
        github={PROFILE.github}
      />

      {/* Glassmorphic Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#030014]/75 backdrop-blur-xl border-b border-white/10 transition-all">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-xl bg-violet-600/20 border border-violet-500/40 flex items-center justify-center text-violet-300 font-mono font-bold text-sm shadow-inner group-hover:scale-105 transition-transform">
              D
            </div>
            <span className="font-extrabold tracking-tight text-white text-base group-hover:text-violet-300 transition-colors">
              {PROFILE.name.toUpperCase()}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[11px] font-mono text-emerald-400 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for Data & AI Roles
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 text-xs font-mono text-zinc-400">
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#education" className="hover:text-white transition-colors">Education</a>
            <button 
              onClick={() => setIsContactModalOpen(true)} 
              className="hover:text-violet-300 transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-xs font-medium tracking-wide transition-all shadow-lg shadow-violet-600/30 active:scale-95 cursor-pointer"
            >
              <span>Get in touch</span>
              <ArrowUpRight size={13} />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto px-6 relative z-10 space-y-28 pt-10 pb-28">
        {/* Space-Themed Hero Section */}
        <section id="hero" className="pt-8 sm:pt-16 pb-4 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300 backdrop-blur-md shadow-sm"
          >
            <Sparkles size={13} className="text-violet-400 animate-pulse" />
            <span>Data & AI Professional • Enablement & Client Solutions</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-4 max-w-4xl"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.06]">
              Turning technical capability into clear, <span className="bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">business-ready</span> impact.
            </h1>
            <p className="text-lg sm:text-xl text-zinc-300 font-medium">
              {PROFILE.title} — {PROFILE.subtitle}
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-zinc-400 text-base sm:text-lg max-w-2xl leading-relaxed font-normal"
          >
            {PROFILE.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            {/* Primary Get In Touch Button */}
            <button
              onClick={() => setIsContactModalOpen(true)}
              className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-medium text-sm flex items-center gap-2 transition-all shadow-xl shadow-violet-600/30 active:scale-95 cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight size={15} />
            </button>

            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/15 font-medium text-sm flex items-center gap-2 transition-all active:scale-95 backdrop-blur-sm"
            >
              <span>Selected Projects</span>
            </a>

            <a
              href="#experience"
              className="px-5 py-3 rounded-full bg-transparent hover:bg-white/5 text-zinc-300 border border-white/10 font-medium text-sm flex items-center gap-2 transition-all active:scale-95"
            >
              <span>View Experience</span>
            </a>

            <button
              onClick={copyEmail}
              className="px-5 py-3 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 font-mono text-xs flex items-center gap-2 transition-all cursor-pointer border border-white/10 backdrop-blur-sm"
            >
              {copiedEmail ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copiedEmail ? "Email Copied!" : PROFILE.email}</span>
            </button>
          </motion.div>

          {/* Quick Metrics Strip */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-10 border-t border-white/10"
          >
            <div className="p-5 rounded-2xl glass-panel glass-panel-hover">
              <div className="text-3xl font-extrabold font-mono text-white">EY</div>
              <div className="text-xs text-zinc-400 font-mono mt-1">Corporate Training Engagement</div>
            </div>
            <div className="p-5 rounded-2xl glass-panel glass-panel-hover">
              <div className="text-3xl font-extrabold font-mono text-white">IBM</div>
              <div className="text-xs text-zinc-400 font-mono mt-1">Career Education Program Lead</div>
            </div>
            <div className="p-5 rounded-2xl glass-panel glass-panel-hover">
              <div className="text-3xl font-extrabold font-mono text-white">1M+</div>
              <div className="text-xs text-zinc-400 font-mono mt-1">Records Processed in NLP/Spark</div>
            </div>
            <div className="p-5 rounded-2xl glass-panel glass-panel-hover">
              <div className="text-3xl font-extrabold font-mono text-white">NIELIT</div>
              <div className="text-xs text-zinc-400 font-mono mt-1">A & O Level Certified (Govt.)</div>
            </div>
          </motion.div>
        </section>

        {/* Infinite Marquee Ticker */}
        <section className="relative overflow-hidden py-4 border-y border-white/10 bg-white/[0.02]">
          <div className="animate-marquee gap-8 items-center text-xs font-mono uppercase tracking-widest text-zinc-400">
            {MARQUEE_SKILLS.concat(MARQUEE_SKILLS).map((skill, idx) => (
              <span key={idx} className="flex items-center gap-8 shrink-0 hover:text-violet-300 transition-colors">
                <span>{skill}</span>
                <span className="text-violet-500">✦</span>
              </span>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="space-y-8 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-400">01 // Profile & Purpose</span>
            <span className="text-xs font-mono text-zinc-500">Chandigarh, India</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-4">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Empowering teams and solving business puzzles with modern Data & AI.
              </h2>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Bridging deep technical execution with clear stakeholder articulation. Whether training enterprise clients or architecting medallion data pipelines, the mission is practical, measurable impact.
              </p>
              
              <div className="p-5 rounded-2xl glass-panel border border-violet-500/20 space-y-2">
                <span className="text-xs font-mono text-violet-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Terminal size={14} />
                  Primary Focus Areas
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                  Machine Learning • Big Data Pipelines (Spark/PySpark) • Generative AI & LangChain • Client Technical Enablement • Cloud Analytics (GCP BigQuery / Databricks)
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 rounded-2xl glass-panel glass-panel-hover space-y-3">
                <span className="text-xs font-mono text-violet-400">01 / Enablement</span>
                <h3 className="text-base font-bold text-white">Cohort & Corporate Training</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Proven track record conducting enterprise-grade training for EY and IBM programs, mentoring learners into competent data practitioners.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-panel glass-panel-hover space-y-3">
                <span className="text-xs font-mono text-cyan-400">02 / Architecture</span>
                <h3 className="text-base font-bold text-white">Distributed Pipelines</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Experience designing multi-tier ETL processes with Apache Spark, Scala, PySpark, and Medallion architectures for reliable analytics.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-panel glass-panel-hover space-y-3">
                <span className="text-xs font-mono text-purple-400">03 / Applied AI</span>
                <h3 className="text-base font-bold text-white">NLP & GenAI Systems</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Building agentic applications using LangChain, Groq Llama 3, and high-accuracy sentiment classification models on massive text datasets.
                </p>
              </div>

              <div className="p-6 rounded-2xl glass-panel glass-panel-hover space-y-3">
                <span className="text-xs font-mono text-emerald-400">04 / Communication</span>
                <h3 className="text-base font-bold text-white">Stakeholder Storytelling</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  Translating complex algorithmic outputs into intuitive executive dashboards (Power BI) and actionable decision metrics for leadership.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Projects Section */}
        <section id="projects" className="space-y-8 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-400">02 // Selected Projects</span>
            <span className="text-xs font-mono text-zinc-500">Case Studies & Live Demos</span>
          </div>

          <div className="space-y-6">
            {PROJECTS.map((proj) => (
              <motion.article
                key={proj.title}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
                className="group p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover space-y-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-violet-400 font-bold">{proj.index}</span>
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider">{proj.category}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {proj.liveUrl && (
                      <a
                        href={proj.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-violet-600/20 border border-violet-500/40 text-violet-300 hover:bg-violet-600 hover:text-white text-xs font-mono transition-all"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight size={12} />
                      </a>
                    )}
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline">
                  <div className="lg:col-span-5 space-y-2">
                    <h3 className="text-2xl font-bold text-white group-hover:text-violet-300 transition-colors">
                      {proj.title}
                    </h3>
                    <div className="inline-block text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-1 rounded-md">
                      {proj.metric}
                    </div>
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {proj.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-zinc-300 text-xs font-mono"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="space-y-8 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-400">03 // Professional Experience</span>
            <span className="text-xs font-mono text-zinc-500">Corporate & Research Track</span>
          </div>

          <div className="space-y-6">
            {EXPERIENCES.map((exp) => (
              <div 
                key={exp.company + exp.role} 
                className="p-6 sm:p-8 rounded-3xl glass-panel glass-panel-hover space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-mono text-violet-400 font-bold">{exp.index}</span>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    </div>
                    <p className="text-sm text-zinc-400 mt-0.5">
                      <span className="text-zinc-200 font-semibold">{exp.company}</span> • {exp.location}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 font-medium">
                      {exp.badge}
                    </span>
                    <span className="text-xs font-mono text-zinc-400">{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-2.5 pt-2">
                  {exp.bullets.map((b, i) => (
                    <li key={i} className="text-sm text-zinc-300 flex items-start gap-3 leading-relaxed">
                      <span className="text-violet-400 font-bold mt-1 text-xs shrink-0">—</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Matrix Section */}
        <section id="skills" className="space-y-8 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-400">04 // Core Competencies</span>
            <span className="text-xs font-mono text-zinc-500">Resume Validated</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SKILL_DOMAINS.map((domain) => {
              const IconComp = domain.icon;
              return (
                <div key={domain.category} className="p-6 rounded-3xl glass-panel glass-panel-hover space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-xl bg-violet-600/20 border border-violet-500/30 text-violet-300">
                      <IconComp size={18} />
                    </div>
                    <h3 className="text-base font-bold text-white">{domain.category}</h3>
                  </div>

                  <ul className="grid grid-cols-1 gap-2 pt-1">
                    {domain.items.map((item) => (
                      <li key={item} className="text-xs font-mono text-zinc-300 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* Education & Certifications Section */}
        <section id="education" className="space-y-8 scroll-mt-24">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-400">05 // Academic & Certifications</span>
            <span className="text-xs font-mono text-zinc-500">Credentials</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Education List */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <GraduationCap size={16} className="text-violet-400" />
                <span>Formal Education</span>
              </h3>
              <div className="space-y-3">
                {EDUCATION.map(edu => (
                  <div key={edu.degree} className="p-5 rounded-2xl glass-panel space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-white leading-snug">{edu.degree}</h4>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-zinc-200 border border-white/10 shrink-0">
                        {edu.status}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400">{edu.institution}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications List */}
            <div className="lg:col-span-6 space-y-4">
              <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <Award size={16} className="text-cyan-400" />
                <span>Government & Industry Certifications</span>
              </h3>
              <div className="space-y-3">
                {CERTIFICATIONS.map(cert => (
                  <div key={cert.title} className="p-5 rounded-2xl glass-panel space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <h4 className="text-sm font-bold text-white">{cert.title}</h4>
                      <span className="text-[10px] font-mono text-violet-300 shrink-0 font-medium">{cert.issuer}</span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{cert.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Interactive Communication Center */}
        <section id="contact" className="pt-8 scroll-mt-24">
          <div className="p-8 sm:p-14 rounded-3xl bg-zinc-950/80 border border-white/15 text-white space-y-8 shadow-2xl backdrop-blur-xl relative overflow-hidden">
            {/* Subtle glow in contact card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/15 blur-3xl pointer-events-none rounded-full" />
            
            <div className="text-center space-y-3 max-w-2xl mx-auto">
              <span className="text-xs font-mono text-violet-400 uppercase tracking-widest">Connect & Collaborate</span>
              
              <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
                Let's build Data & AI solutions together.
              </h2>
              
              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                Open for Data & AI enablement roles, client solutions consulting, and technical training leadership engagements. Reach out through any channel below:
              </p>
            </div>

            {/* Quick Action Interactive Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
              {/* Email Direct */}
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                    <span className="flex items-center gap-1.5 text-violet-300">
                      <Mail size={13} />
                      Email
                    </span>
                    <button
                      onClick={copyEmail}
                      className="text-[11px] hover:text-white flex items-center gap-1"
                    >
                      {copiedEmail ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                      <span>{copiedEmail ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <div className="text-xs font-semibold text-zinc-200 mt-1 truncate" title={PROFILE.email}>
                    {PROFILE.email}
                  </div>
                </div>
                <div className="flex gap-1.5 pt-1">
                  <a
                    href={`https://mail.google.com/mail/?view=cm&fs=1&to=${PROFILE.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 rounded-lg bg-violet-600 hover:bg-violet-500 text-white text-[11px] font-mono text-center transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Gmail Web</span>
                    <ExternalLink size={10} />
                  </a>
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="flex-1 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] font-mono text-center transition-colors"
                  >
                    Mail App
                  </a>
                </div>
              </div>

              {/* Phone & WhatsApp */}
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Phone size={13} />
                      Phone
                    </span>
                    <button
                      onClick={copyPhone}
                      className="text-[11px] hover:text-white flex items-center gap-1"
                    >
                      {copiedPhone ? <Check size={11} className="text-emerald-400" /> : <Copy size={11} />}
                      <span>{copiedPhone ? "Copied" : "Copy"}</span>
                    </button>
                  </div>
                  <div className="text-xs font-semibold text-zinc-200 mt-1">{PROFILE.phone}</div>
                </div>
                <div className="flex gap-1.5 pt-1">
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-mono text-center transition-colors flex items-center justify-center gap-1"
                  >
                    <MessageSquare size={10} />
                    <span>WhatsApp</span>
                  </a>
                  <a
                    href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                    className="flex-1 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] font-mono text-center transition-colors"
                  >
                    Call
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-zinc-400 font-mono flex items-center gap-1.5 text-blue-400">
                    <Linkedin size={13} />
                    LinkedIn
                  </div>
                  <div className="text-xs font-semibold text-zinc-200 mt-1">/in/dharmender-thakur1220</div>
                </div>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-[11px] font-mono text-center transition-colors flex items-center justify-center gap-1"
                >
                  <span>Connect Profile</span>
                  <ExternalLink size={10} />
                </a>
              </div>

              {/* GitHub */}
              <div className="p-4 rounded-2xl bg-zinc-900/90 border border-zinc-800 space-y-2 flex flex-col justify-between">
                <div>
                  <div className="text-xs text-zinc-400 font-mono flex items-center gap-1.5">
                    <Github size={13} />
                    GitHub
                  </div>
                  <div className="text-xs font-semibold text-zinc-200 mt-1">@dharmender12</div>
                </div>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-[11px] font-mono text-center transition-colors flex items-center justify-center gap-1"
                >
                  <span>View Code</span>
                  <ExternalLink size={10} />
                </a>
              </div>
            </div>

            {/* In-Page Message Form */}
            <div className="max-w-2xl mx-auto p-6 rounded-2xl bg-zinc-900/70 border border-zinc-800 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Send size={14} className="text-violet-400" />
                  <span>Send a Message or Project Inquiry</span>
                </h4>
                <button
                  type="button"
                  onClick={() => setIsContactModalOpen(true)}
                  className="text-xs font-mono text-violet-400 hover:text-violet-300 underline"
                >
                  Open Dialog
                </button>
              </div>

              <form onSubmit={handleInPageSend} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors"
                  />
                </div>

                <select
                  value={formSubject}
                  onChange={(e) => setFormSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-200 focus:outline-none focus:border-violet-500 transition-colors"
                >
                  <option value="Data & AI Role Inquiry">Full-time Data & AI Role / Opportunity</option>
                  <option value="Client Solutions Consulting">Client Solutions & Consulting Project</option>
                  <option value="Corporate Training Engagement">Corporate / Technical Training Engagement</option>
                  <option value="General Technical Discussion">General Discussion / Mentorship</option>
                </select>

                <textarea
                  rows={3}
                  placeholder="Describe your inquiry, role requirements, or project details..."
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-800 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500 transition-colors resize-none"
                />

                {formStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-800 text-emerald-300 text-xs font-mono"
                  >
                    {formStatus}
                  </motion.div>
                )}

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-xl bg-violet-600 hover:bg-violet-500 text-white font-medium text-xs font-mono flex items-center gap-2 transition-all shadow-lg shadow-violet-600/25 active:scale-95 cursor-pointer"
                  >
                    <Send size={13} />
                    <span>Compose in Gmail (1-Click)</span>
                  </button>

                  <a
                    href={`mailto:${PROFILE.email}?subject=${encodeURIComponent(formSubject)}&body=${encodeURIComponent(formMessage)}`}
                    className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono transition-colors"
                  >
                    Default Mail App
                  </a>
                </div>
              </form>
            </div>

            <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-zinc-800/80 text-xs font-mono text-zinc-500">
              <div>
                <span>{PROFILE.name.toUpperCase()}</span>
                <span className="mx-2">•</span>
                <span>{PROFILE.location}</span>
              </div>
              <div>
                © 2026 // PERSONAL DATA & AI PORTFOLIO
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
