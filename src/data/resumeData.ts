import { Experience, Education, Certification, Achievement, SkillCategory, Project } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "DHARMENDER THAKUR",
  title: "Data Scientist | Data Analyst | Data Engineer",
  email: "dharmender98thakur@gmail.com",
  phone: "+91 8544713601",
  location: "Shimla, India",
  linkedIn: "https://linkedin.com/in/dharmender-thakur",
  github: "https://github.com/dharmender12/dharmender.github.io",
  summary: "Results-driven Data Scientist, Data Analyst, and Data Engineer with strong expertise in Machine Learning, Deep Learning, Big Data pipelines (PySpark, Spark SQL), Cloud Infrastructure (GCP, Databricks), and Business Analytics (SQL CTEs, Power BI, KPI Dashboards). Experienced in training B.Tech and BCA university students in end-to-end data workflows and conducting scientific statistical research at Indian Institute of Astrophysics (IIA). Currently pursuing a Ph.D. in Astronomy with a solid foundation in large-scale data processing.",
  tagline: "Hey, I'm a Data Scientist",
  profileImage: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80"
};

export const EXPERIENCES: Experience[] = [
  {
    id: "exp-1",
    role: "Data Science Instructor",
    company: "Allsoft Solution",
    program: "IBM Career Education Program",
    period: "10/2025 – 07/2026",
    location: "Chandigarh, India",
    highlights: [
      "Designed and delivered comprehensive Data Science curriculum to B.Tech and BCA students across universities, covering Machine Learning, NLP & Text Analytics, Big Data with Apache Spark, GCP, Databricks, and Business Analytics using Python.",
      "Trained 100+ university students on end-to-end ML project workflows: data ingestion, EDA, feature engineering, model building, evaluation, and deployment — preparing them for industry-ready analytics roles.",
      "Delivered hands-on Spark and PySpark sessions for large-scale data processing, enabling students to build scalable data pipelines on cloud platforms including GCP and Databricks.",
      "Conducted practical NLP and Text Analytics workshops covering tokenization, stemming, vectorization (TF-IDF, Bag-of-Words), and sentiment analysis on real-world datasets.",
      "Taught Business Analytics using Python: data-driven decision making, KPI analysis, Power BI dashboard creation, and translating business problems into analytical solutions.",
      "Mentored student teams on capstone projects from problem framing to insight communication, achieving high placement readiness outcomes."
    ],
    skillsUsed: ["Python", "PySpark", "Machine Learning", "NLP", "GCP", "Databricks", "Power BI", "Curriculum Design"]
  },
  {
    id: "exp-2",
    role: "Visiting Research Student – Data Analytics",
    company: "Indian Institute of Astrophysics (IIA)",
    period: "04/2025 – 09/2025",
    location: "Bangalore, India",
    highlights: [
      "Conducted statistical analysis and machine learning-based pattern recognition on large-scale astronomical datasets — directly transferable to enterprise analytics environments.",
      "Built end-to-end data pipelines for cleaning, preprocessing, and validating high-volume, multi-dimensional scientific data, ensuring data quality and integrity.",
      "Developed analytical dashboards and research reports to communicate complex findings clearly to diverse, non-technical stakeholders.",
      "Applied hypothesis testing, regression analysis, and ML techniques to derive meaningful insights from structured and unstructured data."
    ],
    skillsUsed: ["Python", "Statistical Analysis", "Data Pipelines", "Pattern Recognition", "Hypothesis Testing", "Data Dashboards"]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: "edu-1",
    degree: "Master of Computer Application (MCA)",
    institution: "Indira Gandhi National Open University (IGNOU)",
    period: "03/2023 – Present",
    location: "Delhi, India",
    imageUrl: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "edu-2",
    degree: "Ph.D. – Astronomy (Observational Astronomy & Statistical Analysis)",
    institution: "Central University of Himachal Pradesh & Indian Institute of Astrophysics (IIA)",
    period: "12/2021 – Present",
    location: "Kangra / Bengaluru, India",
    imageUrl: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "edu-3",
    degree: "Data Science Bootcamp",
    institution: "Masai School",
    period: "01/2025 – 07/2025",
    location: "Bangalore, India",
    imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "edu-4",
    degree: "Master of Science – Physics",
    institution: "Central University of Himachal Pradesh",
    period: "07/2019 – 06/2021",
    location: "Kangra, India",
    imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=800&q=80"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "technical",
    name: "Languages & Frameworks",
    skills: [
      { name: "Python (Pandas, NumPy, Scikit-learn, NLTK, Keras, TensorFlow)", level: 95 },
      { name: "SQL (CTEs, Window Functions, Joins)", level: 92 },
      { name: "SCALA", level: 80 },
      { name: "Full Stack Web (React, TypeScript, Express, Tailwind CSS)", level: 88 }
    ]
  },
  {
    category: "technical",
    name: "Machine Learning & AI",
    skills: [
      { name: "Supervised & Unsupervised Learning", level: 92 },
      { name: "Deep Learning (ANN, TensorFlow, Keras)", level: 90 },
      { name: "NLP & Text Analytics", level: 90 },
      { name: "Recommendation Systems", level: 85 }
    ]
  },
  {
    category: "technical",
    name: "Big Data, Cloud & Engineering",
    skills: [
      { name: "Apache Spark (PySpark)", level: 88 },
      { name: "Google Cloud Platform (GCP) & BigQuery", level: 85 },
      { name: "Databricks", level: 85 },
      { name: "ETL Pipelines & Data Wrangling", level: 92 }
    ]
  },
  {
    category: "technical",
    name: "Analytics, Databases & Visualization",
    skills: [
      { name: "Power BI (Interactive Dashboards & KPIs)", level: 92 },
      { name: "MySQL / PostgreSQL Query Tuning", level: 88 },
      { name: "Advanced Excel & Business Analytics", level: 90 },
      { name: "Matplotlib & Seaborn Data Storytelling", level: 92 }
    ]
  },
  {
    category: "soft",
    name: "Soft & Leadership Skills",
    skills: [
      { name: "Technical Communication & Presentation", level: 95 },
      { name: "Curriculum Design & University Mentorship", level: 95 },
      { name: "Analytical Problem Solving", level: 96 },
      { name: "Research Methodology & Data Storytelling", level: 92 },
      { name: "Cross-Functional Team Collaboration", level: 90 },
      { name: "Agile & Project Framing", level: 88 }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "project-bytebrains",
    title: "ByteBrains EdTech Platform",
    subtitle: "Vite + React, Supabase & Groq AI",
    description: "Full-stack EdTech web application with Supabase authentication, custom DB tables, and secure Groq API AI Tutor.",
    longDescription: "Engineered ByteBrains (bytebrains.in), an interactive educational and AI-assisted tutoring platform built with React + Vite, Supabase Auth & PostgreSQL database with RLS policies, and serverless proxy routing for Groq AI Tutor.",
    techStack: ["React", "Vite", "TypeScript", "Supabase", "Groq API", "Tailwind CSS"],
    liveUrl: "https://www.bytebrains.in/",
    githubUrl: "https://github.com/dharmender12/dharmender.github.io",
    category: "Full Stack",
    featured: true,
    metrics: ["Live Production Domain", "Supabase Auth & RLS", "Groq AI Tutor"],
    imagePlaceholderGradient: "from-indigo-600 via-purple-600 to-pink-700",
    keyFeatures: [
      "Full-stack React + Vite frontend with modern responsive UI components",
      "Supabase Authentication and secure RLS tables for contact submissions & callback requests",
      "Server-side proxy endpoint for Groq AI Tutor API protection",
      "Production deployment on Vercel under bytebrains.in"
    ]
  },
  {
    id: "project-text-math",
    title: "Text-to-Math Solver with Groq AI",
    subtitle: "GenAI & LLM Streamlit App",
    description: "LLM-powered text-to-math problem solver utilizing Groq API for low-latency inference with Streamlit UI.",
    longDescription: "Developed an intelligent mathematical reasoning solver leveraging Groq's low-latency inference engine and LLMs to parse, solve, and explain complex word problems and algebraic equations step-by-step.",
    techStack: ["Python", "Groq API", "Streamlit", "LLMs", "LangChain"],
    liveUrl: "https://text-to-maths-groq.streamlit.app/",
    githubUrl: "https://github.com/dharmender12/text-to-math-solver-groq",
    category: "NLP",
    featured: true,
    metrics: ["Groq Ultra-Fast API", "Step-by-Step Logic", "Streamlit Deployed"],
    imagePlaceholderGradient: "from-cyan-600 via-teal-500 to-slate-900",
    keyFeatures: [
      "Groq API fast LLM inference integration for mathematical logic",
      "Step-by-step problem reasoning and explanation generator",
      "Interactive Streamlit web frontend for quick query input",
      "Natural language word problem parser and symbolic math display"
    ]
  },
  {
    id: "project-smartshop",
    title: "SmartShop E-Commerce",
    subtitle: "Full Stack Web Application",
    description: "Full-stack e-commerce store with catalog navigation, user shopping cart, and order management system.",
    longDescription: "Designed and built SmartShop, a full-stack e-commerce web platform supporting modular product catalogs, user session state, cart operations, and structured backend API endpoints.",
    techStack: ["React", "Node.js", "Express", "MongoDB / SQL", "Tailwind CSS"],
    liveUrl: "https://github.com/dharmender12/Smartshop",
    githubUrl: "https://github.com/dharmender12/Smartshop",
    category: "Full Stack",
    featured: true,
    metrics: ["Full Stack Store", "Product Catalog", "Cart & Session System"],
    imagePlaceholderGradient: "from-amber-600 via-orange-500 to-red-800",
    keyFeatures: [
      "Full-stack architecture for product browsing and search filters",
      "Cart management and checkout workflow state",
      "Backend API endpoints for catalog queries and data persistence"
    ]
  },
  {
    id: "project-1",
    title: "Titanic Survival Prediction",
    subtitle: "Deep Learning (ANN)",
    description: "Binary classification neural network predicting survival outcomes with TensorFlow/Keras and hyperparameter tuning.",
    longDescription: "Built a robust binary classification model using Artificial Neural Networks (ANN) with TensorFlow/Keras. Applied full end-to-end preprocessing pipelines including missing value imputation, one-hot encoding, feature scaling, and dropout regularization for optimal F1-score.",
    techStack: ["Python", "TensorFlow", "Keras", "Streamlit", "Scikit-learn"],
    liveUrl: "https://titanic-survival-prediction-dl-itm83fstvyuujcwuy6aa7w.streamlit.app/",
    githubUrl: "https://github.com/dharmender12/titanic-survival-prediction-dl",
    category: "Machine Learning",
    featured: true,
    metrics: ["High F1-Score", "ANN Neural Nets", "Streamlit Deployed"],
    imagePlaceholderGradient: "from-blue-600 via-cyan-500 to-indigo-800",
    keyFeatures: [
      "Artificial Neural Network (ANN) architecture with custom layer depth",
      "Comprehensive feature engineering & missing value imputation",
      "Hyperparameter tuning (dropout rates, learning rates, layer count)",
      "Interactive Streamlit web application dashboard"
    ]
  },
  {
    id: "project-2",
    title: "Supply Chain & Inventory Analytics",
    subtitle: "Enterprise Optimization System",
    description: "Full-stack analytics engine evaluating shipment performance, supplier reliability, and stock-out risks.",
    longDescription: "Designed an enterprise-grade analytics platform evaluating shipment performance, supplier reliability, and inventory turnover efficiency. Authored complex SQL CTEs and window functions paired with interactive Power BI dashboards for data-driven operational decisions.",
    techStack: ["Python", "SQL", "Power BI", "PostgreSQL", "Data Analytics"],
    liveUrl: "https://supply-chain-analytics-app.vercel.app/",
    githubUrl: "https://github.com/dharmender12/dharmender.github.io",
    category: "Data Analytics",
    featured: true,
    metrics: ["On-Time Delivery KPI", "Stock-Out Risk Alert", "Interactive Power BI"],
    imagePlaceholderGradient: "from-emerald-600 via-teal-500 to-indigo-900",
    keyFeatures: [
      "Advanced SQL queries with Window Functions & CTE aggregations",
      "Interactive Power BI dashboard monitoring KPIs in real-time",
      "Demand volatility and supplier lead-time forecasting",
      "Automated stock-out warning triggers and logistics optimization"
    ]
  },
  {
    id: "project-3",
    title: "End-to-End Twitter Sentiment Analysis",
    subtitle: "Real-Time NLP & Streamlit Pipeline",
    description: "Processed 1M+ tweets with end-to-end ingestion, NLP preprocessing, and ~96% real-time sentiment accuracy.",
    longDescription: "Engineered an end-to-end NLP pipeline processing social media text streams. Utilized Spark NLP / NLTK tokenization, TF-IDF vectorization, and machine learning models for real-time sentiment inference deployed on Streamlit.",
    techStack: ["Python", "NLP", "Streamlit", "NLTK", "Scikit-learn"],
    liveUrl: "https://end-to-end-twitter-sentiment-analysis.streamlit.app/",
    githubUrl: "https://github.com/dharmender12/end-to-end-twitter-sentiment-analysis",
    category: "NLP",
    featured: true,
    metrics: ["1M+ Tweets Processed", "~96% Accuracy", "Streamlit App"],
    imagePlaceholderGradient: "from-purple-600 via-violet-500 to-cyan-900",
    keyFeatures: [
      "End-to-end NLP stream ingestion and text tokenization",
      "TF-IDF & Word2Vec semantic vectorization",
      "Real-time sentiment classification (Positive, Negative, Neutral)",
      "Interactive Streamlit app with live sentiment prediction"
    ]
  },
  {
    id: "project-4",
    title: "Astronomical Pattern Recognition",
    subtitle: "IIA Scientific Data Pipeline",
    description: "Large-scale multi-dimensional astronomical dataset processing, hypothesis testing, and machine learning pattern discovery.",
    longDescription: "Developed for Indian Institute of Astrophysics (IIA), this scientific data pipeline processes multi-gigabyte astronomical survey data. Implements statistical regression, hypothesis testing, and pattern recognition algorithms for stellar classification.",
    techStack: ["Python", "Scikit-learn", "Statistical ML", "Matplotlib", "Big Data"],
    liveUrl: "https://astronomical-data-analytics.vercel.app/",
    githubUrl: "https://github.com/dharmender12/dharmender.github.io",
    category: "Cloud Analytics",
    featured: true,
    metrics: ["Multi-Dimensional Data", "Hypothesis Testing", "IIA Research"],
    imagePlaceholderGradient: "from-amber-600 via-orange-500 to-purple-900",
    keyFeatures: [
      "Cleaning and validation of high-volume scientific datasets",
      "Hypothesis testing and multi-variate statistical regression",
      "Automated outlier detection and cosmic signal extraction",
      "High-resolution interactive scientific visual reports"
    ]
  },
  {
    id: "project-5",
    title: "3D Full-Stack AI Intelligence Hub",
    subtitle: "WebGL & Gemini AI App",
    description: "Immersive 3D web application integrating full-stack React, Three.js spatial graphics, and Gemini AI data insights.",
    longDescription: "A cutting-edge 3D interactive web application showcasing full-stack capabilities with real-time AI assistance, 3D WebGL visualizations, and responsive modern interface aesthetics.",
    techStack: ["React", "TypeScript", "Three.js", "Express", "Gemini AI"],
    liveUrl: "https://dharmender-github-io.vercel.app/",
    githubUrl: "https://github.com/dharmender12/dharmender.github.io",
    category: "Full Stack",
    featured: true,
    metrics: ["WebGL 3D Engine", "Full Stack AI", "Vercel Deployed"],
    imagePlaceholderGradient: "from-pink-600 via-rose-500 to-slate-900",
    keyFeatures: [
      "3D spatial canvas rendering with Three.js WebGL shaders",
      "Full-stack Express API integration with server-side AI processing",
      "Responsive glassmorphism UI with smooth Motion physics",
      "Automated deployment on Vercel and GitHub pages"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  { title: "Introduction to Machine Learning", issuer: "IIT Kharagpur (NPTEL)" },
  { title: "Introduction to Big Data", issuer: "IBM Cognitive Classes" },
  { title: "Business Professional Programmer", issuer: "NIELIT" },
  { title: "A-Level Certification", issuer: "NIELIT" },
  { title: "Introduction to Data Science", issuer: "Infosys Springboard" }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    role: "Judge",
    event: "ThinkFest 2026 National Hackathon",
    organization: "Lovely Professional University",
    period: "03/2026 – 03/2026"
  },
  {
    role: "Judge",
    event: "Web-A-Thon 2026",
    organization: "ARENA Community & DSO, Lovely Professional University",
    period: "02/2026 – 02/2026"
  },
  {
    role: "Keynote Speaker",
    event: "National Tech Seminar",
    organization: "SEMS Welfare Foundation",
    period: "06/2026 – 06/2026",
    location: "Online"
  }
];
