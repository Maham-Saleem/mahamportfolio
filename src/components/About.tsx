import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from 'lucide-react';

const highlights = [
  { label: 'CGPA', value: '3.95 / 4.00' },
  { label: 'Projects', value: '6+ Built' },
  { label: 'Certificates', value: '12+ Earned' },
  { label: 'AWS', value: 'Cloud Core Team' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">About</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            A developer who{' '}
            <span className="gradient-text">builds with purpose</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-5"
          >
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              I'm Maham Saleem — a frontend web developer who turns ideas into clean, responsive, and
              modern web experiences. I build websites that don't just look good but work well
              across every device.
            </p>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              My approach is straightforward: understand the goal, design with the user in mind,
              and write code that's as maintainable as it is functional. Every project gets the
              same attention to detail, whether it's a landing page or a full e-commerce interface.
            </p>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              Right now I'm focused on deepening my skills with <strong className="text-text">React</strong>,{' '}
              <strong className="text-text">TypeScript</strong>, and modern frontend tooling — building
              production-quality applications while pursuing my Software Engineering degree at{' '}
              <strong className="text-text">Capital University of Science and Technology</strong>.
            </p>

            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors mt-2"
            >
              See my work <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <p className="text-xs text-text-secondary font-medium tracking-wide uppercase">{item.label}</p>
                <p className="text-lg sm:text-xl font-bold font-heading text-text mt-0.5">{item.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
