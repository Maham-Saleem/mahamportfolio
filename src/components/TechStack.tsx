import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Terminal, Wrench } from 'lucide-react';
import { techData } from '../data';

const categoryIcons: Record<string, React.ElementType> = {
  'Frontend Development': Code2,
  'Backend & Database': Database,
  'Programming Languages': Terminal,
  'Development Tools': Wrench,
};

export default function TechStack() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="tech-stack" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Tech Stack</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            Technologies I{' '}
            <span className="gradient-text">work with</span>
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            The tools and languages I use to build modern web applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14">
          {techData.map((category, i) => {
            const CatIcon = categoryIcons[category.category] || Code2;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                className="p-7 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border/60">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center">
                    <CatIcon size={18} className="text-white" />
                  </div>
                  <h3 className="text-sm font-semibold font-heading">{category.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-primary/3 hover:bg-primary/8 border border-transparent hover:border-primary/15 hover:-translate-y-0.5 transition-all duration-200"
                      >
                        <span className="text-lg shrink-0 text-primary/70">
                          <Icon />
                        </span>
                        <span className="text-sm font-medium text-text-secondary">{item.name}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
