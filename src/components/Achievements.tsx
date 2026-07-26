import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Trophy, Star, Award, CheckCircle2 } from 'lucide-react';
import { achievementsData } from '../data';

const icons = [Trophy, Award, Star, CheckCircle2, Award, Star];

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="achievements" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Achievements</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            Key{' '}
            <span className="gradient-text">highlights</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {achievementsData.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{item.label}</h3>
                  {item.value && (
                    <p className="text-sm text-primary font-medium mt-0.5">{item.value}</p>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
