import { GithubIcon, LinkedinIcon } from './GithubIcon';
import { socialLinks } from '../data';

export default function Footer() {
  return (
    <footer className="py-10 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="font-bold font-heading text-lg">
              <span className="gradient-text">Maham Saleem</span>
            </p>
            <p className="text-sm text-text-secondary">Frontend Web Developer</p>
            <p className="text-xs text-text-secondary/60 mt-1">
              &copy; {new Date().getFullYear()} Maham Saleem. Built with React & Tailwind CSS.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl text-text-secondary hover:text-primary hover:bg-primary/5 transition-all" aria-label="GitHub">
              <GithubIcon size={18} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl text-text-secondary hover:text-primary hover:bg-primary/5 transition-all" aria-label="LinkedIn">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${socialLinks.email}`} className="p-2.5 rounded-xl text-text-secondary hover:text-primary hover:bg-primary/5 transition-all" aria-label="Email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
