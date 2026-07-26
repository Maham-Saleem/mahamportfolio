import { motion } from 'framer-motion';
import { ArrowDown, Code2, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './GithubIcon';

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
        <div className="absolute -top-48 -right-48 w-[500px] h-[500px] bg-primary/4 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-secondary/4 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/6 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/8 text-primary rounded-full text-sm font-medium border border-primary/15">
                <Sparkles size={14} />
                Available for freelance projects
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading tracking-tight leading-[1.08]"
            >
              Crafting digital{' '}
              <span className="gradient-text">experiences</span>
              {' '}that drive results
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-lg sm:text-xl text-text-secondary leading-relaxed max-w-xl"
            >
              I'm <strong className="text-text">Maham Saleem</strong> — a full-stack web developer who builds 
              modern, high-performance web applications, e-commerce platforms, and seamless digital 
              experiences that users love.
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
              <button
                onClick={() => scrollTo('#contact')}
                className="px-7 py-3.5 rounded-full font-medium border-2 border-border text-text-secondary hover:border-primary/30 hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
              >
                Get in Touch
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
                href="https://linkedin.com/in/maham-saleem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl text-text-secondary hover:text-primary hover:bg-primary/5 transition-all duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={22} />
              </a>
              <a
                href="mailto:maham.saleem@email.com"
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

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-80 h-80 xl:w-96 xl:h-96">
              <div className="absolute inset-0 gradient-bg rounded-[32px] opacity-8 rotate-6" />
              <div className="absolute inset-3 bg-card rounded-[28px] border border-border shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 mx-auto rounded-2xl gradient-bg flex items-center justify-center mb-4 shadow-lg">
                    <Code2 size={40} className="text-white" />
                  </div>
                  <p className="text-sm text-text-secondary font-medium">Full-Stack Developer</p>
                  <p className="text-xs text-text-secondary/60 mt-1">React · Node.js · TypeScript</p>
                </div>
              </div>
              <div className="absolute -top-3 -right-3 w-14 h-14 rounded-2xl gradient-bg rotate-12 flex items-center justify-center shadow-lg animate-float">
                <Sparkles size={24} className="text-white" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
