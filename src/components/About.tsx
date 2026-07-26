import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { User, Layout, BookOpen } from 'lucide-react';

const cards = [
  {
    icon: User,
    title: 'Who I Am',
    content: (
      <>
        <p>I am Maham Saleem, a Software Engineering student at Capital University of Science and Technology (CUST).</p>
        <p className="mt-3">I currently have a CGPA of <strong className="text-text">3.94/4.00</strong>.</p>
        <p className="mt-3">I enjoy building responsive, elegant, and user-friendly websites that combine clean design with excellent user experience.</p>
      </>
    ),
  },
  {
    icon: Layout,
    title: 'What I Build',
    content: (
      <>
        <p>I primarily build modern frontend websites including:</p>
        <ul className="mt-3 space-y-1.5">
          {['Business Websites', 'Portfolio Websites', 'E-commerce Interfaces', 'Responsive Landing Pages', 'Interactive React Applications'].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-3">My focus is writing clean code while creating visually appealing user interfaces.</p>
      </>
    ),
  },
  {
    icon: BookOpen,
    title: 'Currently Learning',
    content: (
      <>
        <p>I am continuously improving my skills in:</p>
        <ul className="mt-3 space-y-1.5">
          {['React', 'TypeScript', 'Modern Frontend Development', 'Backend Development', 'Software Engineering'].map((item) => (
            <li key={item} className="flex items-center gap-2 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-4 text-sm text-text-secondary italic">Continuously learning and growing as a developer.</p>
      </>
    ),
  },
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
            Get to know{' '}
            <span className="gradient-text">me</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="p-7 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-11 h-11 rounded-xl gradient-bg flex items-center justify-center mb-5">
                <card.icon size={20} className="text-white" />
              </div>
              <h3 className="text-lg font-bold font-heading mb-4">{card.title}</h3>
              <div className="text-sm text-text-secondary leading-relaxed">
                {card.content}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
