import React from 'react';
import { CheckCircleIcon, GithubIcon } from './Icons';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-slate-50 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900">Key Projects</h2>
          <p className="mt-4 text-lg text-slate-600">
            Real-world solutions solving complex enterprise problems.
          </p>
        </div>

        <div className="space-y-12">
          {/* Project 1: Approval Portal */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="border-b border-slate-100 p-6 sm:p-8 bg-gradient-to-r from-white to-slate-50">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">SPFx Web Part</span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-indigo-100 text-indigo-800">React</span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-800">SharePoint Online</span>
              </div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Business Request & Approval Portal</h3>
                    <p className="text-slate-600">A SharePoint-native approval portal with a custom workflow engine.</p>
                </div>
                <a 
                  href="https://github.com/sagar1503/ApprovalPortal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors text-sm font-medium whitespace-nowrap"
                >
                  <GithubIcon className="w-4 h-4 mr-2" />
                  View Code
                </a>
              </div>
            </div>
            
            <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">The Challenge</h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Many teams rely on Power Automate for approvals, but it can become fragile or costly for complex, high-volume workflows. The client needed a solution that offered greater control and speed without leaving the SharePoint ecosystem.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Core Capabilities</h4>
                  <ul className="space-y-3">
                    {[
                      "Multi-stage approval workflows (sequential & parallel)",
                      "Config-driven approval matrix (hot-swappable)",
                      "Conditional routing based on metadata thresholds",
                      "Out-of-office delegation logic",
                      "Immutable audit trails & SLA tracking"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start text-sm text-slate-700">
                        <CheckCircleIcon className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 h-fit">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Tech Highlights</h4>
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-slate-500 font-medium mb-0.5">Framework</div>
                    <div className="text-sm text-slate-800 font-semibold">SPFx 1.22 + React (TypeScript)</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium mb-0.5">Data Layer</div>
                    <div className="text-sm text-slate-800 font-semibold">PnPjs v4 → REST API (OData)</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium mb-0.5">Architecture</div>
                    <div className="text-sm text-slate-800 font-semibold">Client-side State Machine</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium mb-0.5">Notifications</div>
                    <div className="text-sm text-slate-800 font-semibold">HTML Email via SP Utilities</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2: Quick Links Analytics */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
             <div className="border-b border-slate-100 p-6 sm:p-8 bg-gradient-to-r from-white to-slate-50">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-emerald-100 text-emerald-800">Analytics</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">SPFx</span>
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-800">Chart.js</span>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">SharePoint Quick Links Analytics</h3>
                        <p className="text-slate-600">Intelligent component that tracks usage and auto-sorts links based on user behavior.</p>
                    </div>
                    <a 
                      href="https://github.com/sagar1503/QuickLinkAnlyticsSPFx" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-900 transition-colors text-sm font-medium whitespace-nowrap"
                    >
                      <GithubIcon className="w-4 h-4 mr-2" />
                      View Code
                    </a>
                </div>
             </div>

             <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-8">
                   <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">What It Does</h4>
                      <ul className="space-y-3">
                        {[
                           "Tracks individual link clicks & aggregates trends over time",
                           "Auto-sorts links by popularity (7/30 days window)",
                           "Identifies unused links for cleanup",
                           "Visualizes engagement data for site owners"
                        ].map((item, i) => (
                           <li key={i} className="flex items-start text-sm text-slate-700">
                              <CheckCircleIcon className="w-5 h-5 text-primary-500 mt-0.5 mr-3 flex-shrink-0" />
                              {item}
                           </li>
                        ))}
                      </ul>
                   </div>
                   
                   <div>
                      <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">Why It's Useful</h4>
                      <ul className="space-y-3">
                         {[
                            "Automatically keeps intranet content relevant based on usage",
                            "Provides analytics without extra licensing (e.g., no Google Analytics)",
                            "Low-code configuration for admins",
                            "Quick-win deployment for immediate value"
                         ].map((item, i) => (
                            <li key={i} className="flex items-start text-sm text-slate-700">
                               <CheckCircleIcon className="w-5 h-5 text-emerald-500 mt-0.5 mr-3 flex-shrink-0" />
                               {item}
                            </li>
                         ))}
                      </ul>
                   </div>
                </div>

                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100 h-fit">
                   <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">Tech Highlights</h4>
                   <div className="space-y-4">
                      <div>
                         <div className="text-xs text-slate-500 font-medium mb-0.5">Visualization</div>
                         <div className="text-sm text-slate-800 font-semibold">Chart.js</div>
                      </div>
                      <div>
                         <div className="text-xs text-slate-500 font-medium mb-0.5">UI Library</div>
                         <div className="text-sm text-slate-800 font-semibold">Fluent UI + Modern CSS</div>
                      </div>
                      <div>
                         <div className="text-xs text-slate-500 font-medium mb-0.5">Configuration</div>
                         <div className="text-sm text-slate-800 font-semibold">SPFx Property Pane</div>
                      </div>
                      <div>
                         <div className="text-xs text-slate-500 font-medium mb-0.5">Data Storage</div>
                         <div className="text-sm text-slate-800 font-semibold">SharePoint Lists (Hidden)</div>
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;