import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Users, Award, Star } from 'lucide-react';
import { experienceData, certificationsData, achievementsData } from '../data';

const typeIcons: Record<string, React.ElementType> = {
  internship: Briefcase,
  leadership: Users,
};

const typeColors: Record<string, string> = {
  internship: 'from-blue-500 to-cyan-500',
  leadership: 'from-purple-500 to-pink-500',
};

const certCategoryIcons: Record<string, React.ElementType> = {
  'PGGA': Users,
  'AWS Student Builder Group (CUST)': Briefcase,
  'Capital University of Science and Technology': Award,
  'CAUSE Society (CUST)': Users,
  'Forage': Briefcase,
  'CodeAlpha': Briefcase,
  'Coursera': Award,
  'Punjab College': Award,
};

const achievementIcons = [Star, Award, Star, Award, Star, Award];

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [certRef, certInView] = useInView({ triggerOnce: true, threshold: 0.05 });
  const [achieveRef, achieveInView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="experience" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Experience</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            Experience &{' '}
            <span className="gradient-text">Leadership</span>
          </h2>
        </motion.div>

        <div className="relative mt-16 max-w-3xl">
          <div className="absolute left-[23px] top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {experienceData.map((item, i) => {
              const Icon = typeIcons[item.type] || Briefcase;
              const gradient = typeColors[item.type] || 'from-primary to-secondary';
              return (
                <motion.div
                  key={`${item.organization}-${item.title}`}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.12 }}
                  className="relative pl-0 sm:pl-16"
                >
                  <div className={`absolute left-0 top-0 hidden sm:flex w-[46px] h-[46px] rounded-2xl bg-gradient-to-br ${gradient} items-center justify-center shadow-lg`}>
                    <Icon size={20} className="text-white" />
                  </div>

                  <div className="p-6 rounded-2xl bg-card border border-border hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-medium uppercase tracking-wider text-white bg-gradient-to-br ${gradient}`}>
                        {item.type}
                      </span>
                      {item.period && (
                        <span className="text-xs text-text-secondary">{item.period}</span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold font-heading mt-2">{item.title}</h3>
                    <p className="text-sm text-primary font-medium">{item.organization}</p>
                    {item.responsibilities.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {item.responsibilities.map((r, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-text-secondary">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/40 mt-1.5 shrink-0" />
                            {r}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div ref={certRef} className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={certInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight">
              Certifications &{' '}
              <span className="gradient-text">Credentials</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {certificationsData.map((cert, i) => {
              const CertIcon = certCategoryIcons[cert.issuer] || Award;
              return (
                <motion.div
                  key={`${cert.title}-${i}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={certInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.05 + i * 0.04 }}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                      <CertIcon size={18} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-sm font-semibold leading-snug">{cert.title}</h3>
                      <p className="text-xs text-text-secondary mt-1">{cert.issuer}</p>
                      {cert.year && (
                        <span className="inline-block mt-1.5 text-[10px] font-medium text-primary bg-primary/5 px-2 py-0.5 rounded-md">
                          {cert.year}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <div ref={achieveRef} className="mt-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={achieveInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl sm:text-3xl font-bold font-heading tracking-tight">
              Key{' '}
              <span className="gradient-text">Highlights</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {achievementsData.map((item, i) => {
              const AIcon = achievementIcons[i % achievementIcons.length];
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={achieveInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center shrink-0">
                    <AIcon size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{item.label}</h3>
                    {item.value && (
                      <p className="text-sm text-primary font-medium mt-0.5">{item.value}</p>
                    )}
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
