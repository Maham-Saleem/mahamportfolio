import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './GithubIcon';
import { projectsData } from '../data';

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.05 });

  return (
    <section id="projects" className="py-24 md:py-32 relative">
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
            Selected{' '}
            <span className="gradient-text">work</span>
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            A collection of real-world applications I've built from the ground up.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mt-16">
          {projectsData.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl bg-card border border-border overflow-hidden hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className={`h-48 bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                <div className="w-full h-full flex items-center justify-center bg-white/3 dark:bg-black/10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center shadow-lg opacity-60`}>
                    <span className="text-white font-bold text-lg">
                      {project.title.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 lg:p-7">
                <h3 className="text-lg font-bold font-heading group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary leading-relaxed line-clamp-3">
                  {project.description}
                </p>

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

                <div className="flex items-center gap-4 mt-5 pt-4 border-t border-border">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-text-secondary hover:text-primary transition-colors"
                  >
                    <GithubIcon size={14} />
                    Source
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
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
