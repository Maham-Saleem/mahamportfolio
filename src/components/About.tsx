import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Zap, Heart, Code2, Sparkles } from 'lucide-react';

const highlights = [
  { icon: Target, label: 'Goal-Oriented', desc: 'Focused on building impactful software solutions' },
  { icon: Zap, label: 'Fast Learner', desc: 'Quickly adapting to new technologies and frameworks' },
  { icon: Heart, label: 'Passionate', desc: 'Dedicated to crafting exceptional user experiences' },
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
            Getting to Know{' '}
            <span className="gradient-text">Me</span>
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
                <div className="w-full h-full flex items-center justify-center">
                  <Code2 size={80} className="text-primary/30" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 gradient-bg rounded-2xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-2xl font-heading">3+</span>
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
              I'm a dedicated Software Engineering student with a deep passion for full-stack web development. 
              My journey in tech started with curiosity about how websites work, which evolved into a drive 
              to build elegant, scalable, and user-friendly applications.
            </p>
            <p className="text-text-secondary leading-relaxed">
              I specialize in creating modern web applications using React, Node.js, and TypeScript. 
              My goal is to leverage technology to solve real-world problems while continuously learning 
              and growing as a developer. I believe in writing clean code, crafting meaningful user 
              experiences, and contributing to the developer community.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:shadow-md transition-all duration-300"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
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
