export type Stat = {
  value: number;
  suffix: string;
  decimals?: number;
  label: string;
};

export type SkillGroup = { title: string; items: string[] };

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  stack: string[];
  link: string;
  linkLabel: string;
  points: string[];
};

export type Project = {
  title: string;
  year: string;
  tag?: string;
  blurb: string;
  image?: string;
  alt?: string;
  points: string[];
  tech: string[];
  links: { label: string; href: string }[];
  accent: string;
  monogram: string;
};

export type EducationItem = {
  school: string;
  degree: string;
  period: string;
  location: string;
  note: string;
  status: string;
};

export type AchievementItem = {
  title: string;
  org: string;
  year: string;
  icon: "trophy" | "award" | "pen";
  detail: string;
};

export const profile = {
  name: "Hanzala Tafzeel",
  firstName: "Hanzala",
  lastName: "Tafzeel",
  initials: "HT",
  roles: ["Full Stack Developer", "Data Science @ IIT Madras", "ML & NLP Engineer", "Backend Developer"],
  tagline:
    "I build fast, intelligent web experiences end to end — Django and Flask backends, React frontends, and machine-learning features that ship.",
  about: [
    "I'm a Data Science undergrad at IIT Madras and a full-stack developer who enjoys owning products from database to deploy. My work spans marketplaces, quizzes, e-commerce, and NLP systems — real users, real traffic, measurable wins.",
    "I care about clean architecture, meaningful metrics, and UI that feels effortless. Whether it's squeezing a 2.2x speedup out of Redis-cached APIs or tuning a BiLSTM to 99% mAP@3, I chase results you can point to.",
  ],
  quickFacts: [
    { label: "Based in", value: "Chennai & New Delhi" },
    { label: "Currently", value: "BS Data Science @ IIT Madras" },
    { label: "Focus", value: "Full stack + applied ML" },
    { label: "Open to", value: "Internships & collaborations" },
  ],
  email: "hanzalatafzeel44@gmail.com",
  github: "https://github.com/hanzalatafzeel",
  linkedin: "https://www.linkedin.com/in/hanzala-tafzeel",
  location: "Chennai, India",
};

export const stats: Stat[] = [
  { value: 6, suffix: "+", label: "Projects shipped" },
  { value: 4, suffix: "+", label: "Years of code" },
  { value: 2, suffix: "nd", label: "Hackathon rank" },
  { value: 8.25, suffix: "/10", decimals: 2, label: "IITM CGPA" },
];

export const marqueeTech = [
  "Python",
  "JavaScript",
  "SQL",
  "Django",
  "Django REST Framework",
  "Flask",
  "React",
  "Vue",
  "PyTorch",
  "Transformers",
  "NumPy",
  "Pandas",
  "scikit-learn",
  "XGBoost",
  "PostgreSQL",
  "Redis",
  "Docker",
  "Git",
  "WebSockets",
  "JWT",
  "Streamlit",
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Python", "Java", "C++", "JavaScript", "SQL"],
  },
  {
    title: "Data Science & ML",
    items: ["NumPy", "Pandas", "scikit-learn", "XGBoost", "LightGBM", "CatBoost"],
  },
  {
    title: "Deep Learning & NLP",
    items: ["PyTorch", "Transformers", "DistilBERT", "Sentence Transformers"],
  },
  {
    title: "Web Backend",
    items: ["Django", "DRF", "Flask", "React.js", "Vue.js", "REST APIs", "WebSockets"],
  },
  {
    title: "Databases & Caching",
    items: ["PostgreSQL", "MySQL", "SQLite", "Redis"],
  },
  {
    title: "DevOps & Tools",
    items: ["Git", "Docker", "Streamlit"],
  },
  {
    title: "Backend Concepts",
    items: ["JWT Authentication", "RBAC", "Async Processing"],
  },
];

export const experience: ExperienceItem[] = [
  {
    company: "CardBox",
    role: "Full Stack Developer — Hyperlocal Services Marketplace",
    period: "2025",
    location: "Remote",
    stack: ["React", "Flask", "Capacitor", "PostgreSQL", "Tailwind"],
    link: "#",
    linkLabel: "Live Application",
    points: [
      "Architected a full-stack hyperlocal marketplace connecting users with verified service professionals — React (Vite) frontend with a Flask REST API.",
      "Wrapped the PWA in Capacitor into a native Android app with geolocation-powered “Near Me” provider discovery.",
      "Built an AI search module with voice commands that parses natural-language queries to sync category and location filters.",
      "Implemented tiered RBAC (Admin, Super Admin) and Razorpay integration for automated premium subscriptions.",
      "Shipped an admin dashboard with real-time analytics, database tooling, and manual subscription overrides.",
    ],
  },
  {
    company: "SoApp (Under Nirmaan, IIT Madras)",
    role: "Backend Development Intern",
    period: "May – Aug 2025",
    location: "IIT Madras",
    stack: ["Python", "Flask", "SQLite", "JWT"],
    link: "#",
    linkLabel: "GitHub",
    points: [
      "Developed and maintained backend services for an in-store shopping application using Python and Flask.",
      "Built and tested RESTful APIs supporting core features and user workflows.",
      "Implemented JWT authentication and role-based access control to secure endpoints.",
      "Designed and managed SQLite schemas — CRUD operations and query optimization.",
      "Collaborated cross-functionally to harden backend logic and improve reliability.",
    ],
  },
  {
    company: "Lakshya Coaching Institute",
    role: "Frontend Developer",
    period: "Mar – Apr 2024",
    location: "Remote",
    stack: ["React.js", "Tailwind CSS", "Figma"],
    link: "#",
    linkLabel: "Website",
    points: [
      "Built a web application for 200+ students with an integrated fee-payment system, lifting online enrollment by 30%.",
      "Designed the responsive UI in Figma and implemented it with React and Tailwind — 85/100 Mobile PageSpeed Insights.",
    ],
  },
  {
    company: "FTK Center for IT, Jamia Millia Islamia",
    role: "Full Stack Developer Intern",
    period: "Dec 2022 – Jan 2023",
    location: "New Delhi",
    stack: ["React", "Node.js", "MySQL"],
    link: "#",
    linkLabel: "GitHub",
    points: [
      "Led frontend development of an alumni community app for 200+ users, improving usability and engagement.",
      "Optimized mobile responsiveness and cut page-load times by 20%.",
      "Shipped 3 major features in 6 weeks as part of a 4-member Agile team.",
    ],
  },
];

