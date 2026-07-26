import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles } from 'lucide-react';
import { experienceData } from '../data';

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-primary rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            Experience
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4">
            Experience &{' '}
            <span className="gradient-text">Leadership</span>
          </h2>
          <div className="w-20 h-1 gradient-bg rounded-full mx-auto" />
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-8">
            {experienceData.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="relative pl-0 sm:pl-20"
                >
                  <div className="absolute left-0 top-0 hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl gradient-bg text-white shadow-lg">
                    <IconComponent size={24} />
                  </div>

                  <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300 ml-0">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-accent/20 text-primary mb-3 capitalize">
                      {item.type}
                    </span>
                    <h3 className="text-xl font-bold font-heading mb-1">{item.title}</h3>
                    <p className="text-primary font-medium text-sm mb-2">{item.organization}</p>
                    <p className="text-text-secondary text-sm mb-3">{item.period}</p>
                    <p className="text-text-secondary leading-relaxed">{item.description}</p>
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
