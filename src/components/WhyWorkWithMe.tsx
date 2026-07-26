import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Code2, Palette, Zap, Search, BookOpen } from 'lucide-react';

const features = [
  {
    icon: Smartphone,
    title: 'Responsive & Mobile-First',
    description: 'Every project is built mobile-first and tested across devices, ensuring a seamless experience whether on a phone, tablet, or desktop.',
  },
  {
    icon: Code2,
    title: 'Clean, Maintainable Code',
    description: 'I write modular, well-structured code that is easy to read, maintain, and scale — because good code is just as important as a good design.',
  },
  {
    icon: Palette,
    title: 'Modern UI/UX Design',
    description: 'I combine modern design principles with thoughtful interaction details to create interfaces that feel intuitive and polished.',
  },
  {
    icon: Zap,
    title: 'Performance Optimisation',
    description: 'Fast load times, optimised assets, and efficient rendering are built into every project from the start — not an afterthought.',
  },
  {
    icon: Search,
    title: 'Attention to Detail',
    description: 'Pixels matter. From consistent spacing to micro-interactions, I refine every detail until the result feels intentional and complete.',
  },
  {
    icon: BookOpen,
    title: 'Continuous Learning',
    description: 'I stay current with modern tools and best practices, applying new knowledge to every project to deliver better results.',
  },
];

export default function WhyWorkWithMe() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="why-me" className="py-16 md:py-24 relative">
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
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Why Work With Me</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            What I{' '}
            <span className="gradient-text">bring</span>
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Every project gets the same commitment to quality, clarity, and craft.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {features.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.06 + i * 0.06 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:gradient-bg group-hover:text-white transition-all duration-300">
                  <Icon size={20} />
                </div>
                <h3 className="mt-4 text-base font-bold font-heading">{item.title}</h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
