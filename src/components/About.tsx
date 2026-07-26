import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Sparkles, Shield, Zap, Smartphone } from 'lucide-react';

const highlights = [
  { icon: Code2, label: 'Full-Stack Development', desc: 'End-to-end web solutions from database to UI' },
  { icon: Shield, label: 'Clean Code', desc: 'Maintainable, scalable, and well-architected codebases' },
  { icon: Zap, label: 'Performance Focused', desc: 'Optimized applications with fast load times' },
  { icon: Smartphone, label: 'Responsive Design', desc: 'Pixel-perfect experiences across all devices' },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
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
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4">
            What I <span className="gradient-text">Deliver</span>
          </h2>
          <div className="w-20 h-1 gradient-bg rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 border border-border overflow-hidden">
                <div className="w-full h-full flex flex-col items-center justify-center gap-3">
                  <Code2 size={80} className="text-primary/30" />
                  <span className="text-text-secondary/40 text-lg font-heading font-semibold">Maham Saleem</span>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-28 h-28 gradient-bg rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-center text-white">
                  <div className="font-bold text-3xl font-heading">12+</div>
                  <div className="text-[10px] opacity-80">Projects</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-text-secondary leading-relaxed text-lg">
              I specialize in building modern, high-performance web applications that help businesses 
              establish a strong digital presence. From e-commerce platforms to interactive web tools, 
              I deliver solutions that are both visually compelling and technically robust.
            </p>
            <p className="text-text-secondary leading-relaxed">
              With expertise across the full development stack, I handle everything from database 
              architecture and API design to responsive front-end interfaces. My approach combines 
              clean code practices, performance optimization, and user-centered design to create 
              applications that drive real results.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-md hover:border-primary/20 transition-all duration-300"
                >
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary shrink-0">
                    <item.icon size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">{item.label}</h4>
                    <p className="text-xs text-text-secondary">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
