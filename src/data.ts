import {
  Code2, Palette, Server, Database, GitBranch,
  ShoppingBag, Cloud, MapPin, Bell, Globe, Store,
  Briefcase, Heart, Users, BookOpen
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'GitHub', href: '#github' },
  { label: 'Contact', href: '#contact' },
];

export const skillsData = [
  {
    category: 'Programming Languages',
    icon: Code2,
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'SQL'],
  },
  {
    category: 'Frontend',
    icon: Palette,
    skills: ['React.js', 'Next.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'Backend',
    icon: Server,
    skills: ['Node.js', 'Express.js', 'Django', 'REST APIs', 'GraphQL'],
  },
  {
    category: 'Databases',
    icon: Database,
    skills: ['MongoDB', 'MySQL', 'PostgreSQL', 'Firebase'],
  },
  {
    category: 'Tools & Technologies',
    icon: GitBranch,
    skills: ['Git & GitHub', 'Docker', 'VS Code', 'Postman', 'Figma', 'Linux'],
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
    icon: ShoppingBag,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Parima – Community Opportunities Platform',
    description:
      'A full-featured community opportunities platform connecting users with jobs, volunteering opportunities, and local events. Built with React, TypeScript, Supabase, PostgreSQL, and modern frontend technologies while supporting authentication, user roles, applications, profiles, ratings, and real-time updates.',
    tags: ['React', 'TypeScript', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/Maham-Saleem/parima',
    demo: 'https://parima-chi.vercel.app/',
    icon: Globe,
    gradient: 'from-purple-500 to-indigo-500',
  },
  {
    title: 'Brew & Bean Coffee House',
    description:
      'A modern coffee shop website designed with an elegant user interface, interactive menu browsing, category filtering, responsive layouts, and a seamless ordering experience suitable for cafés and restaurants.',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Maham-Saleem/brewandbean',
    demo: 'https://brewandbean-seven.vercel.app/',
    icon: Cloud,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: "SMAR's Perfume Store",
    description:
      'A luxury perfume e-commerce frontend developed using HTML, CSS, and PHP, featuring elegant product displays, responsive layouts, intuitive navigation, and a premium shopping interface.',
    tags: ['HTML', 'CSS', 'PHP'],
    github: 'https://github.com/Maham-Saleem/smars',
    demo: 'https://smars-iota.vercel.app/',
    icon: Store,
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    title: 'Weather Forecasting System',
    description:
      'A C++ application that integrates a weather API to retrieve live weather information, parse JSON data, and display real-time forecasts, demonstrating API integration and backend programming concepts.',
    tags: ['C++', 'API Integration', 'JSON', 'OOP'],
    github: 'https://github.com/Maham-Saleem/Weather-Forecasting-System',
    demo: null,
    icon: MapPin,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Disaster Evacuation System',
    description:
      'A route planning application that uses mapping APIs to determine the shortest and safest evacuation path during emergencies, demonstrating algorithmic problem solving and API integration.',
    tags: ['C++', 'Mapping API', 'Algorithms', 'Graph Theory'],
    github: 'https://github.com/Maham-Saleem/Disaster-Evacuation-System',
    demo: null,
    icon: Bell,
    gradient: 'from-red-500 to-purple-500',
  },
];

export const experienceData = [
  {
    title: 'Full-Stack Developer',
    organization: 'Tech Solutions Inc.',
    period: 'Jun 2025 - Present',
    description:
      'Architecting and building production-grade web applications using React, Node.js, and TypeScript. Collaborating cross-functionally to deliver scalable, maintainable software solutions for enterprise clients.',
    icon: Briefcase,
    type: 'work',
  },
  {
    title: 'Lead Developer',
    organization: 'University Tech Society',
    period: 'Sep 2024 - Present',
    description:
      'Leading a team of 15+ developers, establishing coding standards, conducting code reviews, and delivering the society\'s web platform. Organizing technical workshops and hackathons to foster engineering excellence.',
    icon: Users,
    type: 'leadership',
  },
  {
    title: 'Teaching Assistant – Data Structures',
    organization: 'University of Engineering',
    period: 'Jan 2025 - May 2025',
    description:
      'Mentored 40+ students in data structures and algorithms, conducted lab sessions, graded assignments, and provided one-on-one guidance to improve student outcomes.',
    icon: BookOpen,
    type: 'volunteer',
  },
  {
    title: 'Open Source Contributor',
    organization: 'GitHub',
    period: '2024 - Present',
    description:
      'Active contributor to multiple open-source projects, delivering bug fixes, feature implementations, and documentation improvements that serve thousands of developers.',
    icon: Heart,
    type: 'volunteer',
  },
];

export const certificationsData = [
  {
    title: 'Meta Front-End Developer',
    issuer: 'Coursera',
    date: '2025',
    category: 'frontend',
    link: '#',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
    category: 'cloud',
    link: '#',
  },
  {
    title: 'Google Data Analytics',
    issuer: 'Google',
    date: '2024',
    category: 'data',
    link: '#',
  },
  {
    title: 'JavaScript Algorithms & Data Structures',
    issuer: 'freeCodeCamp',
    date: '2024',
    category: 'programming',
    link: '#',
  },
  {
    title: 'React - The Complete Guide',
    issuer: 'Udemy',
    date: '2024',
    category: 'frontend',
    link: '#',
  },
  {
    title: 'PostgreSQL & MongoDB Bootcamp',
    issuer: 'Udemy',
    date: '2025',
    category: 'database',
    link: '#',
  },
];

export const educationData = [
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'University of Engineering & Technology',
    period: '2023 - 2027',
    description:
      'Focusing on software architecture, full-stack development, and system design. Active member of the university tech community.',
    achievements: [
      'Dean\'s List - All Semesters',
      'CGPA: 3.8/4.0',
      'Best Capstone Project Award',
      'Tech Society Lead',
    ],
  },
];

export const socialLinks = {
  email: 'maham.saleem@email.com',
  linkedin: 'https://linkedin.com/in/maham-saleem',
  github: 'https://github.com/Maham-Saleem',
};
