import React from 'react';
import { motion } from 'framer-motion';

export const HandsOnModel = () => {
  return (
    <section className="py-24 bg-primary-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Learn by Building</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Indicative proposed learning mix designed to minimize pure lecture time and maximize active participation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 mb-12 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 blur-[50px]"></div>
            
            <div className="flex flex-col md:flex-row h-auto md:h-16 rounded-xl overflow-hidden mb-8 border border-slate-700/50 shadow-lg">
              <div className="w-full md:w-[25%] bg-slate-800 p-4 md:p-0 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-700/50">
                <div className="text-center">
                  <span className="block text-xs font-bold text-slate-400 uppercase tracking-wide">Concept</span>
                  <span className="block text-xl font-black text-white">20-30%</span>
                </div>
              </div>
              <div className="w-full md:w-[20%] bg-slate-700 p-4 md:p-0 flex items-center justify-center border-b md:border-b-0 md:border-r border-slate-600/50">
                <div className="text-center">
                  <span className="block text-xs font-bold text-slate-300 uppercase tracking-wide">Demonstration</span>
                  <span className="block text-xl font-black text-white">15-20%</span>
                </div>
              </div>
              <div className="w-full md:w-[35%] bg-accent-600 p-4 md:p-0 flex items-center justify-center border-b md:border-b-0 md:border-r border-accent-500/50 ai-glow">
                <div className="text-center relative z-10">
                  <span className="block text-xs font-bold text-accent-100 uppercase tracking-wide">Hands-on Lab</span>
                  <span className="block text-xl font-black text-white">30-40%</span>
                </div>
              </div>
              <div className="w-full md:w-[20%] bg-accent-800 p-4 md:p-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="block text-xs font-bold text-accent-200 uppercase tracking-wide">Project</span>
                  <span className="block text-xl font-black text-white">15-25%</span>
                </div>
              </div>
            </div>

            <h3 className="text-xl font-bold mb-6 text-center text-white">Practical Implementations Include:</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['Prompt challenge', 'AI research task', 'Phishing analysis exercise', 'Log analysis exercise', 'AI-assisted coding task', 'Mini security project', 'Presentation', 'Viva/project review'].map((item, i) => (
                <span key={i} className="px-4 py-2 bg-slate-800/80 border border-slate-700 rounded-lg text-sm text-slate-300">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
