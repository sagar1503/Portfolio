import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import WorkStyle from './components/WorkStyle';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-primary-500/30 selection:text-primary-900 overflow-x-hidden">
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <Services />
        <Projects />
        <TechStack />
        <WorkStyle />
      </main>
      <Contact />
    </div>
  );
};

export default App;