import React from 'react';
import { Shield, Brain, Network, Play, ChevronRight, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="overview" className="relative pt-24 pb-32 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1200px] h-[500px] bg-accent-600/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-accent-400 text-xs font-semibold tracking-wider uppercase mb-8"
          >
            <Shield size={14} />
            <span>Industry–Academia Collaboration Proposal</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight text-white"
          >
            Building an <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-blue-400">AI-Ready</span><br className="hidden md:block"/> Cyber Security Talent Pipeline
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-300 font-medium mb-6"
          >
            An industry-oriented learning partnership between BE10X and Arunai Engineering College
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-base text-slate-400 mb-10 max-w-3xl mx-auto leading-relaxed"
          >
            From AI fundamentals to Generative AI, Cyber Security applications, hands-on projects, internships, faculty development and employability — a structured pathway designed for students with diverse levels of prior exposure.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-600 hover:bg-accent-500 text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)]">
              Explore the Proposed Collaboration
              <ChevronRight size={18} />
            </button>
            <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold flex items-center justify-center gap-2 transition-all">
              View Program Architecture
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
