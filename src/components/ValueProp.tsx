import React from 'react';
import { motion } from 'framer-motion';

export const ValueProp = () => {
  const pillars = [
    { num: "01", title: "AI FOUNDATIONS", desc: "Build core understanding of Artificial Intelligence concepts and terminology." },
    { num: "02", title: "GENERATIVE AI", desc: "Master text and image generation models and prompt engineering techniques." },
    { num: "03", title: "CYBER SECURITY + AI", desc: "Apply AI workflows to threat intelligence, log analysis, and defensive security." },
    { num: "04", title: "AI-ASSISTED DEVELOPMENT", desc: "Accelerate programming and scripting using intelligent coding assistants." },
    { num: "05", title: "PROJECTS & INTERNSHIPS", desc: "Build a robust portfolio and gain structured industry exposure." },
    { num: "06", title: "CAREER READINESS", desc: "Prepare for interviews with AI-optimized resumes and technical communication." }
  ];

  return (
    <section className="py-24 bg-primary-900 border-t border-white/5 relative overflow-hidden">
      <div className="absolute right-0 bottom-0 w-1/2 h-full bg-accent-600/5 blur-[150px] pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">From Learning to Industry Readiness</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            The core pillars of the BE10X value proposition for Arunai Engineering College.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 border border-white/10 rounded-2xl bg-secondary-900/40 hover:bg-secondary-900/80 transition-colors group"
            >
              <div className="text-4xl font-black text-white/5 mb-4 group-hover:text-accent-500/20 transition-colors">{pillar.num}</div>
              <h3 className="text-lg font-bold mb-2 text-white">{pillar.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
