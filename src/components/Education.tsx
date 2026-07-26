import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, CheckCircle, Sparkles } from 'lucide-react';
import { educationData } from '../data';

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const edu = educationData[0];

  return (
    <section id="education" className="py-20 md:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-primary rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            Education
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4">
            My <span className="gradient-text">Education</span>
          </h2>
          <div className="w-20 h-1 gradient-bg rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative p-8 rounded-2xl bg-card border border-border hover:shadow-xl transition-all duration-300 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 gradient-bg opacity-5 rounded-bl-full" />

            <div className="flex items-start gap-5">
              <div className="p-4 rounded-2xl gradient-bg text-white shadow-lg shrink-0">
                <GraduationCap size={32} />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold font-heading mb-1">{edu.degree}</h3>
                <p className="text-primary font-medium text-lg mb-1">{edu.institution}</p>
                <p className="text-text-secondary text-sm mb-4">{edu.period}</p>
                <p className="text-text-secondary leading-relaxed mb-5">{edu.description}</p>

                <div className="grid sm:grid-cols-2 gap-3">
                  {edu.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle size={16} className="text-primary shrink-0" />
                      <span className="text-text-secondary">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
