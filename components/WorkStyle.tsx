import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCapIcon } from './Icons';

const WorkStyle: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-slate-900 text-white scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* How I Work */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold mb-8 text-white">How I Work</h2>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 shadow-xl">
              <p className="text-slate-300 text-lg mb-8 italic border-l-4 border-primary-500 pl-4 py-1">
                "I focus on building solutions that are easy to operate, easy to change, and hard to break."
              </p>
              <ul className="space-y-6">
                {[
                  "Available up to 20 hours per week (Visa-compliant)",
                  "Seamless integration with existing IT / M365 teams",
                  "End-to-end ownership of specific tools or components",
                  "Rigorous documentation and handover practices"
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (index * 0.1) }}
                    className="flex items-start"
                  >
                    <span className="flex-shrink-0 h-7 w-7 flex items-center justify-center rounded-full bg-slate-700 text-primary-400 font-bold text-sm mr-4 mt-0.5 border border-slate-600">
                      {index + 1}
                    </span>
                    <span className="text-slate-300 text-lg leading-snug">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Background */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl font-display font-bold mb-8 text-white">Background</h2>
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start p-6 bg-slate-800/80 rounded-2xl border border-slate-700/50 transition-all"
              >
                <div className="flex-shrink-0 p-3 bg-slate-700/50 rounded-xl border border-slate-600 text-primary-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-bold text-white font-display">4+ Years Professional Experience</h3>
                  <p className="text-slate-400 mt-2 leading-relaxed">Built enterprise SharePoint solutions for global users, working closely with business, IT, and security teams.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start p-6 bg-slate-800/80 rounded-2xl border border-slate-700/50 transition-all"
              >
                <div className="flex-shrink-0 p-3 bg-slate-700/50 rounded-xl border border-slate-600 text-primary-400">
                  <GraduationCapIcon className="w-6 h-6" />
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-bold text-white font-display">MSc in Data Science</h3>
                  <p className="text-slate-400 mt-2 leading-relaxed">Currently pursuing in the UK. Combining development expertise with data-driven insights.</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start p-6 bg-slate-800/80 rounded-2xl border border-slate-700/50 transition-all"
              >
                <div className="flex-shrink-0 p-3 bg-slate-700/50 rounded-xl border border-slate-600 text-primary-400">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div className="ml-5">
                  <h3 className="text-xl font-bold text-white font-display">Communication</h3>
                  <p className="text-slate-400 mt-2 leading-relaxed">Strong documentation, mentoring, and stakeholder communication experience.</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkStyle;