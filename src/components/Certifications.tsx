import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Cloud, Briefcase, Code2, BookOpen, FlaskConical, Users, GraduationCap } from 'lucide-react';
import { certificationsData } from '../data';

const categoryIcons: Record<string, React.ElementType> = {
  'PGGA': Users,
  'AWS Student Builder Group (CUST)': Cloud,
  'Capital University of Science and Technology': GraduationCap,
  'CAUSE Society (CUST)': Users,
  'Forage': Briefcase,
  'CodeAlpha': Code2,
  'Coursera': BookOpen,
  'Punjab College': FlaskConical,
};

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Certifications</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            Certificates &{' '}
            <span className="gradient-text">Credentials</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {certificationsData.map((cert, i) => {
            const Icon = categoryIcons[cert.issuer] || Award;
            return (
              <motion.div
                key={`${cert.title}-${i}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.05 + i * 0.04 }}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-semibold leading-snug">{cert.title}</h3>
                    <p className="text-xs text-text-secondary mt-1">{cert.issuer}</p>
                    {cert.year && (
                      <span className="inline-block mt-1.5 text-[10px] font-medium text-primary bg-primary/5 px-2 py-0.5 rounded-md">
                        {cert.year}
                      </span>
                    )}
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
