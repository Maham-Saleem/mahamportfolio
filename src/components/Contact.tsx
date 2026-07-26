import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MapPin, Sparkles, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './GithubIcon';
import { socialLinks } from '../data';

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
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
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading mb-4">
            Let's{' '}
            <span className="gradient-text">Connect</span>
          </h2>
          <div className="w-20 h-1 gradient-bg rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold font-heading mb-6">Let's work together</h3>
            <p className="text-text-secondary mb-8">
              Have a project in mind or just want to say hello? I'd love to hear from you!
            </p>

            <div className="space-y-5">
              <a
                href={`mailto:${socialLinks.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover:gradient-bg group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Email</p>
                  <p className="font-medium">{socialLinks.email}</p>
                </div>
              </a>

              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover:gradient-bg group-hover:text-white transition-all duration-300">
                  <LinkedinIcon size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">LinkedIn</p>
                  <p className="font-medium">Maham Saleem</p>
                </div>
              </a>

              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover:gradient-bg group-hover:text-white transition-all duration-300">
                  <GithubIcon size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">GitHub</p>
                  <p className="font-medium">Maham-Saleem</p>
                </div>
              </a>

              <a
                href="#"
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-md transition-all duration-300 group"
              >
                <div className="p-3 rounded-xl bg-primary/5 text-primary group-hover:gradient-bg group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-text-secondary">Location</p>
                  <p className="font-medium">Pakistan</p>
                </div>
              </a>
            </div>

            <a
              href="#"
              className="mt-6 inline-flex items-center gap-2 px-6 py-3 gradient-bg text-white rounded-full font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
            >
              <Download size={18} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Your message..."
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 gradient-bg text-white rounded-xl font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300"
              >
                {submitted ? (
                  'Message Sent!'
                ) : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
