import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Users, Cloud, Briefcase, Code2, Layout, X } from 'lucide-react';
import { experienceData, featuredCertifications, certificationsData } from '../data';

const icons = [GraduationCap, Award, Users, Cloud, Briefcase, Code2, Layout];

const certIcons: Record<string, React.ElementType> = {
  'Capital University of Science and Technology': GraduationCap,
  'AWS Student Builder Group (CUST)': Cloud,
  'Forage': Briefcase,
  'CodeAlpha': Code2,
  'CAUSE Society (CUST)': Users,
  'PGGA': Award,
};

function CertCard({ cert }: { cert: typeof featuredCertifications[0] }) {
  const Icon = certIcons[cert.issuer] || Award;
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/15 transition-all duration-300 group">
      <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:gradient-bg group-hover:text-white transition-all duration-300">
        <Icon size={14} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold leading-snug">{cert.title}</p>
        <p className="text-[11px] text-text-secondary mt-0.5">{cert.issuer}</p>
      </div>
    </div>
  );
}

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [certModalOpen, setCertModalOpen] = useState(false);

  return (
    <>
      <section id="experience" className="py-16 md:py-24 relative">
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
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Experience</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
              Milestones &{' '}
              <span className="gradient-text">Growth</span>
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Key moments that shaped my journey as a developer.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-14 mt-14">
            <div className="lg:col-span-3 space-y-5">
              {experienceData.map((item, i) => {
                const Icon = icons[i] || GraduationCap;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.35, delay: i * 0.05 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-primary/5 border-2 border-primary/20 flex items-center justify-center">
                      <Icon size={14} className="text-primary" />
                    </div>
                    <div className="border-l-2 border-primary/10 pl-5 pb-1">
                      <span className="inline-block px-2 py-0.5 rounded-md text-[10px] font-semibold bg-primary/10 text-primary mb-1">
                        {item.period}
                      </span>
                      <h3 className="text-sm font-bold font-heading">{item.title}</h3>
                      <p className="text-xs text-text-secondary mt-0.5">{item.organization}</p>
                      <p className="text-xs text-text-secondary/70 mt-1 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-sm font-bold font-heading">Certifications</h3>
                  <button
                    onClick={() => setCertModalOpen(true)}
                    className="text-xs font-medium text-primary hover:text-secondary transition-colors"
                  >
                    View all ({certificationsData.length})
                  </button>
                </div>
                <div className="space-y-2.5">
                  {featuredCertifications.map((cert, i) => (
                    <CertCard key={`${cert.title}-${i}`} cert={cert} />
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {certModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-8"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setCertModalOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-lg max-h-[70vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between p-4 border-b border-border bg-card">
                <div>
                  <h3 className="text-base font-bold font-heading">All Certifications</h3>
                  <p className="text-xs text-text-secondary mt-0.5">{certificationsData.length} credentials</p>
                </div>
                <button
                  onClick={() => setCertModalOpen(false)}
                  className="w-8 h-8 rounded-xl bg-primary/5 text-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
              <div className="p-4 space-y-2.5">
                {certificationsData.map((cert, i) => {
                  const Icon = certIcons[cert.issuer] || Award;
                  return (
                    <div
                      key={`${cert.title}-${i}`}
                      className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border hover:border-primary/15 transition-colors"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0">
                        <Icon size={14} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-xs font-semibold leading-snug">{cert.title}</p>
                        <p className="text-[11px] text-text-secondary mt-0.5">{cert.issuer}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
