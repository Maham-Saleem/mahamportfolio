import { SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiTypescript, SiVite, SiPhp, SiMysql, SiPostgresql, SiSupabase, SiCplusplus, SiPython, SiGit, SiGithub, SiVercel, SiXampp, SiNotion } from 'react-icons/si';
import { type IconType } from 'react-icons';
import { Cpu, Database, Pen, Code2 } from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];

export const mobileNavLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
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

export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  challenges: string[];
  features: string[];
  tags: string[];
  github: string;
  demo?: string;
  gradient: string;
  image?: string;
}

export const projectsData: Project[] = [
  {
    slug: 'smars-perfume-store',
    title: "SMAR's Perfume Store",
    category: 'Luxury Perfume Store',
    description:
      'A luxury perfume e-commerce frontend built with HTML, CSS and PHP. Features elegant product presentation, responsive layouts and a premium shopping experience.',
    challenges: [
      'Designed a visually immersive product catalogue showcasing perfumes with detailed descriptions and pricing.',
      'Built a responsive layout that maintains elegance across mobile, tablet and desktop viewports.',
      'Integrated a PHP backend with MySQL for product management and dynamic content rendering.',
    ],
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
  },
  {
    slug: 'maham-clothing-store',
    title: 'Maham Clothing Store',
    category: 'Responsive E-Commerce Website',
    description:
      'A modern fashion e-commerce website built with React and Tailwind CSS. Features a complete shopping experience including product catalogues, cart management, wishlist, checkout flow, and account management — all wrapped in a premium, mobile-first interface.',
    challenges: [
      'Orchestrated a multi-step checkout flow with form validation and state persistence across page navigation.',
      'Built a responsive product grid with dynamic filtering and sorting that performs smoothly across devices.',
      'Implemented a wishlist and shopping cart system with local storage persistence for seamless user experience.',
    ],
    features: [
      'User Authentication',
      'Shopping Cart with Persistence',
      'Wishlist Management',
      'Multi-Step Checkout',
      'Product Catalogue with Filters',
      'Responsive & Mobile-Optimised',
      'Premium UI Design',
      'Account Dashboard',
    ],
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Maham-Saleem/mahamstore',
    demo: 'https://mahamstore.vercel.app/',
    gradient: 'from-pink-500 to-rose-500',
    image: '/images/mahamstore.png',
  },
  {
    slug: 'brew-and-bean',
    title: 'Brew & Bean Coffee House',
    category: 'Responsive Coffee Shop Website',
    description:
      'A modern coffee shop website designed with React and Tailwind CSS, featuring elegant UI design, responsive layouts, interactive menu browsing and an engaging user experience.',
    challenges: [
      'Crafted a warm, inviting visual identity with custom color palettes and typography that reflects the coffee brand.',
      'Implemented interactive menu browsing with category filtering for a seamless customer experience.',
      'Ensured pixel-perfect responsive design across all device sizes with smooth animations and transitions.',
    ],
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
  },
  {
    slug: 'parima',
    title: 'Parima',
    category: 'Community Opportunities Platform',
    description:
      'A responsive web platform connecting users with job opportunities, volunteering events and local activities. Built with React, TypeScript and Supabase, featuring real-time updates, user authentication, and a full role-based access system.',
    challenges: [
      'Designed a real-time database schema in PostgreSQL with row-level security for multi-tenant data isolation.',
      'Implemented role-based access control with distinct views for students, organisers, and administrators.',
      'Built a private messaging system with contact management features while maintaining data privacy.',
    ],
    features: [
      'Authentication & User Roles',
      'Opportunity Listings with Filters',
      'Application Tracking',
      'Saved Opportunities',
      'User Profiles with Ratings',
      'Private Contact Management',
      'Real-Time Database Updates',
    ],
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/Maham-Saleem/parima',
    demo: 'https://parima-chi.vercel.app/',
    gradient: 'from-purple-500 to-indigo-500',
    image: '/images/parima.png',
  },
];

export interface Certification {
  title: string;
  issuer: string;
  year?: string;
  category: 'academic' | 'professional' | 'leadership';
}

export const certificationsData: Certification[] = [
  { title: "Chancellor's Honorship Certificate", issuer: 'Capital University of Science and Technology', year: 'Spring 2025', category: 'academic' },
  { title: "Chancellor's Honorship Certificate", issuer: 'Capital University of Science and Technology', year: 'Fall 2024', category: 'academic' },
  { title: 'Physics Project Exhibition Certificate', issuer: 'Punjab College', category: 'academic' },
  { title: 'Proctorship Certificate', issuer: 'Punjab College', category: 'academic' },
  { title: 'AWS Cloud Core Team Badge', issuer: 'AWS Student Builder Group (CUST)', year: '2026', category: 'professional' },
  { title: 'Deloitte Australia Technology Job Simulation', issuer: 'Forage', category: 'professional' },
  { title: 'CodeAlpha C++ Programming Internship Certificate', issuer: 'CodeAlpha', category: 'professional' },
  { title: 'Business Analysis and Project Management', issuer: 'Coursera', category: 'professional' },
  { title: 'Web Development with WordPress', issuer: 'Coursera', category: 'professional' },
  { title: 'Use Canva to Design Digital Course Collateral', issuer: 'Coursera', category: 'professional' },
  { title: 'Volunteering Head Certificate', issuer: 'CAUSE Society (CUST)', category: 'leadership' },
  { title: '65 Hours Community Service Certificate', issuer: 'PGGA', year: '2026', category: 'leadership' },
];

export const academicCertifications = certificationsData.filter(c => c.category === 'academic');
export const professionalCertifications = certificationsData.filter(c => c.category === 'professional');
export const leadershipCertifications = certificationsData.filter(c => c.category === 'leadership');

export const socialLinks = {
  email: 'mahamsaleem951@gmail.com',
  phone: '+92 335 0519119',
  linkedin: 'https://www.linkedin.com/in/mahamsaleem0406',
  github: 'https://github.com/Maham-Saleem',
};
