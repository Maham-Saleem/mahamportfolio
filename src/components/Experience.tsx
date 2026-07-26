import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Users } from 'lucide-react';
import { experienceData } from '../data';

const typeIcons: Record<string, React.ElementType> = {
  internship: Briefcase,
  leadership: Users,
};

const typeColors: Record<string, string> = {
  internship: 'from-blue-500 to-cyan-500',
  leadership: 'from-purple-500 to-pink-500',
};

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Experience</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            Experience &{' '}
            <span className="gradient-text">Leadership</span>
          </h2>
        </motion.div>

        <div className="relative mt-16 max-w-3xl">
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {experienceData.map((item, i) => {
              const Icon = typeIcons[item.type] || Briefcase;
              const gradient = typeColors[item.type] || 'from-primary to-secondary';
              return (
                <motion.div
                  key={`${item.organization}-${item.title}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                  className="relative pl-0 sm:pl-16"
                >
                  <div className={`absolute left-0 top-0 hidden sm:flex w-[46px] h-[46px] rounded-2xl bg-gradient-to-br ${gradient} items-center justify-center shadow-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>

                  <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider text-white bg-gradient-to-br ${gradient}`}>
                        {item.type}
                      </span>
                      {item.period && (
                        <span className="text-xs text-text-secondary">{item.period}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold font-heading mt-2">{item.title}</h3>
                    <p className="text-sm text-primary font-medium">{item.organization}</p>
                    {item.responsibilities.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {item.responsibilities.map((r, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
