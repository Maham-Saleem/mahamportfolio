import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Users, Cloud, Code2, Briefcase } from 'lucide-react';
import { experienceData } from '../data';

const icons = [GraduationCap, Award, Users, Cloud, Code2, Briefcase];

function TimelineCard({ item, index }: { item: typeof experienceData[0]; index: number }) {
  const Icon = icons[index] || GraduationCap;
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex items-start gap-6 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
      <div className={`hidden lg:block w-1/2 ${isLeft ? 'text-right pr-10' : 'text-left pl-10'}`}>
        <motion.div
          initial={{ opacity: 0, x: isLeft ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.4 }}
          className={`inline-block text-left p-5 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 ${isLeft ? '' : ''}`}
        >
          <div className="flex items-center gap-2 mb-2">
            <span className="px-2.5 py-0.5 rounded-md text-[11px] font-semibold bg-primary/10 text-primary">
              {item.period}
            </span>
          </div>
          <h3 className="text-sm font-bold font-heading">{item.title}</h3>
          <p className="text-xs text-text-secondary mt-1">{item.organization}</p>
          {item.responsibilities.length > 0 && (
            <p className="text-xs text-text-secondary/70 mt-1.5 leading-relaxed">{item.responsibilities[0]}</p>
          )}
        </motion.div>
      </div>

      <div className="hidden lg:flex items-center justify-center w-10 h-10 rounded-full bg-card border-2 border-primary/30 shadow-sm shrink-0 relative z-10 -mx-5">
        <Icon size={16} className="text-primary" />
      </div>

      <div className="lg:hidden flex items-start gap-4 w-full">
        <div className="flex flex-col items-center">
          <div className="w-9 h-9 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center shrink-0 relative z-10">
            <Icon size={14} className="text-primary" />
          </div>
          <div className="w-px flex-1 bg-border/60 mt-2" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.35 }}
          className="flex-1 pb-6"
        >
          <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold bg-primary/10 text-primary mb-1.5">
            {item.period}
          </span>
          <h3 className="text-sm font-bold font-heading">{item.title}</h3>
          <p className="text-xs text-text-secondary mt-0.5">{item.organization}</p>
          {item.responsibilities.length > 0 && (
            <p className="text-xs text-text-secondary/70 mt-1 leading-relaxed">{item.responsibilities[0]}</p>
          )}
        </motion.div>
      </div>

      <div className={`hidden lg:block w-1/2 ${isLeft ? 'text-left pl-10' : 'text-right pr-10'}`} />
    </div>
  );
}

export default function Experience() {
  const sectionRef = useRef(null);
  const [titleRef, titleInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.6], ['0%', '100%']);

  return (
    <section id="experience" className="py-16 md:py-24 relative" ref={sectionRef}>
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Timeline</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
              My{' '}
              <span className="gradient-text">journey</span>
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              From first-year to building production-ready websites — a story of consistent growth.
            </p>
          </motion.div>
        </div>

        <div className="relative mt-14">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border/40">
            <motion.div
              className="w-full bg-gradient-to-b from-primary via-secondary to-primary"
              style={{ height: lineHeight }}
            />
          </div>

          <div className="space-y-1 lg:space-y-6">
            {experienceData.map((item, i) => (
              <TimelineCard key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
