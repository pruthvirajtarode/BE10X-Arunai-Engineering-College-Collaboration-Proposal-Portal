import React from 'react';
import { motion } from 'framer-motion';
import { Coins, BookOpen, Wrench, Briefcase, GraduationCap, RefreshCw, XCircle, ArrowDown, ShieldCheck } from 'lucide-react';

export const ContextSection = () => {
  const requirements = [
    {
      title: "AFFORDABLE",
      icon: <Coins size={24} />,
      desc: "Designed with accessibility in mind for students from rural and semi-urban backgrounds."
    },
    {
      title: "BEGINNER-FRIENDLY",
      icon: <BookOpen size={24} />,
      desc: "Build from fundamentals before moving into advanced AI and Cyber Security applications."
    },
    {
      title: "PRACTICAL",
      icon: <Wrench size={24} />,
      desc: "Every learning pathway should connect concepts to hands-on implementation."
    },
    {
      title: "INDUSTRY-ORIENTED",
      icon: <Briefcase size={24} />,
      desc: "Expose students to current tools, workflows and real-world project practices."
    },
    {
      title: "ACADEMICALLY SUPPORTED",
      icon: <GraduationCap size={24} />,
      desc: "Provide structured learning resources, assessments and mentoring."
    },
    {
      title: "FLEXIBLE",
      icon: <RefreshCw size={24} />,
      desc: "Online, offline and hybrid delivery options can be structured according to institutional requirements."
    }
  ];

  return (
    <section className="py-24 bg-secondary-900 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">We Heard What Arunai Needs</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Addressing the specific priorities outlined by the Department of Cyber Security for students from diverse backgrounds.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {requirements.map((req, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-accent-400 mb-4 border border-slate-700">
                  {req.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 tracking-wide">{req.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{req.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* The Big Problem */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Traditional Training Is Not Enough</h2>
            <p className="text-slate-400">The gap between classroom theory and industry readiness.</p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 justify-center">
            
            {/* Traditional Flow */}
            <div className="flex-1 w-full glass-card border border-red-500/20 rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-red-500/50"></div>
              <h3 className="text-xl font-bold text-center mb-8 flex items-center justify-center gap-2">
                <XCircle size={20} className="text-red-400" />
                Current Challenge
              </h3>
              
              <div className="flex flex-col items-center gap-2">
                <div className="px-4 py-2 bg-slate-800 rounded text-slate-300 text-sm text-center w-full">CLASSROOM THEORY</div>
                <ArrowDown size={16} className="text-slate-500" />
                <div className="px-4 py-2 bg-slate-800 rounded text-slate-300 text-sm text-center w-full">LIMITED TOOL EXPOSURE</div>
                <ArrowDown size={16} className="text-slate-500" />
                <div className="px-4 py-2 bg-slate-800 rounded text-slate-300 text-sm text-center w-full">FEW REAL PROJECTS</div>
                <ArrowDown size={16} className="text-slate-500" />
                <div className="px-4 py-2 bg-slate-800 rounded text-red-400/80 text-sm text-center w-full">LOW INDUSTRY CONFIDENCE</div>
                <ArrowDown size={16} className="text-slate-500" />
                <div className="px-4 py-3 bg-red-500/10 border border-red-500/30 rounded text-red-400 font-bold text-center w-full">
                  PLACEMENT CHALLENGES
                </div>
              </div>
            </div>

            <div className="text-2xl font-bold text-slate-500 hidden md:block">VS</div>

            {/* BE10X Flow */}
            <div className="flex-1 w-full glass-card border border-accent-500/30 rounded-2xl p-8 relative overflow-hidden ai-glow">
              <div className="absolute top-0 left-0 w-full h-1 bg-accent-500"></div>
              <h3 className="text-xl font-bold text-center mb-8 flex items-center justify-center gap-2">
                <ShieldCheck size={20} className="text-accent-400" />
                BE10X Transformation
              </h3>
              
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="px-3 py-1 bg-accent-900/50 border border-accent-500/30 rounded text-accent-300 text-xs font-semibold">CONCEPTS</span>
                <span className="px-3 py-1 bg-accent-900/50 border border-accent-500/30 rounded text-accent-300 text-xs font-semibold">TOOLS</span>
                <span className="px-3 py-1 bg-accent-900/50 border border-accent-500/30 rounded text-accent-300 text-xs font-semibold">HANDS-ON PRACTICE</span>
                <span className="px-3 py-1 bg-accent-900/50 border border-accent-500/30 rounded text-accent-300 text-xs font-semibold">PROJECTS</span>
                <span className="px-3 py-1 bg-accent-900/50 border border-accent-500/30 rounded text-accent-300 text-xs font-semibold">MENTORING</span>
                <span className="px-3 py-1 bg-accent-900/50 border border-accent-500/30 rounded text-accent-300 text-xs font-semibold">INDUSTRY EXPOSURE</span>
                <span className="px-3 py-1 bg-accent-900/50 border border-accent-500/30 rounded text-accent-300 text-xs font-semibold">CAREER PREPARATION</span>
              </div>
              
              <div className="flex flex-col items-center gap-4">
                <div className="text-xl font-bold text-slate-500">=</div>
                <div className="px-4 py-4 bg-accent-500/20 border border-accent-500/50 rounded-lg text-accent-300 font-bold text-center w-full text-lg shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                  INDUSTRY-READY STUDENTS
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
