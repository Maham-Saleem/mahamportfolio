import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Users, X, ArrowUpRight, BookOpen } from 'lucide-react';
import {
  experienceData,
  academicCertifications,
  professionalCertifications,
  leadershipCertifications,
  certificationsData,
} from '../data';

const allCertsByCategory = [
  { key: 'academic', label: 'Academic', icon: GraduationCap, items: academicCertifications },
  { key: 'professional', label: 'Professional', icon: Award, items: professionalCertifications },
  { key: 'leadership', label: 'Leadership & Community', icon: Users, items: leadershipCertifications },
];

const featuredCertsByCategory = allCertsByCategory.map((c) => ({
  ...c,
  items: c.items.slice(0, 2),
}));

function JourneyCard({ item, index }: { item: typeof experienceData[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="relative pl-6 border-l-2 border-primary/10 last:pb-0 pb-5"
    >
      <div className="absolute left-0 top-0.5 w-2.5 h-2.5 rounded-full bg-primary -translate-x-[5.5px]" />
      <h3 className="text-sm font-bold font-heading">{item.title}</h3>
      <p className="text-xs text-text-secondary font-medium mt-0.5">{item.organization}</p>
      <p className="text-xs text-text-secondary/70 mt-1 leading-relaxed">{item.description}</p>
    </motion.div>
  );
}

function CertMiniCard({ cert }: { cert: typeof certificationsData[0] }) {
  const iconMap = { academic: GraduationCap, professional: Award, leadership: Users };
  const Icon = iconMap[cert.category];
  return (
    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-card border border-border hover:border-primary/15 transition-all duration-300 group">
      <div className="w-7 h-7 rounded-lg bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:gradient-bg group-hover:text-white transition-all duration-300">
        <Icon size={13} />
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
              Journey &{' '}
              <span className="gradient-text">Achievements</span>
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              My path in software engineering and the milestones along the way.
            </p>
          </motion.div>

          <div className="mt-14 max-w-3xl">
            <h3 className="text-sm font-bold font-heading tracking-wide mb-6 flex items-center gap-2">
              <BookOpen size={14} className="text-primary" />
              Journey
            </h3>
            <div className="space-y-0">
              {experienceData.map((item, i) => (
                <JourneyCard key={i} item={item} index={i} />
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h3 className="text-sm font-bold font-heading tracking-wide mb-6 flex items-center gap-2">
              <Award size={14} className="text-primary" />
              Achievements & Certifications
            </h3>
            <div className="grid md:grid-cols-3 gap-5">
              {featuredCertsByCategory.map((cat) => (
                <div key={cat.key}>
                  <div className="flex items-center gap-2 mb-3">
                    <cat.icon size={12} className="text-primary" />
                    <span className="text-xs font-semibold text-text-secondary tracking-wide">{cat.label}</span>
                  </div>
                  <div className="space-y-2">
                    {cat.items.map((cert, i) => (
                      <CertMiniCard key={`${cert.title}-${i}`} cert={cert} />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => setCertModalOpen(true)}
              className="mt-5 inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-border text-xs font-medium text-text-secondary hover:text-primary hover:border-primary/20 transition-all duration-300"
            >
              View All Certificates ({certificationsData.length})
              <ArrowUpRight size={12} />
            </button>
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
                  <h3 className="text-base font-bold font-heading">All Certificates</h3>
                  <p className="text-xs text-text-secondary mt-0.5">{certificationsData.length} credentials</p>
                </div>
                <button
                  onClick={() => setCertModalOpen(false)}
                  className="w-8 h-8 rounded-xl bg-primary/5 text-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
              <div className="p-4 space-y-5">
                {allCertsByCategory.map((cat) => (
                  <div key={cat.key}>
                    <div className="flex items-center gap-2 mb-2.5">
                      <cat.icon size={13} className="text-primary" />
                      <span className="text-xs font-bold text-primary tracking-wide">{cat.label}</span>
                      <span className="text-[11px] text-text-secondary ml-auto">{cat.items.length} items</span>
                    </div>
                    <div className="space-y-2">
                      {cat.items.map((cert, i) => (
                        <CertMiniCard key={`${cert.title}-${i}`} cert={cert} />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
