import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { projectsData } from '../data';

function ProjectCard({ project, index, inView }: { project: typeof projectsData[0]; index: number; inView: boolean }) {
  const isReversed = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className={`grid lg:grid-cols-2 gap-8 lg:gap-14 items-center ${index > 0 ? 'mt-24 lg:mt-32' : ''}`}
    >
      <div className={`${isReversed ? 'lg:order-2' : ''}`}>
        <div className="rounded-2xl overflow-hidden border border-border/60 shadow-lg shadow-primary/5 bg-card">
          <div className="flex items-center gap-1.5 px-4 py-2.5 bg-card border-b border-border/40">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
          </div>
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-auto block" />
          ) : (
            <div className={`w-full aspect-video bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
              <span className="text-white/30 text-4xl font-bold">{project.title.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase()}</span>
            </div>
          )}
        </div>
      </div>

      <div className={isReversed ? 'lg:order-1' : ''}>
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">{project.category}</span>
        <h3 className="mt-2 text-2xl sm:text-3xl font-bold font-heading tracking-tight leading-[1.15]">
          {project.title}
          <ArrowUpRight size={20} className="inline ml-1 text-primary/60" />
        </h3>
        <p className="mt-4 text-sm sm:text-base text-text-secondary leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-[11px] font-medium rounded-full bg-primary/5 text-primary border border-primary/10"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary/70">Key Features</p>
          <div className="grid sm:grid-cols-2 gap-1.5">
            {project.features.map((f) => (
              <div key={f} className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary">
                <CheckCircle2 size={13} className="text-primary shrink-0" />
                {f}
              </div>
            ))}
          </div>
        </div>

        {project.challenges.length > 0 && (
          <div className="mt-5 p-4 rounded-xl bg-primary/3 border border-primary/8">
            <p className="text-xs font-semibold uppercase tracking-wide text-text-secondary/70 mb-2">Challenges Solved</p>
            <ul className="space-y-1.5">
              {project.challenges.map((c) => (
                <li key={c} className="text-xs sm:text-sm text-text-secondary leading-relaxed flex items-start gap-2">
                  <span className="w-1 h-1 rounded-full bg-primary mt-1.5 shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 gradient-bg text-white rounded-full text-sm font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <GithubIcon size={16} />
            View Code
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium border-2 border-border text-text-secondary hover:border-primary/30 hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Projects</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            Featured{' '}
            <span className="gradient-text">work</span>
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            A curated selection of my best projects — from concept to deployment.
          </p>
        </motion.div>

        <div className="mt-16">
          {projectsData.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
