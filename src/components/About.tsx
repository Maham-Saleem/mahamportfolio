import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code2, Award } from 'lucide-react';

const infoCards = [
  {
    icon: GraduationCap,
    title: 'Education',
    items: [
      { label: 'Software Engineering', sub: 'Capital University of Science & Technology' },
    ],
  },
  {
    icon: Code2,
    title: 'Current Focus',
    items: [
      { label: 'Frontend Development', sub: 'React \u2022 Tailwind \u2022 Modern UI' },
    ],
  },
  {
    icon: Award,
    title: 'Academic Achievement',
    items: [
      { label: 'CGPA 3.95 / 4.00', sub: 'Chancellor\'s Honours' },
    ],
  },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">About</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            Building with{' '}
            <span className="gradient-text">purpose</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 mt-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-3 space-y-4"
          >
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              I'm a frontend developer who turns ideas into clean, responsive web experiences.
              I focus on building interfaces that work well, look polished, and are built to last.
            </p>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              I work with modern tools like React, TypeScript, and Tailwind CSS to create
              everything from business websites to full e-commerce platforms. Every project
              gets the same attention to detail — consistent spacing, thoughtful interactions,
              and code that's easy to maintain.
            </p>
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed">
              I'm currently pursuing a Software Engineering degree at Capital University of
              Science and Technology, where I maintain a CGPA of 3.95 / 4.00.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {infoCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.title}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                      <Icon size={17} />
                    </div>
                    <h3 className="text-sm font-semibold font-heading">{card.title}</h3>
                  </div>
                  {card.items.map((item) => (
                    <div key={item.label}>
                      <p className="text-sm font-medium">{item.label}</p>
                      <p className="text-xs text-text-secondary mt-0.5">{item.sub}</p>
                    </div>
                  ))}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
