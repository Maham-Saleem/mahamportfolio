import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles } from 'lucide-react';

export default function Education() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Education</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            Academic{' '}
            <span className="gradient-text">background</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 max-w-lg mx-auto text-center"
        >
          <div className="p-12 rounded-2xl bg-card border border-border border-dashed">
            <Sparkles size={40} className="text-accent mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Content Coming Soon</h3>
            <p className="text-sm text-text-secondary">
              My educational details will be added here soon.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
