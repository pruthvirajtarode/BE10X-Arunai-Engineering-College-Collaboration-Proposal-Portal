import React from 'react';
import { Shield, Brain, Laptop, Briefcase, GraduationCap, ArrowRight, Download } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full glass-card border-b border-white/5 py-4">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="text-accent-500 font-bold text-xl tracking-tight">BE10X</div>
          <div className="h-4 w-[1px] bg-white/20 mx-2 hidden sm:block"></div>
          <div className="text-sm text-slate-300 hidden sm:block font-medium">Arunai Engineering College Proposal</div>
        </div>
        <div className="hidden lg:flex items-center gap-6 text-sm text-slate-300 font-medium">
          <a href="#overview" className="hover:text-accent-400 transition-colors">Overview</a>
          <a href="#programs" className="hover:text-accent-400 transition-colors">Programs</a>
          <a href="#projects" className="hover:text-accent-400 transition-colors">Projects</a>
          <a href="#calendar" className="hover:text-accent-400 transition-colors">Calendar</a>
          <a href="#pricing" className="hover:text-accent-400 transition-colors">Pricing</a>
        </div>
        <div>
          <a href="#contact" className="bg-accent-600 hover:bg-accent-500 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(20,184,166,0.3)] hover:shadow-[0_0_25px_rgba(20,184,166,0.5)] flex items-center gap-2">
            Discuss Collaboration
          </a>
        </div>
      </div>
    </nav>
  );
};
