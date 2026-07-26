import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Code2, GraduationCap } from 'lucide-react';
import { techData, educationData } from '../data';

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
            Get to know{' '}
            <span className="gradient-text">me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-7 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-5">
              <User size={20} className="text-white" />
            </div>
            <h3 className="text-lg font-bold font-heading mb-4">Who I Am</h3>
            <div className="text-sm text-text-secondary leading-relaxed">
              <p>I am Maham Saleem, a Software Engineering student at Capital University of Science and Technology (CUST).</p>
              <p className="mt-3">I currently have a CGPA of <strong className="text-text">3.95/4.00</strong>.</p>
              <p className="mt-3">I enjoy building responsive, elegant, and user-friendly websites that combine clean design with excellent user experience.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-7 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-5">
              <Code2 size={20} className="text-white" />
            </div>
            <h3 className="text-lg font-bold font-heading mb-4">Tech Stack</h3>
            <div className="space-y-4">
              {techData.map((category) => (
                <div key={category.category}>
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-text-secondary/60 mb-2">{category.category}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {category.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <span
                          key={item.name}
                          className="inline-flex items-center gap-1 px-2.5 py-1 text-[11px] font-medium rounded-md bg-primary/5 text-primary/80"
                        >
                          <span className="text-[13px]"><Icon /></span>
                          {item.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="p-7 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
          >
            <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-5">
              <GraduationCap size={20} className="text-white" />
            </div>
            <h3 className="text-lg font-bold font-heading mb-4">Education</h3>
            <div className="space-y-4">
              {educationData.map((edu) => (
                <div key={edu.institution}>
                  <h4 className="text-sm font-semibold">{edu.institution}</h4>
                  <p className="text-xs text-text-secondary mt-0.5">{edu.degree}</p>
                  <p className="text-[11px] text-primary font-medium mt-0.5">{edu.period}</p>
                  {edu.details.map((d) => (
                    <p key={d.label} className="text-xs text-text mt-1">
                      {d.label}: <span className="font-semibold gradient-text">{d.value}</span>
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
