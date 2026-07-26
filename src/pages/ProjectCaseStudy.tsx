import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../components/GithubIcon';
import { projectsData } from '../data';

export default function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);
  const related = projectsData.filter((p) => p.slug !== slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-bg">
        <div className="text-center">
          <h1 className="text-2xl font-bold font-heading">Project not found</h1>
          <Link to="/" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeft size={16} />
            Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg">
      <div className={`h-56 sm:h-72 md:h-80 relative ${project.image ? '' : `bg-gradient-to-br ${project.gradient}`}`}>
        {project.image ? (
          <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
        ) : null}
        <div className="absolute inset-0 bg-black/10" />
        <Link
          to="/"
          className="absolute top-5 left-5 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all border border-white/15"
        >
          <ArrowLeft size={14} />
          Back to Portfolio
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">{project.category}</span>
          <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold font-heading tracking-tight">{project.title}</h1>
          <p className="mt-4 text-text-secondary leading-relaxed">{project.description}</p>
        </motion.div>

        {project.challenges.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="mt-10"
          >
            <h2 className="text-lg font-bold font-heading mb-4">Challenges Solved</h2>
            <div className="space-y-3">
              {project.challenges.map((c) => (
                <div key={c} className="p-4 rounded-xl bg-card border border-border">
                  <p className="text-sm text-text-secondary leading-relaxed">{c}</p>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {project.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-10"
          >
            <h2 className="text-lg font-bold font-heading mb-4">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-2.5">
              {project.features.map((f) => (
                <div key={f} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                  <CheckCircle2 size={15} className="text-primary shrink-0" />
                  <span className="text-sm text-text-secondary">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-10"
        >
          <h2 className="text-lg font-bold font-heading mb-4">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1.5 text-sm font-medium rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 flex flex-wrap gap-3"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-full text-sm font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <GithubIcon size={18} />
            View on GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border-2 border-border text-text-secondary hover:border-primary/30 hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
            >
              <ExternalLink size={18} />
              Live Demo
            </a>
          )}
        </motion.div>

        {related.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="mt-16"
          >
            <h2 className="text-lg font-bold font-heading mb-4">Other Projects</h2>
            <div className="grid sm:grid-cols-3 gap-5">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/project/${rp.slug}`}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`h-32 rounded-xl mb-4 relative overflow-hidden ${rp.image ? '' : `bg-gradient-to-br ${rp.gradient} flex items-center justify-center`}`}>
                    {rp.image ? (
                      <img src={rp.image} alt={rp.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-white/70 font-bold text-lg">{rp.title.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}</span>
                    )}
                  </div>
                  <h3 className="font-bold font-heading group-hover:text-primary transition-colors">{rp.title}</h3>
                  <p className="text-xs text-text-secondary mt-1 line-clamp-2">{rp.description}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-full text-sm font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
