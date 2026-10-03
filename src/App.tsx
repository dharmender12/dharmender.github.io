/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Database, 
  BarChart3, 
  Cpu, 
  BrainCircuit, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  ChevronRight,
  Code2,
  Telescope,
  TrendingUp,
  MessageSquare,
  Sparkles,
  Search,
  X,
  Layers,
  Star,
  GitFork,
  Activity,
  Copy,
  Check,
  RefreshCw,
  Server,
  Zap,
  Terminal,
  FileText
} from 'lucide-react';
import { cn } from './lib/utils';
import { DataUniverseCanvas } from './components/DataUniverseCanvas';
import { Card3D } from './components/Card3D';
import { DataPipeline3D } from './components/DataPipeline3D';
import { ErrorBoundary } from './components/ErrorBoundary';

// User Profile Constant Info
const PROFILE = {
  name: "Dharmender Thakur, PhD",
  role: "Data Scientist | ML Engineer | Astronomy Researcher",
  bio: "Bridging Astrophysical Precision with Enterprise Intelligence. Expert in high-dimensional statistical modeling, distributed PySpark pipelines, and production Machine Learning systems.",
  githubUsername: "dharmender12",
  githubUrl: "https://github.com/dharmender12",
  linkedinUrl: "https://www.linkedin.com/in/dharmender-thakur1220/",
  email: "dharmender98thakur@gmail.com",
  location: "Chandigarh / Shimla, India"
};

