import { SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiTypescript, SiVite, SiPhp, SiMysql, SiPostgresql, SiSupabase, SiCplusplus, SiPython, SiGit, SiGithub, SiVercel, SiXampp, SiNotion } from 'react-icons/si';
import { type IconType } from 'react-icons';
import { Cpu, Database, Pen, Code2 } from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const mobileNavLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

interface TechItem {
  name: string;
  icon: IconType;
}

interface TechCategory {
  category: string;
  items: TechItem[];
}

export const techData: TechCategory[] = [
  {
    category: 'Frontend Development',
    items: [
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'React', icon: SiReact },
      { name: 'Tailwind CSS', icon: SiTailwindcss },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'Vite', icon: SiVite },
    ],
  },
  {
    category: 'Backend & Database',
    items: [
      { name: 'PHP', icon: SiPhp },
      { name: 'MySQL', icon: SiMysql },
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'SQL', icon: Database },
      { name: 'Supabase', icon: SiSupabase },
    ],
  },
  {
    category: 'Programming Languages',
    items: [
      { name: 'C++', icon: SiCplusplus },
      { name: 'Python', icon: SiPython },
    ],
  },
  {
    category: 'Development Tools',
    items: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'VS Code', icon: Code2 },
      { name: 'Vercel', icon: SiVercel },
      { name: 'XAMPP', icon: SiXampp },
      { name: 'Notion', icon: SiNotion },
      { name: 'Draw.io', icon: Pen },
      { name: 'Packet Tracer', icon: Cpu },
    ],
  },
];

export const servicesList = [
  'Responsive Website Development',
  'Business Websites',
  'Portfolio Websites',
  'Landing Pages',
  'E-commerce Frontend Development',
  'UI Implementation',
  'Website Redesign',
];

export const educationData = [
  {
    institution: 'Capital University of Science and Technology (CUST)',
    degree: 'Bachelor of Software Engineering',
    period: 'Expected Graduation 2028',
    details: [{ label: 'CGPA', value: '3.95 / 4.00' }],
  },
  {
    institution: 'Punjab College',
    degree: 'Intermediate (FSc Pre-Engineering)',
    period: 'Graduated 2024',
    details: [{ label: 'Marks', value: '1064 / 1200' }],
  },
  {
    institution: 'Capital Public School',
    degree: 'Matriculation',
    period: 'Graduated 2022',
    details: [{ label: 'Marks', value: '1018 / 1100' }],
  },
];

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  tags: string[];
  github: string;
  demo?: string;
  gradient: string;
  image?: string;
  type: 'featured' | 'additional';
  techDetail?: string;
}

export const projectsData: Project[] = [
  {
    slug: 'maham-clothing-store',
    title: 'Maham Clothing Store',
    category: 'Responsive E-Commerce Website',
    description:
      'A modern and responsive fashion e-commerce website designed to provide a premium online shopping experience. The website includes user authentication, shopping cart, wishlist, checkout flow, account management, and a mobile-friendly interface.',
    features: [
      'User Authentication',
      'Shopping Cart',
      'Wishlist',
      'Checkout Flow',
      'Responsive Design',
      'Premium UI',
      'Mobile Optimised',
      'Product Catalogue',
      'Account Management',
    ],
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Maham-Saleem/mahamstore',
    demo: 'https://mahamstore.vercel.app/',
    gradient: 'from-pink-500 to-rose-500',
    image: '/images/mahamstore.png',
    type: 'featured',
  },
  {
    slug: 'smars-perfume-store',
    title: "SMAR's Perfume Store",
    category: 'Luxury Perfume Store',
    description:
      'A luxury perfume e-commerce frontend developed using HTML, CSS and PHP. The project focuses on elegant product presentation, responsive layouts and a premium shopping experience.',
    features: [
      'Responsive Layout',
      'Product Catalogue',
      'Elegant UI',
      'Shopping Interface',
      'Modern Design',
    ],
    tags: ['HTML5', 'CSS3', 'PHP', 'MySQL'],
    github: 'https://github.com/Maham-Saleem/smars',
    demo: 'https://smars-iota.vercel.app/',
    gradient: 'from-emerald-500 to-teal-500',
    image: '/images/smars.png',
    type: 'featured',
  },
  {
    slug: 'brew-and-bean',
    title: 'Brew & Bean Coffee House',
    category: 'Responsive Coffee Shop Website',
    description:
      'A modern coffee shop website featuring elegant UI design, responsive layouts, interactive menu browsing and an engaging user experience.',
    features: [
      'Responsive Design',
      'Interactive Menu',
      'Category Filtering',
      'Beautiful UI',
      'Contact Section',
      'Gallery',
      'Mobile Optimised',
    ],
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Maham-Saleem/brewandbean',
    demo: 'https://brewandbean-seven.vercel.app/',
    gradient: 'from-amber-500 to-orange-500',
    image: '/images/brew-and-bean.png',
    type: 'featured',
  },
  {
    slug: 'parima',
    title: 'Parima',
    category: 'Community Opportunities Platform',
    description:
      'A responsive web platform connecting users with job opportunities, volunteering opportunities and local events. The platform supports authentication, applications, user profiles, ratings, saved opportunities and secure contact management.',
    features: [
      'Authentication',
      'User Roles',
      'Opportunity Listings',
      'Applications',
      'Saved Opportunities',
      'User Profiles',
      'Ratings',
      'Private Contact Management',
      'Real-Time Updates',
    ],
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/Maham-Saleem/parima',
    demo: 'https://parima-chi.vercel.app/',
    gradient: 'from-purple-500 to-indigo-500',
    image: '/images/parima.png',
    type: 'featured',
    techDetail: 'Database: PostgreSQL (Supabase). Languages: TypeScript, SQL, PL/pgSQL. Frontend: React 18, Vite 5, Tailwind CSS, shadcn/ui. Backend: Supabase.',
  },
  {
    slug: 'weather-forecasting-system',
    title: 'Weather Forecasting System',
    category: 'C++ Application',
    description:
      'A C++ application that integrates a weather API to retrieve real-time weather data, parse JSON responses and display weather forecasts.',
    features: [],
    tags: ['C++', 'REST API', 'JSON'],
    github: 'https://github.com/Maham-Saleem/Weather-Forecasting-System',
    gradient: 'from-blue-500 to-cyan-500',
    type: 'additional',
  },
  {
    slug: 'disaster-evacuation-system',
    title: 'Disaster Evacuation System',
    category: 'C++ Application',
    description:
      'A C++ application that integrates mapping APIs to determine the shortest and safest evacuation route during emergencies.',
    features: [],
    tags: ['C++', 'OpenRouteService API', 'JSON'],
    github: 'https://github.com/Maham-Saleem/Disaster-Evacuation-System',
    gradient: 'from-red-500 to-purple-500',
    type: 'additional',
  },
  {
    slug: 'banking-system',
    title: 'Banking System',
    category: 'C++ Application',
    description:
      'A banking system prototype demonstrating deposits, withdrawals, interest calculations and transaction management using object-oriented programming and file handling.',
    features: [],
    tags: ['C++', 'OOP', 'File Handling'],
    github: 'https://github.com/Maham-Saleem/Codealpha_Bankingsystem',
    gradient: 'from-teal-500 to-cyan-500',
    type: 'additional',
  },
  {
    slug: 'hotel-room-reservation-system',
    title: 'Hotel Room Reservation System',
    category: 'C++ Application',
    description:
      'A hotel reservation system simulation developed using object-oriented programming concepts to understand backend system behaviour.',
    features: [],
    tags: ['C++', 'OOP', 'File Handling'],
    github: 'https://github.com/Maham-Saleem/Hotel-Room-Reservation-System',
    gradient: 'from-blue-600 to-violet-500',
    type: 'additional',
  },
];

