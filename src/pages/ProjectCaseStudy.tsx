import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, CheckCircle2 } from 'lucide-react';
import { GithubIcon } from '../components/GithubIcon';
import { projectsData, featuredProjects } from '../data';

const caseStudyIcons = {
  'maham-clothing-store': 'MCS',
  'parima': 'PRM',
  'brew-and-bean': 'B&B',
  'smars-perfume-store': 'SPS',
};

export default function ProjectCaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const project = projectsData.find((p) => p.slug === slug);

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

  const related = featuredProjects.filter((p) => p.slug !== project.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-bg">
      <div className={`h-64 sm:h-80 md:h-96 bg-gradient-to-br ${project.gradient} relative flex items-center justify-center`}>
        <div className="absolute inset-0 bg-black/10" />
        <div className="relative text-center">
          <div className="w-20 h-20 mx-auto rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center mb-4">
            <span className="text-white font-bold text-2xl">
              {(caseStudyIcons as Record<string, string>)[project.slug] || project.title.split(' ').map(w => w[0]).join('').slice(0, 2)}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading text-white">{project.title}</h1>
          <p className="text-white/70 mt-2 text-sm sm:text-base">{project.category}</p>
        </div>
        <Link
          to="/"
          className="absolute top-6 left-6 inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium hover:bg-white/20 transition-all border border-white/15"
        >
          <ArrowLeft size={14} />
          Back to Portfolio
        </Link>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold font-heading mb-6">Project Overview</h2>
          <p className="text-text-secondary leading-relaxed">{project.description}</p>
        </motion.div>

        {project.features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold font-heading mb-6">Key Features</h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.features.map((f) => (
                <div key={f} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                  <CheckCircle2 size={16} className="text-primary shrink-0" />
                  <span className="text-sm text-text-secondary">{f}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-bold font-heading mb-6">Technology Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 text-sm font-medium rounded-xl bg-card border border-border hover:border-primary/20 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
          {project.techDetail && (
            <p className="mt-4 text-sm text-text-secondary leading-relaxed p-4 rounded-xl bg-card border border-border">
              {project.techDetail}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 flex flex-wrap gap-4"
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <GithubIcon size={18} />
            View on GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium border-2 border-border text-text-secondary hover:border-primary/30 hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
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
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-20"
          >
            <h2 className="text-2xl font-bold font-heading mb-6">Related Projects</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  to={`/project/${rp.slug}`}
                  className="p-5 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className={`h-32 rounded-xl bg-gradient-to-br ${rp.gradient} flex items-center justify-center mb-4`}>
                    <span className="text-white/70 font-bold text-lg">{rp.title.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase()}</span>
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
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
