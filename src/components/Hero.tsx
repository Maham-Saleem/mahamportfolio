import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail, Award, Briefcase, GraduationCap, Code2, CheckCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './GithubIcon';

const achievements = [
  { icon: GraduationCap, label: 'CGPA', value: '3.95 / 4.00', color: 'from-purple-500 to-pink-500', desc: 'Academic Excellence' },
  { icon: Code2, label: 'Projects', value: '6+ Built', color: 'from-blue-500 to-cyan-500', desc: 'Web Applications' },
  { icon: Award, label: 'Certificates', value: '12+ Earned', color: 'from-emerald-500 to-teal-500', desc: 'Continuous Learning' },
  { icon: Briefcase, label: 'AWS', value: 'Cloud Core Team', color: 'from-orange-500 to-amber-500', desc: 'Student Builder Group' },
];

const techStack = [
  'React', 'JavaScript', 'Tailwind CSS', 'MySQL', 'Git', 'Figma', 'TypeScript', 'PHP',
];

const stats = [
  { label: '6+ Projects', icon: CheckCircle },
  { label: '12+ Certificates', icon: CheckCircle },
  { label: 'AWS Student Builder', icon: CheckCircle },
  { label: 'CGPA 3.95', icon: CheckCircle },
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
        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-secondary/4 rounded-full blur-3xl" />
        <div className="absolute top-1/4 right-1/3 w-[500px] h-[500px] bg-accent/6 rounded-full blur-3xl animate-pulse-glow" />

        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-[18%] right-[12%] w-16 h-16 border border-primary/10 rounded-2xl rotate-12 bg-gradient-to-br from-primary/4 to-secondary/4"
        />
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute bottom-[25%] left-[8%] w-10 h-10 border border-accent/10 rounded-full bg-accent/4"
        />
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute top-[40%] right-[6%] w-8 h-8 border border-primary/8 rounded-lg rotate-45 bg-primary/4"
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
              I design and develop modern, responsive web applications with clean UI, intuitive user experiences, and scalable code. Passionate about turning ideas into polished digital products.
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
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-x-6 gap-y-2"
            >
              {stats.map((s) => (
                <span key={s.label} className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-text-secondary">
                  <s.icon size={14} className="text-primary shrink-0" />
                  {s.label}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.36 }}
              className="mt-6 flex flex-wrap gap-2"
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
              className="mt-8 flex items-center gap-5"
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
            className="hidden lg:grid grid-cols-2 gap-4"
          >
            {achievements.map((item, i) => (
              <motion.div
                key={item.label}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
                className={`rounded-2xl p-5 bg-gradient-to-br ${item.color} shadow-lg relative overflow-hidden group cursor-default`}
              >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center mb-3">
                    <item.icon size={20} className="text-white" />
                  </div>
                  <p className="text-white/70 text-xs font-medium tracking-wide uppercase">{item.label}</p>
                  <p className="text-white text-xl sm:text-2xl font-bold font-heading mt-1 leading-tight">{item.value}</p>
                  <p className="text-white/60 text-[11px] mt-1">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
