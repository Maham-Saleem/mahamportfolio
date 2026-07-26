import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, ArrowUpRight, ChevronRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { GithubIcon } from './GithubIcon';
import { featuredProjects, additionalProjects } from '../data';

function ProjectPlaceholder({ title, gradient }: { title: string; gradient: string }) {
  return (
    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-center justify-center`}>
      <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-5 py-3 text-center border border-white/15">
        <span className="text-white/80 text-sm font-medium block leading-tight">
          {title.split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase()}
        </span>
        <span className="text-white/40 text-[10px] uppercase tracking-wider mt-1 block">Preview</span>
      </div>
    </div>
  );
}

function FeaturedCard({ project, index, inView }: { project: typeof featuredProjects[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
    >
      <Link to={`/project/${project.slug}`} className="block">
        <div className="relative h-56 sm:h-64 overflow-hidden">
          <ProjectPlaceholder title={project.title} gradient={project.gradient} />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-[11px] font-medium text-white border border-white/15">
              {project.category}
            </span>
          </div>
        </div>
      </Link>

      <div className="p-6 lg:p-7">
        <Link to={`/project/${project.slug}`} className="group/title">
          <h3 className="text-xl font-bold font-heading group-hover/title:text-primary transition-colors flex items-center gap-2">
            {project.title}
            <ArrowUpRight size={16} className="opacity-0 -translate-y-1 group-hover/title:opacity-100 group-hover/title:translate-y-0 transition-all duration-300" />
          </h3>
        </Link>

        <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 space-y-1.5">
          {project.features.slice(0, 4).map((f) => (
            <div key={f} className="flex items-center gap-2 text-xs text-text-secondary/80">
              <CheckCircle2 size={12} className="text-primary shrink-0" />
              {f}
            </div>
          ))}
          {project.features.length > 4 && (
            <div className="text-xs text-primary font-medium ml-5">+{project.features.length - 4} more features</div>
          )}
        </div>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-medium rounded-md bg-primary/5 text-primary border border-primary/8"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-5 pt-4 border-t border-border">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-primary transition-colors"
          >
            <GithubIcon size={14} />
            GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-primary hover:text-secondary transition-colors"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          )}
          <Link
            to={`/project/${project.slug}`}
            className="ml-auto inline-flex items-center gap-1 text-xs font-medium text-text-secondary hover:text-primary transition-colors"
          >
            View Case Study
            <ChevronRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

function AdditionalCard({ project, index, inView }: { project: typeof additionalProjects[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.1 + index * 0.06 }}
      className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
    >
      <div className={`h-28 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
        <div className="bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/15">
          <span className="text-white/70 text-xs font-medium">{project.title.split(' ').slice(0, 2).join(' ')}</span>
        </div>
      </div>

      <div className="p-4">
        <h4 className="text-sm font-bold font-heading">{project.title}</h4>
        <p className="mt-1 text-xs text-text-secondary leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1 mt-3">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-0.5 text-[10px] font-medium rounded-md bg-primary/5 text-primary border border-primary/8">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 mt-3 pt-3 border-t border-border">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] font-medium text-text-secondary hover:text-primary transition-colors"
          >
            <GithubIcon size={12} />
            GitHub
          </a>
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
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Projects</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            Featured{' '}
            <span className="gradient-text">work</span>
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed max-w-2xl">
            A curated selection of web development projects I've built from the ground up.
          </p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 gap-6">
          {featuredProjects.map((project, i) => (
            <FeaturedCard key={project.slug} project={project} index={i} inView={inView} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16"
        >
          <h3 className="text-xl font-bold font-heading mb-2">Additional Projects</h3>
          <p className="text-sm text-text-secondary mb-8">
            Smaller-scale applications and academic projects.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {additionalProjects.map((project, i) => (
              <AdditionalCard key={project.slug} project={project} index={i} inView={inView} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
