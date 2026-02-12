import React from 'react';
import { motion } from 'framer-motion';
import { MapPinIcon, GlobeIcon, ClockIcon, ArrowRightIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-primary-50/50 z-0"></div>

      {/* Abstract background blobs with Framer Motion */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
          x: [0, 20, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-0 right-1/4 -mt-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 z-0"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm border border-primary-100 rounded-full px-4 py-1.5 mb-8 shadow-sm"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-500"></span>
            </span>
            <span className="text-xs font-bold text-primary-800 uppercase tracking-wider">Available for new projects</span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="block"
            >
              Building Scalable
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="block text-primary-600"
            >
              SharePoint & SPFx
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="block"
            >
              Solutions
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed max-w-2xl font-light"
          >
            I blend <span className="font-medium text-slate-800">Power Automate</span> simplicity with custom <span className="font-medium text-slate-800">SPFx</span> performance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 mb-12 text-sm font-medium text-slate-500"
          >
            <div className="flex items-center px-4 py-2 bg-white/50 rounded-lg border border-slate-100">
              <MapPinIcon className="w-4 h-4 mr-2 text-primary-500" />
              Leeds, UK
            </div>
            <div className="flex items-center px-4 py-2 bg-white/50 rounded-lg border border-slate-100">
              <GlobeIcon className="w-4 h-4 mr-2 text-primary-500" />
              Remote
            </div>
            <div className="flex items-center px-4 py-2 bg-white/50 rounded-lg border border-slate-100">
              <ClockIcon className="w-4 h-4 mr-2 text-primary-500" />
              Visa Compliant
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <a href="#projects" className="group inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-bold rounded-xl text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-lg shadow-primary-500/30 hover:shadow-primary-500/40 hover:-translate-y-0.5">
              View Key Projects
              <ArrowRightIcon className="ml-2 -mr-1 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="inline-flex items-center justify-center px-8 py-4 border border-slate-200 text-base font-semibold rounded-xl text-slate-700 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all hover:shadow-md hover:-translate-y-0.5">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;