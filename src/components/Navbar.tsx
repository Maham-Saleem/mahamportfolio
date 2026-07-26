import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { navLinks } from '../data';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('#hero');
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navLinks.map((l) => document.querySelector(l.href) as HTMLElement | null);
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i];
        if (el && el.offsetTop <= scrollPos) {
          setActive(navLinks[i].href);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  const scrollTo = (href: string) => {
    setIsOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const progress = scrolled
    ? Math.min(
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
          100,
        100
      )
    : 0;

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-[60] h-[3px]">
        <div
          className="h-full gradient-bg transition-all duration-150"
          style={{ width: `${progress}%` }}
        />
      </div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <button
              onClick={() => scrollTo('#hero')}
              className="text-xl font-bold font-heading tracking-tight"
            >
              <span className="gradient-text">M</span>
              <span className="text-text">aham</span>
              <span className="gradient-text">.</span>
            </button>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    active === link.href
                      ? 'text-primary bg-primary/8'
                      : 'text-text-secondary hover:text-text hover:bg-black/3 dark:hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="w-px h-5 bg-border mx-2" />
              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-lg text-text-secondary hover:text-text hover:bg-black/3 dark:hover:bg-white/5 transition-all duration-200"
                aria-label="Toggle dark mode"
              >
                {dark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="ml-2 px-5 py-2 gradient-bg text-white rounded-full text-sm font-medium shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                Hire Me
              </button>
            </div>

            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-lg text-text-secondary hover:text-text transition-all"
                aria-label="Toggle dark mode"
              >
                {dark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-text-secondary hover:text-text transition-all"
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden glass border-t border-border animate-fadeIn">
            <div className="px-4 py-3 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                    active === link.href
                      ? 'text-primary bg-primary/8'
                      : 'text-text-secondary hover:text-text'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full mt-2 px-5 py-2.5 gradient-bg text-white rounded-xl text-sm font-medium"
              >
                Hire Me
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
