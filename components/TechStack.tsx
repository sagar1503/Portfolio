import React from 'react';
import { motion } from 'framer-motion';
import { CodeIcon } from './Icons';

const TechStack: React.FC = () => {
  const stack = [
    {
      category: "Frontend",
      skills: ["React 18+", "TypeScript", "SPFx 1.22", "Fluent UI", "Tailwind CSS"]
    },
    {
      category: "SharePoint & M365",
      skills: ["SharePoint Online", "REST API", "PnPjs v4", "User Profile Service", "Azure Functions"]
    },
    {
      category: "Workflow & Logic",
      skills: ["Custom State Machines", "Power Automate", "Logic Apps", "JavaScript"]
    },
    {
      category: "Analytics & UI",
      skills: ["Chart.js", "Responsive Design", "Modern Design Systems"]
    }
  ];

  return (
    <section id="technology" className="py-24 bg-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-12">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="p-3 bg-primary-50 rounded-lg mr-4"
          >
            <CodeIcon className="w-6 h-6 text-primary-600" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-display font-bold text-slate-900"
          >
            Technology Stack
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stack.map((group, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-bold text-slate-900 border-b border-slate-200 pb-2 font-display">{group.category}</h3>
              <ul className="space-y-2">
                {group.skills.map((skill, sIndex) => (
                  <motion.li
                    key={sIndex}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (sIndex * 0.05) }}
                    className="text-slate-600 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;