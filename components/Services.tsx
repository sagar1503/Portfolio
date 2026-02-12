import React from 'react';
import { motion } from 'framer-motion';
import { LayersIcon, WorkflowIcon, LayoutTemplateIcon, ZapIcon } from './Icons';

const Services: React.FC = () => {
  const services = [
    {
      icon: <LayersIcon className="w-6 h-6 text-primary-600" />,
      title: "SharePoint & SPFx Development",
      description: "Custom web parts and extensions built with React and TypeScript to extend SharePoint capabilities beyond out-of-the-box limits."
    },
    {
      icon: <WorkflowIcon className="w-6 h-6 text-primary-600" />,
      title: "Business Workflows",
      description: "Robust approval systems and request portals using Power Automate or custom client-side logic for complex routing."
    },
    {
      icon: <LayoutTemplateIcon className="w-6 h-6 text-primary-600" />,
      title: "Intranet Components",
      description: "Dashboards, quick links, and analytics tools to improve user engagement and intranet utility."
    },
    {
      icon: <ZapIcon className="w-6 h-6 text-primary-600" />,
      title: "Performance & UX",
      description: "Optimizing existing solutions for speed and stability, ensuring a seamless experience for end-users."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="services" className="py-24 bg-white border-b border-slate-100 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-display font-bold text-slate-900"
          >
            What I Can Help With
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Best suited for teams that need senior SharePoint capability part-time, without hiring full-time.
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="p-8 rounded-2xl bg-slate-50 hover:bg-white hover:shadow-xl hover:shadow-primary-900/5 transition-all duration-300 border border-slate-100 group"
            >
              <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 border border-slate-100">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 font-display">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;