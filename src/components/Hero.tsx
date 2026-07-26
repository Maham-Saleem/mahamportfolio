import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './GithubIcon';

const techStack = [
  'React', 'JavaScript', 'Tailwind CSS', 'MySQL', 'Git', 'Figma', 'TypeScript', 'PHP',
];

const badges = [
  { label: 'AWS Student Builder' },
  { label: 'CGPA 3.95' },
  { label: '12+ Certificates' },
  { label: '6+ Projects' },
];

const featureTags = [
  { label: 'Responsive Design', x: '-8%', y: '15%', delay: 0 },
  { label: 'Modern UI', x: '82%', y: '8%', delay: 0.3 },
  { label: 'Clean Code', x: '-6%', y: '65%', delay: 0.6 },
  { label: 'Fast Performance', x: '80%', y: '58%', delay: 0.9 },
  { label: 'Mobile First', x: '38%', y: '92%', delay: 1.2 },
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
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] bg-primary/4 rounded-full blur-3xl" />
        <div className="absolute -bottom-48 -left-48 w-[500px] h-[500px] bg-secondary/4 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl animate-pulse-glow" />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[15%] right-[8%] w-14 h-14 border border-primary/8 rounded-xl rotate-12 bg-gradient-to-br from-primary/4 to-secondary/4"
        />
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
          className="absolute bottom-[30%] left-[5%] w-8 h-8 border border-accent/8 rounded-full bg-accent/4"
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/8 text-primary rounded-full text-sm font-medium border border-primary/15">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                Frontend Web Developer
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="mt-5 text-sm sm:text-base text-text-secondary font-medium tracking-wide"
            >
              Hi, I'm <span className="text-text">Maham Saleem</span>
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="mt-2 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading tracking-tight leading-[1.08]"
            >
              Building Modern{' '}
              <span className="gradient-text">Web Experiences</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.18 }}
              className="mt-5 text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl"
            >
              I build modern, responsive websites and web applications that solve real problems — combining clean design with solid code to create digital experiences users love.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.24 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <button
                onClick={() => scrollTo('#projects')}
                className="group px-8 py-3.5 gradient-bg text-white rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              >
                View Projects
                <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform" />
              </button>
              <a
                href="/Maham_Saleem_CV.pdf"
                download
                className="px-7 py-3.5 rounded-full font-medium border-2 border-border text-text-secondary hover:border-primary/30 hover:text-primary hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={16} />
                Download CV
              </a>
              <button
                onClick={() => scrollTo('#contact')}
                className="px-7 py-3.5 rounded-full font-medium border-2 border-border text-text-secondary hover:border-primary/30 hover:text-primary hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={16} />
                Contact
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {badges.map((b) => (
                <span
                  key={b.label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 text-[11px] font-medium rounded-full bg-card border border-border text-text-secondary"
                >
                  <CheckCircle size={11} className="text-primary" />
                  {b.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.36 }}
              className="mt-5 flex flex-wrap gap-2"
            >
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-[11px] font-medium rounded-full bg-primary/5 text-primary border border-primary/10 hover:bg-primary/10 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.42 }}
              className="mt-7 flex items-center gap-5"
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:flex items-center justify-center relative"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative w-full max-w-[520px]"
            >
              <div className="rounded-xl overflow-hidden shadow-2xl shadow-primary/10 border border-border/60 bg-card">
                <div className="flex items-center gap-1.5 px-4 py-3 bg-card border-b border-border/60">
                  <span className="w-3 h-3 rounded-full bg-red-400" />
                  <span className="w-3 h-3 rounded-full bg-yellow-400" />
                  <span className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="ml-4 flex-1 max-w-[60%] mx-auto">
                    <div className="px-3 py-1.5 rounded-lg bg-bg border border-border/40 text-[11px] text-text-secondary/60 text-center truncate">
                      mahamstore.vercel.app
                    </div>
                  </div>
                </div>
                <div className="relative bg-gradient-to-br from-pink-100 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/20">
                  <img
                    src="/images/mahamstore.png"
                    alt="Maham Clothing Store"
                    className="w-full h-auto block"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/5 to-transparent pointer-events-none" />
                </div>
              </div>
            </motion.div>

            {featureTags.map((tag) => (
              <motion.div
                key={tag.label}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: tag.delay }}
                className="absolute hidden xl:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card/80 backdrop-blur-sm border border-border/60 shadow-sm"
                style={{ left: tag.x, top: tag.y }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-[11px] font-medium text-text-secondary whitespace-nowrap">{tag.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
