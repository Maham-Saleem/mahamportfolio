import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Database, Smartphone } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Full-Stack Development', desc: 'End-to-end solutions from database design to polished UIs' },
  { icon: Palette, label: 'Clean Architecture', desc: 'Maintainable, scalable code with modern best practices' },
  { icon: Smartphone, label: 'Responsive by Default', desc: 'Pixel-perfect experiences across every device' },
  { icon: Database, label: 'Performance Optimized', desc: 'Fast load times and smooth interactions' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">About</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            I build digital products that{' '}
            <span className="gradient-text">make an impact</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-text-secondary leading-relaxed"
          >
            <p className="text-lg">
              I specialize in crafting modern web applications that help businesses establish a 
              strong digital presence. From e-commerce platforms to interactive tools, I deliver 
              solutions that are visually compelling and technically robust.
            </p>
            <p>
              My approach combines clean architecture, performance optimization, and user-centered 
              design to create applications that drive real results. I work across the full stack, 
              handling everything from database design to responsive front-end interfaces.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-3">
                  <item.icon size={18} className="text-white" />
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.label}</h3>
                <p className="text-xs text-text-secondary">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
