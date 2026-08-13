import React from 'react';
import { projects } from '../data/projectsData';
import { Terminal, Shield, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectGallery = () => {
  return (
    <section id="projects" className="py-24 bg-secondary-900 border-t border-white/5 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Classroom to Portfolio</h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-4">
            Sample industry-oriented project portfolio demonstrating the integration of AI capabilities with Cyber Security workflows.
          </p>
          <span className="inline-block px-3 py-1 bg-slate-800 text-xs text-slate-400 rounded-full border border-slate-700 italic">
            *All projects are proposed examples subject to final curriculum design.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col h-full hover:border-accent-500/50 transition-colors group"
            >
              <div className="flex items-center gap-2 mb-4">
                {project.category === 'AI' && <Sparkles size={16} className="text-blue-400" />}
                {project.category === 'Cyber Security' && <Shield size={16} className="text-red-400" />}
                {project.category === 'AI + Cyber' && <Terminal size={16} className="text-accent-400" />}
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">{project.category}</span>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-4 line-clamp-2">{project.title}</h3>
              
              <div className="flex-1 space-y-4">
                <div>
                  <h4 className="text-xs text-slate-500 uppercase font-semibold mb-1">Problem</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{project.problem}</p>
                </div>
                
                <div className="p-3 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <h4 className="text-xs text-accent-500 uppercase font-bold mb-1">AI Component</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{project.aiComponent}</p>
                  
                  {project.cyberComponent && (
                    <div className="mt-3 pt-3 border-t border-slate-700/50">
                      <h4 className="text-xs text-accent-500 uppercase font-bold mb-1">Cyber Component</h4>
                      <p className="text-sm text-slate-300 leading-relaxed">{project.cyberComponent}</p>
                    </div>
                  )}
                </div>
                
                <div>
                  <h4 className="text-xs text-slate-500 uppercase font-semibold mb-1">Learning Outcome</h4>
                  <p className="text-sm text-slate-300 leading-relaxed">{project.learningOutcome}</p>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-white/5">
                <span className="text-xs font-semibold text-slate-400">Portfolio Value: <span className="text-white">{project.portfolioValue}</span></span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
