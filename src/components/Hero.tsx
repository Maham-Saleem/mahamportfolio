import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './GithubIcon';

const shapes = [
  { size: 60, x: '10%', y: '15%', delay: 0, duration: 6, rotate: 45, borderRadius: '20%' },
  { size: 40, x: '85%', y: '20%', delay: 1, duration: 7, rotate: 0, borderRadius: '50%' },
  { size: 80, x: '75%', y: '70%', delay: 2, duration: 8, rotate: 30, borderRadius: '30%' },
  { size: 35, x: '20%', y: '75%', delay: 0.5, duration: 5, rotate: 0, borderRadius: '50%' },
  { size: 50, x: '50%', y: '10%', delay: 1.5, duration: 7, rotate: 60, borderRadius: '15%' },
  { size: 45, x: '90%', y: '50%', delay: 0.8, duration: 6.5, rotate: 0, borderRadius: '50%' },
  { size: 30, x: '5%', y: '50%', delay: 2.5, duration: 5.5, rotate: 0, borderRadius: '50%' },
  { size: 70, x: '40%', y: '80%', delay: 1.2, duration: 7.5, rotate: 20, borderRadius: '25%' },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/8 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full blur-sm" />
        <div className="absolute bottom-1/3 right-1/4 w-3 h-3 bg-secondary/25 rounded-full blur-sm" />

        {shapes.map((s, i) => (
          <div
            key={i}
            className="absolute bg-gradient-to-br from-primary/10 to-secondary/10 border border-primary/8 animate-float"
            style={{
              width: s.size,
              height: s.size,
              left: s.x,
              top: s.y,
              borderRadius: s.borderRadius,
              transform: `rotate(${s.rotate}deg)`,
              animationDelay: `${s.delay}s`,
              animationDuration: `${s.duration}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/8 text-primary rounded-full text-sm font-medium border border-primary/15">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Frontend Web Developer
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading tracking-tight leading-[1.08]"
          >
            Hi, I'm{' '}
            <span className="gradient-text">Maham Saleem</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-3 text-lg sm:text-xl text-text-secondary"
          >
            Software Engineering Student at{' '}
            <span className="text-text font-medium">Capital University of Science and Technology (CUST)</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-5 text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl"
          >
            I am a Software Engineering student passionate about frontend web development and creating modern, responsive, and user-friendly websites. I enjoy transforming ideas into elegant web experiences while continuously improving my software engineering and web development skills.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <button
              onClick={() => scrollTo('#projects')}
              className="group px-7 py-3.5 gradient-bg text-white rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              View Projects
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
            </button>
            <a
              href="#"
              className="px-7 py-3.5 gradient-bg text-white rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              <Download size={16} />
              Download CV
            </a>
            <button
              onClick={() => scrollTo('#contact')}
              className="px-7 py-3.5 rounded-full font-medium border-2 border-border text-text-secondary hover:border-primary/30 hover:text-primary hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
            >
              <Mail size={16} />
              Contact Me
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 flex items-center gap-5"
          >
            <a
              href="https://github.com/Maham-Saleem"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-200"
              aria-label="GitHub"
            >
              <GithubIcon size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/mahamsaleem0406"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl text-text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-200"
              aria-label="LinkedIn"
            >
              <LinkedinIcon size={22} />
            </a>
            <a
              href="mailto:mahamsaleem951@gmail.com"
              className="p-2.5 rounded-xl text-text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-200"
              aria-label="Email"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
