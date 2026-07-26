import { SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiTypescript, SiVite, SiPhp, SiMysql, SiPostgresql, SiSupabase, SiCplusplus, SiPython, SiGit, SiGithub, SiVercel, SiXampp, SiNotion } from 'react-icons/si';
import { type IconType } from 'react-icons';
import { Cpu, Database, Pen, Code2 } from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'GitHub', href: '#github' },
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
    details: [{ label: 'CGPA', value: '3.94 / 4.00' }],
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

export const projectsData = [
  {
    title: 'Maham Clothing Store',
    description:
      'A modern responsive e-commerce website featuring secure authentication, wishlist functionality, shopping cart, checkout flow, account management, and a premium shopping experience. Designed with a strong focus on usability, performance, and mobile responsiveness.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: 'https://github.com/Maham-Saleem/mahamstore',
    demo: 'https://mahamstore.vercel.app/',
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Parima – Community Opportunities Platform',
    description:
      'A full-featured community opportunities platform connecting users with jobs, volunteering opportunities, and local events. Built with React, TypeScript, Supabase, PostgreSQL, and modern frontend technologies while supporting authentication, user roles, applications, profiles, ratings, and real-time updates.',
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/Maham-Saleem/parima',
    demo: 'https://parima-chi.vercel.app/',
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Brew & Bean Coffee House',
    description:
      'A modern coffee shop website designed with an elegant user interface, interactive menu browsing, category filtering, responsive layouts, and a seamless ordering experience suitable for cafes and restaurants.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Maham-Saleem/brewandbean',
    demo: 'https://brewandbean-seven.vercel.app/',
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: "SMAR's Perfume Store",
    description:
      'A luxury perfume e-commerce frontend developed using HTML, CSS, and PHP, featuring elegant product displays, responsive layouts, intuitive navigation, and a premium shopping interface.',
    tags: ['HTML', 'CSS', 'PHP'],
    github: 'https://github.com/Maham-Saleem/smars',
    demo: 'https://smars-iota.vercel.app/',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Weather Forecasting System',
    description:
      'A C++ application that integrates a weather API to retrieve live weather information, parse JSON data, and display real-time forecasts, demonstrating API integration and backend programming concepts.',
    tags: ['C++', 'API Integration', 'JSON', 'OOP'],
    github: 'https://github.com/Maham-Saleem/Weather-Forecasting-System',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Disaster Evacuation System',
    description:
      'A route planning application that uses mapping APIs to determine the shortest and safest evacuation path during emergencies, demonstrating algorithmic problem solving and API integration.',
    tags: ['C++', 'Mapping API', 'Algorithms', 'Graph Theory'],
    github: 'https://github.com/Maham-Saleem/Disaster-Evacuation-System',
    gradient: 'from-red-500 to-purple-500',
  },
];

export const socialLinks = {
  email: 'mahamsaleem951@gmail.com',
  phone: '+92 335 0519119',
  linkedin: 'https://www.linkedin.com/in/mahamsaleem0406',
  github: 'https://github.com/Maham-Saleem',
};
