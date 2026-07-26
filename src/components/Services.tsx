import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Monitor, Building2, User, Layout, ShoppingCart, Paintbrush, RefreshCw } from 'lucide-react';
import { servicesList } from '../data';

const serviceIcons = [Monitor, Building2, User, Layout, ShoppingCart, Paintbrush, RefreshCw];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="services" className="py-16 md:py-24 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-primary">Services</span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight leading-[1.1]">
            What I{' '}
            <span className="gradient-text">offer</span>
          </h2>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Frontend development services focused on creating modern, responsive, and user-friendly web experiences.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
          {servicesList.map((service, i) => {
            const Icon = serviceIcons[i] || Monitor;
            return (
              <motion.div
                key={service}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.06 }}
                className="group p-5 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon size={18} className="text-white" />
                </div>
                <h3 className="text-sm font-semibold">{service}</h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
