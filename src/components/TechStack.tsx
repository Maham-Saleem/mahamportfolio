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
    <section id="tech-stack" className="py-24 md:py-32 relative">
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
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 mt-16">
          {techData.map((category, i) => {
            const CatIcon = categoryIcons[category.category] || Code2;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center">
                    <CatIcon size={16} className="text-white" />
                  </div>
                  <h3 className="text-sm font-semibold">{category.category}</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {category.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.name}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-primary/3 hover:bg-primary/8 border border-transparent hover:border-primary/15 transition-all duration-200"
                      >
                        <span className="text-[15px] shrink-0">
                          <Icon />
                        </span>
                        <span className="text-xs font-medium text-text-secondary truncate">
                          {item.name}
                        </span>
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
