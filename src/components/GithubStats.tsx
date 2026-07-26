import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Sparkles, Star, GitFork, Code2, Users } from 'lucide-react';

const username = 'Maham-Saleem';

export default function GithubStats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="github" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 text-primary rounded-full text-sm font-medium mb-4">
            <Sparkles size={16} />
            GitHub Activity
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4">
            Open Source{' '}
            <span className="gradient-text">Contributions</span>
          </h2>
          <div className="w-20 h-1 gradient-bg rounded-full mx-auto" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-3xl">
            {[
              { icon: Code2, label: 'Repositories', value: '12+' },
              { icon: Star, label: 'Stars Earned', value: '8+' },
              { icon: GitFork, label: 'Contributions', value: '100+' },
              { icon: Users, label: 'Collaborations', value: '10+' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <stat.icon size={24} className="text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold font-heading gradient-text">{stat.value}</div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <div className="rounded-2xl bg-card border border-border p-4 hover:shadow-lg transition-all duration-300">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&text_color=6B7280&title_color=6C63FF&icon_color=8B5CF6`}
                alt="GitHub Stats"
                className="w-full max-w-md"
              />
            </div>
            <div className="rounded-2xl bg-card border border-border p-4 hover:shadow-lg transition-all duration-300">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&text_color=6B7280&title_color=6C63FF`}
                alt="Top Languages"
                className="w-full max-w-md"
              />
            </div>
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            View Full GitHub Profile
            <Code2 size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