export const featuredProjects = projectsData.filter((p) => p.type === 'featured');
export const additionalProjects = projectsData.filter((p) => p.type === 'additional');

export interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  responsibilities: string[];
  type: 'internship' | 'leadership';
}

export const experienceData: ExperienceItem[] = [
  {
    title: 'AWS Cloud Core Team Member',
    organization: 'AWS Student Builder Group (CUST)',
    period: '',
    responsibilities: [],
    type: 'leadership',
  },
  {
    title: 'Volunteering Head',
    organization: 'CAUSE Society (CUST)',
    period: '',
    responsibilities: [],
    type: 'leadership',
  },
  {
    title: 'Virtual C++ Programming Intern',
    organization: 'CodeAlpha',
    period: 'July 2025 – August 2025',
    responsibilities: [
      'Built two console-based projects focusing on object-oriented programming and data handling.',
      'Completed project-based tasks within deadlines in a remote development environment.',
    ],
    type: 'internship',
  },
];

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  featured?: boolean;
}

export const certificationsData: Certification[] = [
  { title: "Chancellor's Honorship Certificate", issuer: 'Capital University of Science and Technology', year: 'Spring 2025', featured: true },
  { title: 'AWS Cloud Core Team Badge', issuer: 'AWS Student Builder Group (CUST)', year: '2026', featured: true },
  { title: 'Deloitte Australia Technology Job Simulation', issuer: 'Forage', featured: true },
  { title: 'CodeAlpha C++ Programming Internship Certificate', issuer: 'CodeAlpha', featured: true },
  { title: 'Volunteering Head Certificate', issuer: 'CAUSE Society (CUST)', featured: true },
  { title: '65 Hours Community Service Certificate', issuer: 'PGGA', year: '2026', featured: true },
  { title: "Chancellor's Honorship Certificate", issuer: 'Capital University of Science and Technology', year: 'Fall 2024' },
  { title: 'Business Analysis and Project Management', issuer: 'Coursera' },
  { title: 'Web Development with WordPress', issuer: 'Coursera' },
  { title: 'Use Canva to Design Digital Course Collateral', issuer: 'Coursera' },
  { title: 'Physics Project Exhibition Certificate', issuer: 'Punjab College' },
  { title: 'Proctorship Certificate', issuer: 'Punjab College' },
];

export const featuredCertifications = certificationsData.filter((c) => c.featured);

export const achievementsData = [
  { label: 'CGPA', value: '3.95 / 4.00' },
  { label: 'AWS Cloud Core Team Member' },
  { label: 'Volunteering Head – CAUSE Society' },
  { label: "Multiple Chancellor's Honorship Certificates" },
  { label: 'CodeAlpha Virtual Internship' },
  { label: '65 Hours Community Service' },
];

export const socialLinks = {
  email: 'mahamsaleem951@gmail.com',
  phone: '+92 335 0519119',
  linkedin: 'https://www.linkedin.com/in/mahamsaleem0406',
  github: 'https://github.com/Maham-Saleem',
};
