import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Code2, Award } from 'lucide-react';

const infoCards = [
  {
    icon: GraduationCap,
    title: 'Education',
    items: [
      { label: 'BSc Software Engineering', sub: 'Capital University of Science & Technology' },
    ],
  },
  {
    icon: Code2,
    title: 'Current Focus',
    items: [
      { label: 'Frontend Development', sub: 'React \u2022 TypeScript \u2022 Tailwind CSS' },
    ],
  },
  {
    icon: Award,
    title: 'Highlights',
    items: [
      { label: '4+ Web Projects', sub: 'E-commerce, platforms, and more' },
      { label: 'AWS Cloud Core Team', sub: 'Student builder programme' },
    ],
  },
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">About</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            Building with{' '}
            <span className="gradient-text">purpose</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14"
        >
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed text-justify">
            I'm a Frontend Developer and Software Engineering student at Capital University
            of Science and Technology (CUST), maintaining a CGPA of 3.95/4.00. I specialise
            in building modern, responsive web applications with a strong focus on clean
            design, intuitive user experiences, and maintainable code. Through academic
            learning and real-world projects, I'm continually refining my skills while
            creating digital products that are both functional and visually polished.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 grid sm:grid-cols-3 gap-5"
        >
          {infoCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                    <Icon size={19} />
                  </div>
                  <h3 className="text-base font-bold font-heading">{card.title}</h3>
                </div>
                {card.items.map((item) => (
                  <div key={item.label} className="mb-2 last:mb-0">
                    <p className="text-sm font-semibold">{item.label}</p>
                    <p className="text-xs text-text-secondary mt-0.5">{item.sub}</p>
                  </div>
                ))}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
