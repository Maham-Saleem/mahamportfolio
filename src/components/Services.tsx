import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, FileText, Code2, Smartphone, Wrench, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Understanding the Problem',
    description: 'I start by understanding the goal, audience, and requirements — ensuring every decision is intentional and aligned with what the project needs.',
  },
  {
    icon: FileText,
    title: 'Planning & Wireframing',
    description: 'Before writing code, I plan the structure and layout. Wireframes keep the project focused and reduce wasted effort during development.',
  },
  {
    icon: Code2,
    title: 'UI Development',
    description: 'With a clear plan, I build the interface using modern frontend tools — writing clean, component-based code that brings the design to life.',
  },
  {
    icon: Smartphone,
    title: 'Responsive Optimization',
    description: 'Every project is refined across screen sizes — from large desktops to small phones — so the experience feels natural everywhere.',
  },
  {
    icon: Wrench,
    title: 'Testing & Refinement',
    description: 'I review interactions, check consistency, and polish details until the interface feels solid, smooth, and ready for real users.',
  },
  {
    icon: Rocket,
    title: 'Deployment',
    description: 'The final build is deployed, tested in production, and handed over with everything needed to keep it running smoothly.',
  },
];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-16 md:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl -translate-y-1/2" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Process</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            How I{' '}
            <span className="gradient-text">build</span>
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            A consistent workflow that takes every project from idea to launch.
          </p>
        </motion.div>

        <div className="relative mt-14">
          <div className="hidden lg:block absolute left-8 top-10 bottom-10 w-px bg-border/60" />

          <div className="space-y-8 lg:space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="lg:flex items-start gap-6 group"
                >
                  <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-2xl bg-card border border-border group-hover:border-primary/20 group-hover:shadow-md transition-all duration-300 shrink-0 relative z-10">
                    <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                    <Icon size={22} className="text-primary" />
                  </div>

                  <div className="lg:hidden flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 relative">
                      <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      <Icon size={20} />
                    </div>
                    <h3 className="text-base font-bold font-heading">{step.title}</h3>
                  </div>

                  <div className="hidden lg:block pt-4">
                    <h3 className="text-base font-bold font-heading group-hover:text-primary transition-colors">{step.title}</h3>
                    <p className="mt-2 text-sm text-text-secondary leading-relaxed max-w-xl">{step.description}</p>
                  </div>

                  <div className="lg:hidden pl-16">
                    <p className="text-sm text-text-secondary leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