// Curated Case Studies
const FEATURED_PROJECTS = [
  {
    title: "Supply Chain & Inventory Optimization",
    subtitle: "Enterprise Predictive Logistics",
    description: "Architected an end-to-end predictive inventory management system. Modeled historical SKU velocity and supplier lead-time variances to automate replenishment orders across regional fulfillment centers.",
    tools: ['Python', 'SQL', 'Power BI', 'Django', 'Time Series'],
    impact: "Reduced stockouts by 22% and increased inventory turnover by 15%.",
    icon: TrendingUp,
    category: "Data Science",
    githubUrl: "https://github.com/dharmender12/Supply-Chain-Inventory-Optimization-System",
    liveUrl: "https://supply-chain-analytics-app.vercel.app/"
  },
  {
    title: "Star Formation in DLAs",
    subtitle: "High-Dimensional Astrophysical Pipeline",
    description: "Engineered a high-performance research pipeline analyzing signal-to-noise ratios in multi-gigabyte spectroscopic observations. Formulated Markov Chain Monte Carlo (MCMC) Bayesian inference for cosmic gas systems.",
    tools: ['Python', 'Scipy', 'Bayesian MCMC', 'Astrophysics FITS', 'Big Data'],
    impact: "Automated signal extraction across 500GB+ of raw astronomical spectra with 98% accuracy.",
    icon: Telescope,
    category: "Research",
    githubUrl: "https://github.com/dharmender12/Star-Formation-in-DLAs",
    scholarUrl: "https://scholar.google.com/citations?user=LUqb9dYAAAAJ"
  },
  {
    title: "LangChain AI Agent & Text-to-Math Solver",
    subtitle: "Autonomous Agentic AI Engine",
    description: "Production GenAI application built with LangChain, Groq LLM inference, and Streamlit. Employs multi-agent prompt chains to solve complex mathematical proofs and natural language queries into SQL.",
    tools: ['LangChain', 'Groq Llama 3', 'Streamlit', 'Python', 'Agentic AI'],
    impact: "Sub-second inference response with 94% zero-shot accuracy on benchmark reasoning sets.",
    icon: BrainCircuit,
    category: "NLP & GenAI",
    githubUrl: "https://github.com/dharmender12/text-to-math-solver-groq",
    liveUrl: "https://text-to-maths-groq.streamlit.app/"
  },
  {
    title: "Anomaly Detection in CSAGN",
    subtitle: "Astrophysical Machine Learning System",
    description: "Machine learning classifier designed to identify rare Changing-State Active Galactic Nuclei (CSAGN) within massive time-domain sky survey databases.",
    tools: ['Python', 'Scikit-Learn', 'Feature Engineering', 'XGBoost'],
    impact: "Identified high-probability cosmic transition events with 96.5% precision.",
    icon: Cpu,
    category: "Research",
    githubUrl: "https://github.com/dharmender12/anamoly_detection_csagn"
  },
  {
    title: "Deep Learning Titanic Survival Predictor",
    subtitle: "Neural Network Classification",
    description: "Neural network classifier trained with PyTorch/TensorFlow, featuring end-to-end data pipelines, custom imputation for missing covariates, and an interactive Streamlit UI.",
    tools: ['PyTorch', 'TensorFlow', 'Streamlit', 'Python', 'Deep Learning'],
    impact: "Achieved top 5% Kaggle validation accuracy with explainable SHAP feature weights.",
    icon: Activity,
    category: "Data Science",
    githubUrl: "https://github.com/dharmender12/titanic-survival-prediction-dl",
    liveUrl: "https://titanic-survival-prediction-dl-itm83fstvyuujcwuy6aa7w.streamlit.app/"
  },
  {
    title: "End-to-End Twitter Sentiment Analysis",
    subtitle: "NLP Deep Learning Web App",
    description: "Deep learning NLP pipeline utilizing custom tokenizers, embedding layers, and LSTM architectures for multi-class sentiment categorization with real-time inference.",
    tools: ['TensorFlow/Keras', 'NLP', 'Streamlit', 'Python'],
    impact: "Real-time streaming text classification with >89% multi-class F1-score.",
    icon: MessageSquare,
    category: "NLP & GenAI",
    githubUrl: "https://github.com/dharmender12/end-to-end-twitter-sentiment-analysis",
    liveUrl: "https://end-to-end-twitter-sentiment-analysis.streamlit.app/"
  },
  {
    title: "Quotes Scraping & SQL EDA Pipeline",
    subtitle: "Data Warehousing & Analytics",
    description: "Data extraction and warehousing pipeline combining automated web scrapers with PostgreSQL schemas, window functions, and exploratory analytical queries.",
    tools: ['Python', 'SQL', 'PostgreSQL', 'Web Scraping', 'EDA'],
    impact: "Processed 50,000+ unstructured records into normalized 3NF relational schemas.",
    icon: Database,
    category: "Data Science",
    githubUrl: "https://github.com/dharmender12/quotes-scraping-sql-eda"
  },
  {
    title: "E-Commerce Price Tracer",
    subtitle: "Real-Time Telemetry & Alerting",
    description: "Autonomous price monitoring engine tracking multi-platform product fluctuations with scheduled triggers, price delta notifications, and historical variance tracking.",
    tools: ['Python', 'Automation', 'BeautifulSoup', 'Data Pipelines'],
    impact: "Tracked 1,000+ SKUs daily with automated price drop notification triggers.",
    icon: BarChart3,
    category: "Data Science",
    githubUrl: "https://github.com/dharmender12/Price-Tracer-Project"
  }
];

