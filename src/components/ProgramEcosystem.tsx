import React from 'react';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProgramEcosystem = () => {
  const stages = [
    {
      title: "FOUNDATION",
      items: ["AI fundamentals", "Generative AI basics", "Prompt engineering", "AI productivity", "Responsible AI", "Digital productivity"]
    },
    {
      title: "SPECIALIZATION",
      items: ["AI for Cyber Security", "AI-assisted threat analysis", "Security research using AI", "Log analysis concepts", "Anomaly detection concepts", "Phishing/social engineering awareness", "Security automation concepts", "Secure AI usage", "AI-assisted security documentation"]
    },
    {
      title: "PRACTICE",
      items: ["Guided labs", "Tool demonstrations", "Exercises", "Case studies", "Challenge-based learning"]
    },
    {
      title: "PROJECT",
      items: ["Mini-projects", "Capstone projects", "Team projects", "Mentor reviews", "Project presentations"]
    },
    {
      title: "INTERNSHIP",
      items: ["Structured internship opportunities", "Project-based exposure", "Industry-oriented tasks", "Duration options to be finalized"]
    },
    {
      title: "CAREER",
      items: ["Resume", "GitHub", "LinkedIn", "Portfolio", "Interview preparation", "Technical communication", "Aptitude/problem-solving where relevant", "Project presentation"]
    }
  ];

  return (
    <section id="programs" className="py-24 bg-secondary-900 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Proposed Arunai × BE10X Learning Ecosystem</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive, multi-stage architecture designed to build competence step-by-step.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-slate-800 -translate-x-1/2"></div>

          {stages.map((stage, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 relative z-10 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Connector Node */}
              <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-slate-900 border-2 border-accent-500 items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-accent-400"></div>
              </div>

              {/* Empty space for alternating layout */}
              <div className="hidden md:block w-[45%]"></div>

              {/* Content Card */}
              <div className="w-full md:w-[45%] glass-card rounded-2xl p-6 border-l-4 border-l-accent-500 hover:border-l-accent-400 transition-colors">
                <h3 className="text-xl font-bold mb-4 text-white tracking-wide">{stage.title}</h3>
                <ul className="flex flex-wrap gap-2">
                  {stage.items.map((item, i) => (
                    <li key={i} className="text-xs bg-slate-800/80 text-slate-300 px-3 py-1.5 rounded-full border border-white/5">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Mobile Arrow */}
              {index < stages.length - 1 && (
                <div className="md:hidden flex justify-center w-full my-4 text-slate-600">
                  <ArrowDown size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
