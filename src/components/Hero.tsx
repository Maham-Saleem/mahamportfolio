import { motion } from 'framer-motion';
import { Download, ChevronRight, Mail, Code2, Sparkles, FileText, Smartphone, Palette, ShoppingBag } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './GithubIcon';

const services = [
  { icon: Smartphone, label: 'Web Applications' },
  { icon: ShoppingBag, label: 'E-Commerce' },
  { icon: Palette, label: 'UI/UX Design' },
];

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-primary rounded-full text-sm font-medium mb-6">
                <Sparkles size={16} />
                Full-Stack Web Developer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-4"
            >
              Building <span className="gradient-text">Digital</span> Experiences That Drive Results
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-text-secondary mb-8 max-w-xl"
            >
              I'm <strong className="text-text">Maham Saleem</strong>, a full-stack web developer specializing in 
              crafting modern, high-performance web applications, e-commerce platforms, and seamless user experiences 
              using cutting-edge technologies.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="flex flex-wrap gap-3 mb-8"
            >
              {services.map((s) => (
                <span key={s.label} className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-card border border-border text-sm font-medium text-text-secondary">
                  <s.icon size={16} className="text-primary" />
                  {s.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <button
                onClick={() => scrollTo('#projects')}
                className="group inline-flex items-center gap-2 px-7 py-3.5 gradient-bg text-white rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                View My Work
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-primary/30 text-primary rounded-full font-medium hover:bg-primary hover:text-white hover:-translate-y-0.5 transition-all duration-300"
              >
                <Download size={18} />
                Download Resume
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 mt-8"
            >
              <a href="https://github.com/Maham-Saleem" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border text-text-secondary hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md">
                <GithubIcon size={20} />
              </a>
              <a href="https://linkedin.com/in/maham-saleem" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-card border border-border text-text-secondary hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md">
                <LinkedinIcon size={20} />
              </a>
              <a href="mailto:maham.saleem@email.com" className="p-3 rounded-full bg-card border border-border text-text-secondary hover:text-primary hover:border-primary hover:-translate-y-0.5 transition-all duration-300 shadow-sm hover:shadow-md">
                <Mail size={20} />
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative hidden md:flex items-center justify-center"
          >
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 gradient-bg rounded-full opacity-10 animate-pulse" />
              <div className="absolute inset-4 bg-accent/20 rounded-full" />
              <div className="absolute inset-8 bg-card rounded-full shadow-xl flex items-center justify-center border border-border">
                <div className="text-center">
                  <Code2 size={64} className="text-primary mx-auto mb-2" />
                  <span className="gradient-text font-bold text-2xl font-heading">&lt;/&gt;</span>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 gradient-bg rounded-2xl rotate-12 flex items-center justify-center shadow-lg animate-float">
                <Sparkles size={28} className="text-white" />
              </div>
              <div className="absolute -bottom-2 -left-4 w-14 h-14 bg-card border border-border rounded-xl shadow-md flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                <FileText size={22} className="text-secondary" />
              </div>
              <div className="absolute top-4 -left-3 w-12 h-12 bg-card border border-border rounded-xl shadow-md flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                <ShoppingBag size={20} className="text-primary" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
