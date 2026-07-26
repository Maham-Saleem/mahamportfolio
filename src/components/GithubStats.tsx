import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GithubIcon } from './GithubIcon';

const username = 'Maham-Saleem';

export default function GithubStats() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="github" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">GitHub</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            Open source{' '}
            <span className="gradient-text">contributions</span>
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Active on GitHub building projects and contributing to the developer community.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-16 flex flex-col items-center gap-8"
        >
          <div className="flex flex-col sm:flex-row gap-6 w-full justify-center">
            <div className="flex-1 max-w-md rounded-2xl bg-card border border-border p-5 hover:shadow-lg transition-all duration-300">
              <img
                src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=transparent&hide_border=true&text_color=6B7280&title_color=6C63FF&icon_color=8B5CF6`}
                alt="GitHub Stats"
                className="w-full"
              />
            </div>
            <div className="flex-1 max-w-md rounded-2xl bg-card border border-border p-5 hover:shadow-lg transition-all duration-300">
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=transparent&hide_border=true&text_color=6B7280&title_color=6C63FF`}
                alt="Top Languages"
                className="w-full"
              />
            </div>
          </div>

          <div className="w-full max-w-3xl rounded-2xl bg-card border border-border p-5 hover:shadow-lg transition-all duration-300">
            <img
              src={`https://ghchart.rshah.org/${username}`}
              alt={`${username}'s GitHub contribution graph`}
              className="w-full"
              style={{ filter: 'saturate(1.2)' }}
            />
          </div>

          <a
            href={`https://github.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
          >
            <GithubIcon size={18} />
            View GitHub Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}
