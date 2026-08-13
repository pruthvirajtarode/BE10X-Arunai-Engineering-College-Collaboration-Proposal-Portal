import React, { useState } from 'react';
import { vacOptions } from '../data/vacData';
import { Clock, BookOpen, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const VACPortfolio = () => {
  const [activeTab, setActiveTab] = useState(vacOptions[0].id);
  const activeVac = vacOptions.find(v => v.id === activeTab);

  return (
    <section className="py-24 bg-primary-900 border-t border-white/5 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-semibold tracking-wider uppercase mb-6">
            <Clock size={14} />
            <span>30–45 Hour Format</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proposed Value Added Course Portfolio</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            These are proposed academic course structures designed to fulfill the 30-45 hour VAC requirement. Final syllabus is subject to institutional discussion.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Tabs Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col gap-2">
            {vacOptions.map((vac) => (
              <button
                key={vac.id}
                onClick={() => setActiveTab(vac.id)}
                className={`text-left p-4 rounded-xl border transition-all ${
                  activeTab === vac.id 
                    ? 'bg-slate-800 border-accent-500 shadow-[0_0_15px_rgba(20,184,166,0.15)] text-white' 
                    : 'bg-slate-900/50 border-white/5 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200'
                }`}
              >
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs font-bold text-accent-500">OPTION {vac.id}</span>
                  <span className="text-xs flex items-center gap-1 opacity-70"><Clock size={12} /> {vac.duration}</span>
                </div>
                <h4 className="font-semibold text-sm line-clamp-2">{vac.title}</h4>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="w-full lg:w-2/3 glass-card rounded-2xl p-6 md:p-10 border-white/10 relative overflow-hidden min-h-[400px]">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-600/5 blur-[80px]"></div>
            
            <AnimatePresence mode="wait">
              {activeVac && (
                <motion.div
                  key={activeVac.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-3 py-1 bg-accent-500/20 text-accent-300 border border-accent-500/30 rounded-full text-xs font-bold tracking-wider">
                      OPTION {activeVac.id}
                    </span>
                    <span className="flex items-center gap-1 text-slate-400 text-sm">
                      <Clock size={16} /> {activeVac.duration}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{activeVac.title}</h3>
                  <p className="text-slate-400 mb-8 italic border-l-2 border-slate-700 pl-4">{activeVac.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
                        <BookOpen size={16} className="text-accent-400" />
                        Key Modules
                      </h4>
                      <ul className="space-y-3">
                        {activeVac.modules.map((mod, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-slate-300">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0"></div>
                            {mod}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
                      <h4 className="flex items-center gap-2 text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">
                        <Star size={16} className="text-yellow-500" />
                        Capstone Project
                      </h4>
                      <p className="text-white font-medium text-lg leading-snug">{activeVac.project}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded text-slate-400">Eligibility: Open</span>
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded text-slate-400">Hands-on Component: Included</span>
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded text-slate-400">Assessment: Required</span>
                    <span className="text-xs bg-slate-800 px-3 py-1 rounded text-slate-400">Certificate: BE10X Completion</span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};
