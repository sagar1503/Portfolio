import React from 'react';
import { motion } from 'framer-motion';
import { MailIcon, LinkedinIcon, GithubIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="bg-white pt-24 pb-12 border-t border-slate-200 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-6">Let's Connect</h2>
          <p className="text-lg text-slate-600 mb-12 max-w-xl mx-auto leading-relaxed">
            Interested in discussing a part-time engagement or specific SharePoint project? Reach out via email or LinkedIn.
          </p>
        </motion.div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            href="mailto:Agarwal.sagar98@gmail.com"
            className="flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition shadow-lg shadow-primary-500/20 w-full sm:w-auto font-medium group"
          >
            <MailIcon className="w-5 h-5 mr-3 group-hover:animate-pulse" />
            Agarwal.sagar98@gmail.com
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            href="https://www.linkedin.com/in/sagar-agarwal-ds/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 transition hover:border-blue-400 hover:text-blue-700 w-full sm:w-auto font-medium shadow-sm hover:shadow-md"
          >
            <LinkedinIcon className="w-5 h-5 mr-3 text-blue-600" />
            LinkedIn
          </motion.a>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            href="https://github.com/sagar1503"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition shadow-lg shadow-slate-900/20 w-full sm:w-auto font-medium"
          >
            <GithubIcon className="w-5 h-5 mr-3" />
            GitHub
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-slate-100 pt-8"
        >
          <p className="text-sm text-slate-400">
            © {new Date().getFullYear()} Sagar Agarwal. All rights reserved.
          </p>
          <p className="text-xs text-slate-300 mt-2">
            Built with React, Tailwind CSS & Framer Motion.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Contact;