export const profile = {
  name: "Barveily Joanabeth V. Engco",
  title: "Software Developer",
  subtitle: "Backend Specialist · Full-Stack Capable",
  tagline: "Building scalable systems, APIs, and SaaS platforms.",
  location: "Sta. Ana, Manila",
  linkedin: "https://www.linkedin.com/in/barveily-engco-401a2529a",
  github: "https://github.com/Eily14sia",
  initials: "BJE",
};

export const typewriterWords = [
  "Backend Developer",
  "Laravel Specialist",
  "API Architect",
  "SaaS Builder",
];

export const aboutParagraphs = [
  `I am a passionate Backend Developer with a deep love for architecting scalable systems and secure API infrastructures. My journey began at the Pamantasan ng Lungsod ng Maynila (PLM), where I honed my technical foundation.`,
  `Currently specializing in the Laravel ecosystem, I focus on building robust SaaS platforms and enterprise-level applications that balance performance with security.`,
];

export const aboutSkills = ["Laravel", "Node.js", "MySQL", "Redis"];

export interface SkillGroup {
  icon: string;
  label: string;
  items: string[];
}

export const skillsGrid: SkillGroup[] = [
  {
    icon: "storage",
    label: "Backend",
    items: ["Laravel", "Node.js (Express)", "Filament", "AdminJS", "Django"],
  },
  {
    icon: "code",
    label: "Languages",
    items: ["PHP", "JavaScript", "TypeScript", "Python"],
  },
  {
    icon: "database",
    label: "Databases",
    items: ["MySQL", "MariaDB", "PostgreSQL"],
  },
  {
    icon: "cloud_done",
    label: "Cloud & Storage",
    items: ["AWS (S3)"],
  },
  {
    icon: "terminal",
    label: "DevOps & Tools",
    items: ["Git", "CI/CD", "Docker", "SSH"],
  },
  {
    icon: "layers",
    label: "Architecture",
    items: ["RESTful APIs", "API Integration", "System Design"],
  },
  {
    icon: "auto_awesome",
    label: "AI Tools",
    items: ["Cursor AI", "GitHub Copilot", "Claude AI"],
  },
  {
    icon: "devices",
    label: "Frontend",
    items: ["Angular", "React"],
  },
];

export const experience = [
  {
    role: "Backend-Web Developer",
    company: "Smartech Solutions Philippines Incorporated",
    location: "Boni, Mandaluyong",
    duration: "June 2024 – Present",
    highlights: [
      "Led end-to-end SmartPay payment gateway integration across multiple enterprise platforms (event management, tourism booking, LGU systems, and Worker's ID issuance), integrating payment APIs and webhook/postback handling for real-time transaction processing.",
      "Architected and delivered multiple SaaS platforms including an Event Management Platform (Node.js, React, AdminJS) and Tourism Booking Platform (Laravel, Filament), designing multi-tenant architecture and scalable backend systems.",
      "Developed a Worker's ID Issuance System integrated with SmartPay — QR code generation, approval workflows, and payment processing for seamless end-to-end digital issuance.",
      "Maintained and enhanced multiple legacy production systems, consistently delivering feature updates, bug fixes, and stability improvements post-deployment.",
      "Led backend modernization by migrating core services from Node.js (Sequelize) and Lumen to Laravel, improving maintainability and long-term scalability.",
      "Designed scalable RESTful APIs using Laravel, Lumen, Node.js, and Python, supporting high-volume transactions, QR workflows, and authentication integrations.",
      "Built a Python automation tool to process Excel datasets and convert AWS S3-hosted QR images from JPG to PNG, reducing manual processing time.",
      "Leveraged AI-assisted development tools (Cursor AI, GitHub Copilot, Claude) to improve development speed and code quality.",
    ],
  },
  {
    role: "Web Developer",
    company: "Circuit Solutions, Inc.",
    location: "Ortigas Center, Pasig",
    duration: "Feb 2024 – May 2024",
    highlights: [
      "Developed a proof-of-concept Android app with offline face recognition using Java (Android Studio) and a Python Flask API for face recognition processing and integration.",
      "Implemented remote time-in/time-out system with geolocation and facial verification for CSI and retail use cases to enable secure attendance tracking.",
      "Built Laravel backend APIs for mobile data processing, PDF generation with digital signatures, and integration with existing company APIs for remote time tracking.",
    ],
  },
];

export const projects = [
  {
    title: "Cressential",
    subtitle: "Blockchain-based Academic Record Issuance & Verification System",
    role: "Backend Developer",
    date: "Sep 2023",
    context: "Capstone Project",
    icon: "token",
    description:
      "A secure, decentralized credential verification system leveraging Ethereum blockchain to eliminate academic fraud. Implemented smart contracts and a Laravel-based portal for rapid verification.",
    stack: ["Solidity", "Laravel", "Ethers.js"],
  },
  {
    title: "DonBentory",
    subtitle: "Web-based Inventory System with Demand and Sales Forecasting",
    role: "Backend Developer",
    date: "Apr 2023",
    context: "System Integration & Architecture Project",
    icon: "inventory",
    description:
      "Smart warehouse management solution utilizing predictive analytics to forecast demand. Reduced stockouts by 40% through integrated machine learning models and real-time inventory tracking.",
    stack: ["Python", "Laravel", "Scikit-Learn"],
  },
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  school: "Pamantasan ng Lungsod ng Maynila",
  years: "2020 – 2024",
  honor: "Magna Cum Laude",
};

export const contacts = [
  { icon: "link", label: "LinkedIn", value: "Barveily Engco", href: "https://www.linkedin.com/in/barveily-engco-401a2529a" },
  { icon: "code", label: "GitHub", value: "Eily14sia", href: "https://github.com/Eily14sia" },
];

export const navLinks = [
  { label: "Home", href: "#home", icon: "home" },
  { label: "Skillset", href: "#skillset", icon: "terminal" },
  { label: "Projects", href: "#projects", icon: "code" },
  { label: "Resume", href: "#resume", icon: "description" },
  { label: "Contact", href: "#contact", icon: "mail" },
];
