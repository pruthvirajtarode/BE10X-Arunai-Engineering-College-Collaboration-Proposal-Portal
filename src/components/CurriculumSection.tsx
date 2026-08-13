import React, { useState } from 'react';
import { aiFoundationModules, cyberAiModules } from '../data/curriculumData';
import { ChevronDown, Terminal, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ModuleCard = ({ module, isOpen, onClick }: { module: any, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className="border border-white/10 rounded-xl bg-slate-900/40 overflow-hidden transition-all hover:border-white/20">
      <button 
        onClick={onClick}
        className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
      >
        <div className="flex items-center gap-4">
          <span className="text-accent-500 font-mono text-sm">{module.id}</span>
          <h4 className="font-bold text-slate-200">{module.title}</h4>
        </div>
        <ChevronDown 
          size={18} 
          className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-accent-400' : ''}`} 
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 pt-2 border-t border-white/5 bg-slate-800/30">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                <div>
                  <h5 className="text-xs text-slate-500 uppercase font-semibold mb-2 tracking-wider">What students learn</h5>
                  <p className="text-sm text-slate-300 leading-relaxed">{module.learn}</p>
                </div>
                <div>
                  <h5 className="text-xs text-slate-500 uppercase font-semibold mb-2 tracking-wider">Hands-on activity</h5>
                  <p className="text-sm text-slate-300 leading-relaxed">{module.activity}</p>
                </div>
                <div>
                  <h5 className="text-xs text-slate-500 uppercase font-semibold mb-2 tracking-wider">Expected outcome</h5>
                  <p className="text-sm text-accent-300 font-medium leading-relaxed">{module.outcome}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const CurriculumSection = () => {
  const [openAi, setOpenAi] = useState<string>("01");
  const [openCyber, setOpenCyber] = useState<string>("01");

  return (
    <section id="curriculum" className="py-24 bg-primary-900 border-t border-white/5 relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* AI & GenAI Curriculum */}
        <div className="mb-24">
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="w-full md:w-1/3 sticky top-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-blue-400 text-xs font-semibold tracking-wider uppercase mb-6">
                <Terminal size={14} />
                <span>Phase 1</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI & Generative AI Foundation</h2>
              <p className="text-slate-400 leading-relaxed">
                A structured progression from basic AI literacy to practical Generative AI application, ensuring students from all backgrounds can build a strong baseline.
              </p>
            </div>
            
            <div className="w-full md:w-2/3 flex flex-col gap-3">
              {aiFoundationModules.map((module) => (
                <ModuleCard 
                  key={module.id} 
                  module={module} 
                  isOpen={openAi === module.id} 
                  onClick={() => setOpenAi(openAi === module.id ? "" : module.id)} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Cyber Security + AI Curriculum */}
        <div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-start">
            <div className="w-full md:w-1/3 sticky top-24">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-accent-400 text-xs font-semibold tracking-wider uppercase mb-6">
                <Shield size={14} />
                <span>Phase 2 (Differentiator)</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Applications in Cyber Security</h2>
              <p className="text-slate-400 leading-relaxed mb-6">
                Translating AI capabilities into defensive security practices. This curriculum remains strictly educational, defensive, and ethical.
              </p>
              
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <h4 className="text-yellow-500 text-sm font-bold mb-2 uppercase tracking-wide">Ethical Framework</h4>
                <p className="text-xs text-slate-300">
                  We emphasize defensive security, detection, analysis, secure experimentation in sandbox environments, and ethical AI use. No harmful operational instructions are provided.
                </p>
              </div>
            </div>
            
            <div className="w-full md:w-2/3 flex flex-col gap-3">
              {cyberAiModules.map((module) => (
                <ModuleCard 
                  key={module.id} 
                  module={module} 
                  isOpen={openCyber === module.id} 
                  onClick={() => setOpenCyber(openCyber === module.id ? "" : module.id)} 
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
