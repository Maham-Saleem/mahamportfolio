import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Cloud, Briefcase, Code2, BookOpen, FlaskConical, Users, GraduationCap, X, ExternalLink } from 'lucide-react';
import { featuredCertifications, certificationsData } from '../data';

const categoryIcons: Record<string, React.ElementType> = {
  'PGGA': Users,
  'AWS Student Builder Group (CUST)': Cloud,
  'Capital University of Science and Technology': GraduationCap,
  'CAUSE Society (CUST)': Users,
  'Forage': Briefcase,
  'CodeAlpha': Code2,
  'Coursera': BookOpen,
  'Punjab College': FlaskConical,
};

function CertCard({ cert, index, inView }: { cert: typeof featuredCertifications[0]; index: number; inView: boolean }) {
  const Icon = categoryIcons[cert.issuer] || Award;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.45, delay: 0.08 + index * 0.07 }}
      className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/25 hover:shadow-xl hover:-translate-y-1 transition-all duration-400"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0 group-hover:gradient-bg group-hover:text-white transition-all duration-300">
          <Icon size={20} />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-sm font-bold font-heading leading-snug group-hover:text-primary transition-colors">{cert.title}</h3>
          <p className="text-xs text-text-secondary mt-1.5">{cert.issuer}</p>
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-border flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="text-[11px] text-text-secondary/60">Credential</span>
        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-primary">
          View <ExternalLink size={10} />
        </span>
      </div>
    </motion.div>
  );
}

function ModalCertCard({ cert, index }: { cert: typeof certificationsData[0]; index: number }) {
  const Icon = categoryIcons[cert.issuer] || Award;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.03 }}
      className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
    >
      <div className="w-10 h-10 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
        <Icon size={18} />
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="text-sm font-semibold leading-snug">{cert.title}</h4>
        <p className="text-xs text-text-secondary mt-1">{cert.issuer}</p>
      </div>
    </motion.div>
  );
}

export default function Certifications() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [modalOpen, setModalOpen] = useState(false);

  const remainingCerts = certificationsData.filter((c) => !c.featured);

  return (
    <>
      <section id="certifications" className="py-16 md:py-24 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Certifications</span>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
              Certificates &{' '}
              <span className="gradient-text">Credentials</span>
            </h2>
            <p className="mt-4 text-text-secondary leading-relaxed">
              A selection of certifications, achievements, and credentials that reflect my continuous learning and professional growth.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {featuredCertifications.map((cert, i) => (
              <CertCard key={`${cert.title}-${i}`} cert={cert} index={i} inView={inView} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-full font-medium border-2 border-border text-text-secondary hover:border-primary/30 hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              View All Certificates
              <span className="text-xs text-text-secondary/60">({remainingCerts.length + featuredCertifications.length})</span>
            </button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 pb-8"
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setModalOpen(false)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-2xl max-h-[75vh] overflow-y-auto rounded-2xl bg-card border border-border shadow-2xl"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between p-5 border-b border-border bg-card">
                <div>
                  <h3 className="text-lg font-bold font-heading">All Certificates</h3>
                  <p className="text-xs text-text-secondary mt-0.5">{certificationsData.length} credentials</p>
                </div>
                <button
                  onClick={() => setModalOpen(false)}
                  className="w-9 h-9 rounded-xl bg-primary/5 text-primary flex items-center justify-center hover:bg-primary/10 transition-colors"
                >
                  <X size={16} />
                </button>
              </div>
              <div className="p-5 space-y-3">
                {certificationsData.map((cert, i) => (
                  <ModalCertCard key={`${cert.title}-${i}`} cert={cert} index={i} />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
