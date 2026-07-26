import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Cloud, BarChart3, Code2, Database, Layout, Sparkles } from 'lucide-react';
import { certificationsData } from '../data';

const categoryIcons: Record<string, React.ElementType> = {
  frontend: Layout,
  cloud: Cloud,
  data: BarChart3,
  programming: Code2,
  database: Database,
};

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="certifications" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-primary rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4">
            Certifications &{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-20 h-1 gradient-bg rounded-full mx-auto" />
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certificationsData.map((cert, i) => {
            const Icon = categoryIcons[cert.category] || Award;
            return (
              <motion.a
                key={i}
                href={cert.link}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover:gradient-bg group-hover:text-white transition-all duration-300">
                    <Icon size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-base group-hover:text-primary transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-text-secondary mt-1">{cert.issuer}</p>
                    <span className="inline-block mt-2 text-xs font-medium text-primary bg-primary/5 px-2.5 py-1 rounded-md">
                      {cert.date}
                    </span>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
