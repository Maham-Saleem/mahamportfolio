import { Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './GithubIcon';
import { socialLinks } from '../data';

export default function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-text-secondary text-sm flex items-center gap-1">
            &copy; {new Date().getFullYear()} Maham Saleem. Made with
            <Heart size={14} className="text-red-500 fill-red-500" />
          </p>

          <div className="flex items-center gap-3">
            <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-primary/5 transition-all">
              <GithubIcon size={18} />
            </a>
            <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-primary/5 transition-all">
              <LinkedinIcon size={18} />
            </a>
            <a href={`mailto:${socialLinks.email}`} className="p-2 rounded-lg text-text-secondary hover:text-primary hover:bg-primary/5 transition-all">
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
