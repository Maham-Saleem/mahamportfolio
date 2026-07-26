import {
  Code2, Palette, Server, Database, GitBranch,
  ShoppingBag, Cloud, MapPin, Bell,
  Briefcase, Heart, Users, BookOpen
} from 'lucide-react';

export const navLinks = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
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
      'A full-featured e-commerce platform for clothing with product catalog, shopping cart, user authentication, and secure checkout.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
    github: 'https://github.com/Maham-Saleem',
    demo: 'https://mahamclothing.vercel.app',
    icon: ShoppingBag,
    gradient: 'from-pink-500 to-rose-500',
  },
  {
    title: 'Brew & Bean Coffee House',
    description:
      'A beautifully designed coffee shop website with menu display, online ordering system, location finder, and loyalty program.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Prisma'],
    github: 'https://github.com/Maham-Saleem',
    demo: 'https://brewandbean.vercel.app',
    icon: Cloud,
    gradient: 'from-amber-500 to-orange-500',
  },
  {
    title: 'Weather Forecast System',
    description:
      'A real-time weather forecasting application with interactive maps, 7-day forecasts, and location-based weather alerts.',
    tags: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
    github: 'https://github.com/Maham-Saleem',
    demo: 'https://weatherforecast.vercel.app',
    icon: MapPin,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Evacuation System',
    description:
      'An emergency evacuation management system with real-time tracking, alert notifications, and route optimization.',
    tags: ['Django', 'Python', 'PostgreSQL', 'WebSockets', 'Google Maps'],
    github: 'https://github.com/Maham-Saleem',
    demo: 'https://evacuationsystem.vercel.app',
    icon: Bell,
    gradient: 'from-red-500 to-purple-500',
  },
];

export const experienceData = [
  {
    title: 'Full-Stack Developer Intern',
    organization: 'Tech Solutions Inc.',
    period: 'Jun 2025 - Present',
    description:
      'Developing and maintaining web applications using React and Node.js. Collaborating with cross-functional teams to deliver high-quality software solutions.',
    icon: Briefcase,
    type: 'work',
  },
  {
    title: 'Lead Web Developer',
    organization: 'University Tech Society',
    period: 'Sep 2024 - Present',
    description:
      'Leading a team of 15+ developers in building and maintaining the society website. Organizing workshops and hackathons to promote web development.',
    icon: Users,
    type: 'leadership',
  },
  {
    title: 'Teaching Assistant - Data Structures',
    organization: 'University of Engineering',
    period: 'Jan 2025 - May 2025',
    description:
      'Assisted professors in conducting labs, grading assignments, and mentoring 40+ students in data structures and algorithms.',
    icon: BookOpen,
    type: 'volunteer',
  },
  {
    title: 'Open Source Contributor',
    organization: 'Various Projects',
    period: '2024 - Present',
    description:
      'Contributed to multiple open-source projects including bug fixes, feature implementations, and documentation improvements.',
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