// Fallback Repositories Snapshot in case GitHub API rate limit (60 req/hr) is reached
const FALLBACK_REPOS = [
  {
    name: "text-to-math-solver-groq",
    description: "LangChain AI Agents Hub featuring Text-to-Math Solver and Natural Language SQL querying using Groq and Streamlit.",
    html_url: "https://github.com/dharmender12/text-to-math-solver-groq",
    language: "Python",
    stargazers_count: 1,
    forks_count: 0,
    homepage: "https://text-to-maths-groq.streamlit.app/"
  },
  {
    name: "ArchFlow",
    description: "Interactive architectural flow and pipeline documentation interface.",
    html_url: "https://github.com/dharmender12/ArchFlow",
    language: "HTML",
    stargazers_count: 0,
    forks_count: 0,
    homepage: null
  },
  {
    name: "titanic-survival-prediction-dl",
    description: "Deep learning neural network web application predicting passenger survival deployed with Streamlit.",
    html_url: "https://github.com/dharmender12/titanic-survival-prediction-dl",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    homepage: null
  },
  {
    name: "end-to-end-twitter-sentiment-analysis",
    description: "Full NLP pipeline from preprocessing to LSTM sentiment classification models with real-time UI.",
    html_url: "https://github.com/dharmender12/end-to-end-twitter-sentiment-analysis",
    language: "Jupyter Notebook",
    stargazers_count: 0,
    forks_count: 0,
    homepage: "https://end-to-end-twitter-sentiment-analysis.streamlit.app/"
  },
  {
    name: "Supply-Chain-Inventory-Optimization-System",
    description: "Predictive inventory management system modeling SKU velocity and replenishment strategies.",
    html_url: "https://github.com/dharmender12/Supply-Chain-Inventory-Optimization-System",
    language: "Python",
    stargazers_count: 1,
    forks_count: 0,
    homepage: "https://supply-chain-analytics-app.vercel.app/"
  },
  {
    name: "Star-Formation-in-DLAs",
    description: "Statistical astronomy research pipeline modeling star formation rates in Damped Lyman-alpha systems.",
    html_url: "https://github.com/dharmender12/Star-Formation-in-DLAs",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    homepage: null
  },
  {
    name: "calculator_app",
    description: "Modular scientific calculation engine with unit test suites.",
    html_url: "https://github.com/dharmender12/calculator_app",
    language: "Jupyter Notebook",
    stargazers_count: 0,
    forks_count: 0,
    homepage: null
  },
  {
    name: "quotes-scraping-sql-eda",
    description: "End-to-end web scraping pipeline paired with SQL exploratory data analysis.",
    html_url: "https://github.com/dharmender12/quotes-scraping-sql-eda",
    language: "Python",
    stargazers_count: 0,
    forks_count: 0,
    homepage: null
  }
];

const CATEGORIES = ["All", "Data Science", "Research", "NLP & GenAI"];

