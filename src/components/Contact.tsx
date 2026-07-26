import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, Phone, Download, CheckCircle, AlertCircle } from 'lucide-react';
import { useForm } from '@formspree/react';
import { GithubIcon, LinkedinIcon } from './GithubIcon';
import { socialLinks } from '../data';

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [state, handleSubmit] = useForm('xzdnyboz');
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (state.succeeded) {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setShowSuccess(true);
      const timer = setTimeout(() => setShowSuccess(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [state.succeeded]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    await handleSubmit(e);
  };

  const contactItems = [
    { icon: Mail, label: 'Email', value: socialLinks.email, href: `mailto:${socialLinks.email}`, btnLabel: 'Email Me' },
    { icon: GithubIcon, label: 'GitHub', value: 'Maham-Saleem', href: socialLinks.github, btnLabel: 'GitHub' },
    { icon: LinkedinIcon, label: 'LinkedIn', value: 'mahamsaleem0406', href: socialLinks.linkedin, btnLabel: 'LinkedIn' },
    { icon: Phone, label: 'Phone', value: socialLinks.phone, href: `tel:${socialLinks.phone.replace(/\s/g, '')}`, btnLabel: 'Call Me' },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative">
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
              href="/Maham_Saleem_CV.pdf"
              download
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
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className={`w-full px-4 py-3 rounded-xl bg-card border focus:ring-2 outline-none transition-all text-sm ${
                      errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red/12' : 'border-border focus:border-primary focus:ring-primary/12'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-xl bg-card border focus:ring-2 outline-none transition-all text-sm ${
                      errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red/12' : 'border-border focus:border-primary focus:ring-primary/12'
                    }`}
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-1.5">
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className={`w-full px-4 py-3 rounded-xl bg-card border focus:ring-2 outline-none transition-all text-sm ${
                    errors.subject ? 'border-red-400 focus:border-red-400 focus:ring-red/12' : 'border-border focus:border-primary focus:ring-primary/12'
                  }`}
                />
                {errors.subject && <p className="mt-1 text-xs text-red-400">{errors.subject}</p>}
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell me about your project..."
                  className={`w-full px-4 py-3 rounded-xl bg-card border focus:ring-2 outline-none transition-all text-sm resize-none ${
                    errors.message ? 'border-red-400 focus:border-red-400 focus:ring-red/12' : 'border-border focus:border-primary focus:ring-primary/12'
                  }`}
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              {showSuccess && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 text-green-700 dark:text-green-300 text-sm">
                  <CheckCircle size={16} />
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {state.errors && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm">
                  <AlertCircle size={16} />
                  Something went wrong. Please try again or email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={state.submitting}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 gradient-bg text-white rounded-xl font-medium shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
              >
                {state.submitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : showSuccess ? (
                  <>
                    <CheckCircle size={16} />
                    Message sent!
                  </>
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