export const projects: Project[] = [
  {
    title: "Smart MCQ Solver",
    year: "2026",
    tag: "A Grade",
    blurb: "End-to-end MCQ ranking system with a from-scratch BiLSTM encoder.",
    points: [
      "Ranked question–option pairs and returned Top-3 answers with a custom BiLSTM — shared embeddings plus feature interaction via concatenation, absolute difference, and element-wise product.",
      "Trained on 2,000 MCQs with a question-level split: 99.17% mAP@3, 98.33% accuracy, 98.34% macro-F1.",
      "Benchmarked against Sentence-Transformer and fine-tuned DistilBERT, then deployed an interactive Streamlit app with confidence scores and inference-time model loading.",
    ],
    tech: ["PyTorch", "BiLSTM", "NLP", "Streamlit"],
    links: [
      { label: "Live Demo", href: "#" },
      { label: "GitHub", href: "https://github.com/hanzalatafzeel/dl-genai-project-26-t2" },
    ],
    accent: "from-cyan-500/25 via-violet-500/25 to-pink-500/25",
    monogram: "{ }",
  },
  {
    title: "Django E-Commerce Platform",
    year: "2024",
    blurb: "Full-stack storefront with real-time tracking, recommendations, and caching.",
    image: "/projects/ecommerce-storefront.png",
    alt: "VoltMart e-commerce storefront",
    points: [
      "Catalog of 520+ products with search, filtering, sorting, reviews, cart, checkout, coupons, and inventory management.",
      "JWT auth with role-based admin controls, order management, and a payment layer with mock and Stripe-ready gateways.",
      "Live order tracking over Django Channels/WebSockets with Redis channel-layer support.",
      "Redis-cached catalog APIs measured at a 2.2x average speedup; PostgreSQL + Redis deployed via Docker Compose.",
    ],
    tech: ["Django REST Framework", "React", "PostgreSQL", "Redis", "WebSockets"],
    links: [{ label: "GitHub", href: "https://github.com/hanzalatafzeel/django-ecommerce" }],
    accent: "from-violet-500/25 via-fuchsia-500/20 to-cyan-500/25",
    monogram: "</>",
  },
  {
    title: "Smart Quiz Management System",
    year: "2025",
    blurb: "Distributed quiz platform with real-time scoring and async analytics.",
    points: [
      "Flask REST API with a Vue.js SPA handling 100+ concurrent quiz sessions and real-time scoring.",
      "JWT auth, RBAC, and Celery-powered background processing for report generation.",
      "Admin dashboard with data visualization and CSV export — processed 10,000+ quiz responses.",
    ],
    tech: ["Flask", "Vue.js", "Celery", "SQLite"],
    links: [{ label: "GitHub", href: "#" }],
    accent: "from-pink-500/25 via-amber-500/20 to-violet-500/25",
    monogram: "%%",
  },
  {
    title: "University Canteen Management System",
    year: "2023",
    blurb: "Backend-driven canteen operations: orders, inventory, and billing.",
    points: [
      "PHP backend handling order management, inventory tracking, and billing workflows.",
      "Responsive HTML/CSS/JS frontend for menu display, order placement, and admin control.",
      "Database-driven modules for users, orders, and stock with strict input validation.",
    ],
    tech: ["PHP", "HTML", "CSS", "JavaScript"],
    links: [{ label: "GitHub", href: "#" }],
    accent: "from-amber-500/25 via-green-500/20 to-cyan-500/25",
    monogram: "$_",
  },
];

export const education: EducationItem[] = [
  {
    school: "Indian Institute of Technology Madras",
    degree: "BS in Data Science & Applications",
    period: "2023 – 2027",
    location: "Chennai, India",
    note: "CGPA 8.25 / 10",
    status: "Pursuing",
  },
  {
    school: "Jamia Millia Islamia",
    degree: "Diploma in Engineering",
    period: "2020 – 2023",
    location: "New Delhi, India",
    note: "Percentage 84.6%",
    status: "Completed",
  },
  {
    school: "CBSE — Class X",
    degree: "Secondary School",
    period: "2020",
    location: "Patna, Bihar, India",
    note: "Percentage 90.2%",
    status: "Completed",
  },
];

export const achievements: AchievementItem[] = [
  {
    title: "2nd Place — Mailathon, Marghazi 2023",
    org: "IIT Madras · Full-Stack Challenge",
    year: "2023",
    icon: "trophy",
    detail:
      "Ranked 2nd among 100+ teams in a 48-hour hackathon, building an email-marketing platform with React and Node under tight deadlines.",
  },
  {
    title: "Academic Excellence Award — Gold Medal",
    org: "AFMI",
    year: "2020",
    icon: "award",
    detail:
      "Awarded for outstanding academic performance with a 90+% score, grounding strong fundamentals in computer science and programming.",
  },
  {
    title: "Technical Content Creator & Designer",
    org: "Sundarbans House, IIT Madras",
    year: "Sep 2023 – Present",
    icon: "pen",
    detail:
      "Lead responsive HTML/CSS email template design for 500+ members; collaborated with marketing and events teams to lift campaign execution efficiency by 35%.",
  },
];

export const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export const footerNote = "Built with Next.js · Tailwind CSS · Framer Motion";