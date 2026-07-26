import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, Download } from 'lucide-react';
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

  const contactItems = [
    { icon: Mail, label: 'Email', value: socialLinks.email, href: `mailto:${socialLinks.email}`, btnLabel: 'Email Me' },
    { icon: GithubIcon, label: 'GitHub', value: 'Maham-Saleem', href: socialLinks.github, btnLabel: 'GitHub' },
    { icon: LinkedinIcon, label: 'LinkedIn', value: 'mahamsaleem0406', href: socialLinks.linkedin, btnLabel: 'LinkedIn' },
    { icon: Phone, label: 'Phone', value: socialLinks.phone, href: `tel:${socialLinks.phone.replace(/\s/g, '')}`, btnLabel: 'Call Me' },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/4 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/4 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Contact</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            Get in{' '}
            <span className="gradient-text">touch</span>
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Have a project in mind or just want to connect? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center group-hover:gradient-bg group-hover:text-white transition-all duration-300 shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-text-secondary">{item.label}</p>
                    <p className="text-sm font-medium truncate">{item.value}</p>
                  </div>
                  <span className="text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                    {item.btnLabel} &rarr;
                  </span>
                </a>
              );
            })}

            <a
              href="#"
              className="mt-2 flex items-center justify-center gap-2 px-6 py-3.5 gradient-bg text-white rounded-xl font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/12 outline-none transition-all text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/12 outline-none transition-all text-sm"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/12 outline-none transition-all text-sm"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-card border border-border focus:border-primary focus:ring-2 focus:ring-primary/12 outline-none transition-all text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 gradient-bg text-white rounded-xl font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300"
              >
                {submitted ? (
                  'Message sent!'
                ) : (
                  <>
                    <Send size={16} />
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
