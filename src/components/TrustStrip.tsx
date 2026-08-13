import React from 'react';
import { BrainCircuit, ShieldCheck, Laptop, Building2, GraduationCap } from 'lucide-react';

export const TrustStrip = () => {
  const pillars = [
    { icon: <BrainCircuit size={24} />, text: "AI & GEN AI" },
    { icon: <ShieldCheck size={24} />, text: "CYBER SECURITY" },
    { icon: <Laptop size={24} />, text: "HANDS-ON PROJECTS" },
    { icon: <Building2 size={24} />, text: "INDUSTRY EXPOSURE" },
    { icon: <GraduationCap size={24} />, text: "EMPLOYABILITY" }
  ];

  return (
    <div className="border-y border-white/5 bg-slate-900/50 backdrop-blur-sm relative z-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-80">
          {pillars.map((pillar, index) => (
            <div key={index} className="flex items-center gap-3 text-slate-300">
              <div className="text-accent-500">
                {pillar.icon}
              </div>
              <span className="font-semibold text-sm tracking-wider">{pillar.text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
