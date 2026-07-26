import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Award, Users, X, ArrowUpRight } from 'lucide-react';
import {
  academicCertifications,
  professionalCertifications,
  leadershipCertifications,
  certificationsData,
} from '../data';

const allCats = [
  { key: 'academic', label: 'Academic', icon: GraduationCap, items: academicCertifications },
  { key: 'professional', label: 'Professional', icon: Award, items: professionalCertifications },
  { key: 'leadership', label: 'Leadership', icon: Users, items: leadershipCertifications },
];

const featuredCats = allCats.map((c) => ({ ...c, items: c.items.slice(0, 2) }));

function CertCard({ cert }: { cert: typeof certificationsData[0] }) {
  const icons = { academic: GraduationCap, professional: Award, leadership: Users };
  const Icon = icons[cert.category];
  return (
    <div className="flex items-center gap-3.5 p-4 rounded-xl bg-card border border-border hover:border-primary/15 transition-all duration-300 group">
      <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:gradient-bg group-hover:text-white transition-all duration-300">
        <Icon size={16} />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold leading-snug">{cert.title}</p>
        <p className="text-xs text-text-secondary mt-0.5">{cert.issuer}</p>
      </div>
    </div>
  );
}

export default function Achievements() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [open, setOpen] = useState(false);

  return (
    <>
      <section id="achievements" className="py-20 md:py-28 relative">
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
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Achievements</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
              Certifications &{' '}
              <span className="gradient-text">Recognition</span>
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              Academic excellence, professional credentials, and leadership milestones.
            </p>
          </motion.div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {featuredCats.map((cat) => (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-xl bg-primary/5 text-primary flex items-center justify-center">
                    <cat.icon size={15} />
                  </div>
                  <span className="text-sm font-bold font-heading">{cat.label}</span>
                </div>
                <div className="space-y-3">
                  {cat.items.map((cert, i) => (
                    <CertCard key={`${cert.title}-${i}`} cert={cert} />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border border-border text-sm font-medium text-text-secondary hover:text-primary hover:border-primary/20 transition-all duration-300"
            >
              View All Certificates ({certificationsData.length})
              <ArrowUpRight size={13} />
            </button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-8"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />
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
                  onClick={() => setOpen(false)}
                  className="w-8 h-8 rounded-xl bg-primary/5 text-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
              <div className="p-4 space-y-5">
                {allCats.map((cat) => (
                  <div key={cat.key}>
                    <div className="flex items-center gap-2 mb-3">
                      <cat.icon size={13} className="text-primary" />
                      <span className="text-xs font-bold text-primary tracking-wide">{cat.label}</span>
                      <span className="text-[11px] text-text-secondary ml-auto">{cat.items.length} items</span>
                    </div>
                    <div className="space-y-3">
                      {cat.items.map((cert, i) => (
                        <CertCard key={`${cert.title}-${i}`} cert={cert} />
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
