import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, School, BookOpen } from 'lucide-react';
import { educationData } from '../data';

const institutionIcons = [GraduationCap, School, BookOpen];

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Education</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            Academic{' '}
            <span className="gradient-text">background</span>
          </h2>
        </motion.div>

        <div className="mt-16 space-y-6 max-w-3xl">
          {educationData.map((edu, i) => {
            const Icon = institutionIcons[i] || GraduationCap;
            return (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center shrink-0 mt-1">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-bold font-heading">{edu.institution}</h3>
                    <p className="text-sm text-text-secondary mt-0.5">{edu.degree}</p>
                    <p className="text-xs text-primary font-medium mt-1">{edu.period}</p>
                    {edu.details.map((d) => (
                      <p key={d.label} className="text-sm text-text mt-2">
                        {d.label}: <span className="font-semibold gradient-text">{d.value}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