const Section = ({ children, className, id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={cn("py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10", className)}>
    {children}
  </section>
);

export default function App() {
  const [activeTab, setActiveTab] = useState<'featured' | 'github'>('featured');
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);

  // GitHub Repos Sync State
  const [githubRepos, setGithubRepos] = useState<any[]>(FALLBACK_REPOS);
  const [isLoadingRepos, setIsLoadingRepos] = useState(false);
  const [syncTimestamp, setSyncTimestamp] = useState<string | null>(null);
  const [isRateLimited, setIsRateLimited] = useState(false);

  // Fetch live repositories from GitHub API
  const fetchGitHubRepos = async () => {
    setIsLoadingRepos(true);
    setIsRateLimited(false);
    try {
      const response = await fetch("https://api.github.com/users/dharmender12/repos?sort=updated&per_page=30");
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setGithubRepos(data);
          setSyncTimestamp(new Date().toLocaleTimeString());
        } else {
          setGithubRepos(FALLBACK_REPOS);
        }
      } else {
        // Fallback to pre-cached data on 403 or network errors
        setIsRateLimited(true);
        setGithubRepos(FALLBACK_REPOS);
        setSyncTimestamp(new Date().toLocaleTimeString());
      }
    } catch (err) {
      console.warn("Using cached GitHub repository portfolio due to network policy:", err);
      setIsRateLimited(true);
      setGithubRepos(FALLBACK_REPOS);
    } finally {
      setIsLoadingRepos(false);
    }
  };

  useEffect(() => {
    fetchGitHubRepos();
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const filteredProjects = FEATURED_PROJECTS.filter(project => {
    const matchesCategory = activeCategory === "All" || project.category === activeCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 relative overflow-hidden">
      {/* Dynamic 3D Cyber Ambient Background Gradients */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-600/10 blur-[140px]" />
        <div className="absolute top-[30%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-purple-600/10 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[20%] w-[50vw] h-[50vw] rounded-full bg-blue-600/10 blur-[160px]" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#030712]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-cyan-950/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="#about" className="flex items-center gap-3 group focus:outline-none">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 p-[2px] transition-transform duration-300 group-hover:scale-110 shadow-lg shadow-cyan-500/25">
              <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center font-mono font-bold text-cyan-400 text-sm">
                DT
              </div>
            </div>
            <div>
              <div className="font-mono font-bold text-base tracking-wide text-white group-hover:text-cyan-400 transition-colors">
                DHARMENDER THAKUR<span className="text-cyan-400">.PHD</span>
              </div>
              <div className="text-[11px] font-mono text-cyan-400/80 tracking-widest uppercase">
                Data Scientist & Engineer
              </div>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-7 text-xs font-mono uppercase tracking-widest text-slate-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#pipeline" className="hover:text-cyan-400 transition-colors">Architecture</a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">Stack</a>
            <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          </div>

          <div className="flex items-center gap-3">
            {/* Direct GitHub Profile Link */}
            <a 
              href={PROFILE.githubUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-cyan-400 border border-white/10 hover:border-cyan-500/40 transition-all shadow-md"
              title="Visit Dharmender's GitHub Profile (@dharmender12)"
            >
              <Github size={18} />
            </a>

            {/* LinkedIn Profile */}
            <a 
              href={PROFILE.linkedinUrl}
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-blue-400 border border-white/10 hover:border-blue-500/40 transition-all shadow-md"
              title="Connect on LinkedIn"
            >
              <Linkedin size={18} />
            </a>

            {/* Contact Action Button */}
            <a 
              href={`mailto:${PROFILE.email}`}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white text-xs font-mono font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-cyan-500/25 transition-all active:scale-95"
            >
              <Mail size={14} />
              <span>Contact</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section with 3D Data Universe Canvas */}
      <Section id="about" className="pt-32 pb-20 lg:pt-36 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-6 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-3"
            >
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/70 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest shadow-lg shadow-cyan-950/50">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>PhD Astronomy // Data Science & Engineering</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1] text-white">
                Bridging <span className="gradient-text-3d">Astrophysical</span> Precision with <span className="text-cyan-400">Business</span> Intelligence.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3 font-normal"
            >
              <p>
                I am <strong>Dr. Dharmender Thakur</strong>, a researcher transitioning high-dimensional statistical physics 
                and astronomical spectroscopy into enterprise-grade <strong>Machine Learning</strong> and <strong>Big Data Engineering</strong>.
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                From analyzing 500GB+ deep-space spectral signals using Bayesian inference to engineering scalable predictive inventory systems, 
                I deliver robust data pipelines, neural models, and automated analytical solutions.
              </p>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-3 gap-3 pt-2"
            >
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-bold font-mono text-cyan-400">500GB+</div>
                <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Telemetry Processed</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-bold font-mono text-purple-400">98%</div>
                <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">Modeling Precision</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-white/5 backdrop-blur-md">
                <div className="text-xl sm:text-2xl font-bold font-mono text-emerald-400">27+</div>
                <div className="text-[10px] font-mono uppercase text-slate-400 tracking-wider">GitHub Projects</div>
              </div>
            </motion.div>

            {/* Social & Contact Bar */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <a 
                href={PROFILE.githubUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 font-mono text-xs font-semibold flex items-center gap-2 shadow-lg shadow-cyan-950/30 hover:border-cyan-400 transition-all"
              >
                <Github size={16} />
                <span>GitHub Profile (@dharmender12)</span>
                <ExternalLink size={12} className="opacity-70" />
              </a>

              <a 
                href={PROFILE.linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-blue-400 font-mono text-xs font-semibold flex items-center gap-2 transition-all"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-white/10 text-slate-300 hover:text-emerald-400 font-mono text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
              </button>
            </motion.div>
          </div>
          
          {/* Right Hero: Real-time 3D Data Universe Canvas */}
          <div className="lg:col-span-6 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-[440px] sm:h-[500px] rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.15)] bg-slate-950/70 backdrop-blur-xl"
            >
              <ErrorBoundary>
                <DataUniverseCanvas />
              </ErrorBoundary>
            </motion.div>
          </div>
        </div>
      </Section>

      <div className="section-divider" />

      {/* Interactive 3D End-to-End Pipeline Section */}
      <Section id="pipeline">
        <DataPipeline3D />
      </Section>

      <div className="section-divider" />

      {/* Projects & Repositories Section */}
      <Section id="projects">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <Code2 className="w-3.5 h-3.5" />
              <span>Project Matrix</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Case Studies & <span className="gradient-text-3d">GitHub Repos</span>
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm max-w-xl">
              Explore production applications, deep learning notebooks, and real-time synchronized repositories directly connected to GitHub (<strong>@dharmender12</strong>).
            </p>
          </div>

          {/* Tab Selector: Featured vs Live GitHub */}
          <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-white/10 shadow-xl">
            <button
              onClick={() => setActiveTab('featured')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'featured'
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sparkles size={14} />
              <span>Featured ({FEATURED_PROJECTS.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('github')}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                activeTab === 'github'
                  ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Github size={14} />
              <span>Live GitHub ({githubRepos.length})</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Featured Projects */}
        {activeTab === 'featured' && (
          <div className="space-y-8">
            {/* Search and Category Filter */}
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between bg-slate-900/50 p-3 rounded-2xl border border-white/5">
              <div className="relative w-full md:w-80 group">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-cyan-400 transition-colors" size={16} />
                <input 
                  type="text"
                  placeholder="Filter by keyword (e.g. PyTorch, SQL)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-10 py-2.5 bg-slate-950 border border-slate-800 rounded-xl text-xs font-mono text-slate-200 placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 transition-all"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-3.5 py-1.5 text-xs font-mono rounded-xl border transition-all cursor-pointer",
                      activeCategory === cat 
                        ? "bg-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-sm" 
                        : "bg-slate-950/60 text-slate-400 border-white/5 hover:border-slate-700 hover:text-white"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* 3D Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => {
                const Icon = project.icon;
                return (
                  <Card3D 
                    key={project.title}
                    className="rounded-2xl border border-white/10 bg-slate-900/70 p-6 flex flex-col justify-between hover:border-cyan-400/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div className="p-3 bg-cyan-950/60 border border-cyan-500/30 rounded-xl text-cyan-400 shadow-lg">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-md bg-slate-950 text-cyan-300 border border-cyan-500/20">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-white mb-1">
                        {project.title}
                      </h3>
                      {project.subtitle && (
                        <div className="text-xs font-mono text-cyan-400/80 mb-3 font-medium">
                          {project.subtitle}
                        </div>
                      )}
                      <p className="text-xs text-slate-300 leading-relaxed mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="p-3 rounded-xl bg-slate-950/80 border border-white/5 mb-4">
                        <div className="text-[10px] font-mono text-slate-400 uppercase mb-0.5">Key Impact</div>
                        <div className="text-xs font-mono font-semibold text-emerald-400">{project.impact}</div>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {project.tools.map((tool) => (
                          <span key={tool} className="px-2 py-0.5 bg-slate-950 border border-white/10 text-slate-300 text-[10px] font-mono rounded">
                            {tool}
                          </span>
                        ))}
                      </div>

                      <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                        {project.githubUrl ? (
                          <a 
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-200 transition-colors"
                          >
                            <Github size={14} />
                            <span>Source Code</span>
                            <ExternalLink size={12} />
                          </a>
                        ) : <div />}

                        {project.liveUrl && (
                          <a 
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-mono px-2.5 py-1 rounded-lg bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/30 transition-colors"
                          >
                            <span>Live App</span>
                            <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    </div>
                  </Card3D>
                );
              })}
            </div>
          </div>
        )}

        {/* Tab 2: Live GitHub Repositories (Synchronized) */}
        {activeTab === 'github' && (
          <div className="space-y-6">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-cyan-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                <div>
                  <div className="text-xs sm:text-sm text-slate-200 font-mono font-medium">
                    Connected to GitHub profile: <a href={PROFILE.githubUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 font-bold hover:underline">@{PROFILE.githubUsername}</a>
                  </div>
                  {syncTimestamp && (
                    <div className="text-[11px] font-mono text-slate-400">
                      {isRateLimited ? "Showing synchronized repository snapshot" : `Last API sync: ${syncTimestamp}`}
                    </div>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={fetchGitHubRepos}
                  disabled={isLoadingRepos}
                  className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 text-xs font-mono font-medium flex items-center gap-2 transition-all cursor-pointer disabled:opacity-50"
                  title="Resync with GitHub API"
                >
                  <RefreshCw className={`w-3.5 h-3.5 text-cyan-400 ${isLoadingRepos ? "animate-spin" : ""}`} />
                  <span>{isLoadingRepos ? "Syncing..." : "Sync Repos"}</span>
                </button>

                <a 
                  href={PROFILE.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-xl bg-cyan-600/20 hover:bg-cyan-600/30 text-cyan-300 border border-cyan-500/40 text-xs font-mono font-semibold flex items-center gap-1.5 transition-all"
                >
                  <Github size={14} />
                  <span>Open GitHub</span>
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {githubRepos.map((repo) => (
                <Card3D 
                  key={repo.name}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 flex flex-col justify-between hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="font-mono text-xs font-bold text-cyan-400 truncate flex items-center gap-2">
                        <Terminal size={14} className="text-cyan-400 shrink-0" />
                        {repo.name}
                      </span>
                      {repo.language && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-300 border border-white/10 shrink-0">
                          {repo.language}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed mb-4 min-h-[3rem]">
                      {repo.description || "Project repository code, documentation, and analysis workflows."}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-slate-300">
                        <Star size={13} className="text-amber-400 fill-amber-400/20" />
                        <span>{repo.stargazers_count ?? 0}</span>
                      </span>
                      <span className="flex items-center gap-1 text-slate-300">
                        <GitFork size={13} className="text-indigo-400" />
                        <span>{repo.forks_count ?? 0}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {repo.homepage && (
                        <a 
                          href={repo.homepage}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1.5 rounded-lg bg-cyan-950/80 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/30 transition-colors"
                          title="Open Live Deployment"
                        >
                          <ExternalLink size={12} />
                        </a>
                      )}
                      <a 
                        href={repo.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-white/10 flex items-center gap-1 transition-colors"
                        title="View on GitHub"
                      >
                        <Github size={12} />
                        <span>Repo</span>
                      </a>
                    </div>
                  </div>
                </Card3D>
              ))}
            </div>
          </div>
        )}
      </Section>

      <div className="section-divider" />

      {/* Skills & Technical Competencies Section */}
      <Section id="skills" className="rounded-[2.5rem] bg-slate-900/50 border border-white/10 p-8 sm:p-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
              <Layers className="w-3.5 h-3.5" />
              <span>Competency Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Data Science & Engineering Rigor
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Combining the empirical statistical standards of doctorate astronomy research with scalable industry-proven tooling.
            </p>
          </div>
          
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card3D className="p-6 rounded-2xl bg-slate-950/70 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-600/20 text-cyan-400 border border-cyan-500/30">
                  <BrainCircuit size={20} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">Machine Learning</h3>
              </div>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                {['Python (NumPy, Pandas, Scipy)', 'PyTorch & TensorFlow', 'XGBoost & Random Forests', 'NLP & LLMs (LangChain, Groq)', 'Bayesian MCMC Modeling'].map(s => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Card3D>

            <Card3D className="p-6 rounded-2xl bg-slate-950/70 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-600/20 text-purple-400 border border-purple-500/30">
                  <Database size={20} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">Data Engineering</h3>
              </div>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                {['SQL (PostgreSQL, BigQuery)', 'Apache Spark & PySpark', 'ETL / ELT Pipelines', 'Kafka Stream Ingestion', 'Docker & Cloud Deployments'].map(s => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Card3D>

            <Card3D className="p-6 rounded-2xl bg-slate-950/70 border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30">
                  <BarChart3 size={20} />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-white">Analytics & BI</h3>
              </div>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                {['Power BI & Tableau', 'A/B Testing & Hypothesis Test', 'Signal-to-Noise Ratio (SNR)', 'Exploratory Data Analysis', 'Executive Data Storytelling'].map(s => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </Card3D>
          </div>
        </div>
      </Section>

      <div className="section-divider" />

      {/* Experience & Academic Track */}
      <Section id="experience">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest">
                <FileText className="w-3.5 h-3.5" />
                <span>Career Progression</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Professional Experience
              </h2>
              <p className="text-slate-400 text-xs sm:text-sm">
                Track record bridging data science instruction, scientific research pipelines, and enterprise projects.
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-8 space-y-8">
            {/* Experience Item 1 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/10 space-y-4 hover:border-cyan-400/40 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white">Technical SME & Data Science Instructor</h3>
                  <div className="text-cyan-400 text-xs font-mono font-medium">Allsoft Solution / IBM Certified Programs</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-500/30 text-[10px] font-mono">
                  2022 — PRESENT
                </span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Spearheading curriculum delivery and practical implementation cohorts in Python, SQL, Machine Learning, and Agentic AI workflows.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li className="flex items-start gap-2">
                  <Sparkles size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span>Mentored 500+ professionals in Python, SQL querying, PySpark, and production ML pipelines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles size={14} className="text-cyan-400 mt-0.5 shrink-0" />
                  <span>Integrated real-world case studies in supply chain forecasting, anomaly detection, and LLM automation.</span>
                </li>
              </ul>
            </div>

            {/* Experience Item 2 */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-white/10 space-y-4 hover:border-purple-400/40 transition-colors">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white">PhD Researcher (Observational Astronomy)</h3>
                  <div className="text-purple-400 text-xs font-mono font-medium">Doctoral Research / Scientific Computing</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-purple-950 text-purple-300 border border-purple-500/30 text-[10px] font-mono">
                  2018 — 2022
                </span>
              </div>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                Executed computational reduction on multi-gigabyte spectroscopic observations from deep-space sky surveys. Applied Markov Chain Monte Carlo Bayesian methods to evaluate cosmic gas enrichment models.
              </p>
              <ul className="space-y-2 text-xs text-slate-300 font-mono">
                <li className="flex items-start gap-2">
                  <Sparkles size={14} className="text-purple-400 mt-0.5 shrink-0" />
                  <span>Automated signal extraction and SNR calibration across 500GB+ raw FITS data files.</span>
                </li>
                <li className="flex items-start gap-2">
                  <Sparkles size={14} className="text-purple-400 mt-0.5 shrink-0" />
                  <span>Authored peer-reviewed research papers cited on Google Scholar and NASA ADS.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <div className="section-divider" />

      {/* Contact Section */}
      <Section id="contact" className="pb-28">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950/40 border border-cyan-500/30 text-center space-y-6 shadow-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-widest mx-auto">
            <Zap className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            <span>Ready for Impact</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">
            Let's Collaborate on Data Science & Engineering
          </h2>

          <p className="text-slate-300 text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            Open for Data Scientist, ML Engineer, and Data Engineering roles, advisory consulting, and technical leadership.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <a 
              href={`mailto:${PROFILE.email}`}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-cyan-500/25 transition-all"
            >
              <Mail size={16} />
              <span>{PROFILE.email}</span>
            </a>

            <a 
              href={PROFILE.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-cyan-400 border border-white/10 font-mono text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <Github size={16} />
              <span>GitHub Profile</span>
              <ExternalLink size={13} />
            </a>

            <a 
              href={PROFILE.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-blue-400 border border-white/10 font-mono text-xs font-semibold flex items-center gap-2 transition-all"
            >
              <Linkedin size={16} />
              <span>LinkedIn</span>
              <ExternalLink size={13} />
            </a>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="bg-[#02050e] border-t border-white/10 py-10 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-slate-400">
          <div>
            <span className="font-bold text-white">DHARMENDER THAKUR</span>
            <span className="text-cyan-400">.PHD</span>
            <span className="mx-2 text-slate-600">|</span>
            <span>Data Scientist & ML Engineer</span>
          </div>

          <div className="text-[11px] text-slate-500">
            © 2026 BUILT_WITH_3D_PRECISION // ALL_RIGHTS_RESERVED
          </div>

          <div className="flex items-center gap-4">
            <a 
              href={PROFILE.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-cyan-400 transition-colors"
              title="GitHub Profile"
            >
              <Github size={18} />
            </a>
            <a 
              href={PROFILE.linkedinUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-400 transition-colors"
              title="LinkedIn Profile"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href={`mailto:${PROFILE.email}`} 
              className="hover:text-emerald-400 transition-colors"
              title="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
