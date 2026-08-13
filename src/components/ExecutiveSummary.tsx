import React from 'react';
import { Target, Calendar, MapPin, Users } from 'lucide-react';

export const ExecutiveSummary = () => {
  return (
    <section className="pt-8 pb-12 bg-slate-900 border-b border-white/5 relative z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto bg-secondary-900/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 md:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-6 border-b border-white/5">
            <div>
              <h2 className="text-lg font-bold text-white mb-1">Executive Summary</h2>
              <p className="text-sm text-slate-400">Industry-Academia Collaboration Proposal</p>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <span className="inline-block px-3 py-1 bg-accent-500/10 text-accent-400 border border-accent-500/20 rounded-full text-xs font-semibold tracking-wider">
                CONFIDENTIAL DRAFT
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div>
              <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1">For</span>
              <p className="text-sm text-slate-300 font-medium">Arunai Engineering College</p>
              <p className="text-xs text-slate-400">Dept. of Cyber Security</p>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1">By</span>
              <p className="text-sm text-slate-300 font-medium">BE10X</p>
              <p className="text-xs text-slate-400">Industry Partner</p>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1">Objective</span>
              <p className="text-sm text-slate-300 font-medium leading-snug">Create industry-ready students from diverse learning backgrounds.</p>
            </div>
            <div>
              <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-1">Format</span>
              <p className="text-sm text-slate-300 font-medium">Online / Offline / Hybrid</p>
              <p className="text-xs text-slate-400">Calendar-Aligned</p>
            </div>
          </div>
          
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50">
            <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-bold mb-2">Proposed Architecture</span>
            <div className="flex flex-wrap gap-2">
              {["AI Foundation", "Generative AI", "Cyber Security", "Projects", "Internship", "FDP", "Employability"].map((item, i) => (
                <span key={i} className="px-2 py-1 bg-slate-900 border border-slate-700 rounded text-xs text-slate-300 font-medium">
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/5">
            <p className="text-sm md:text-base text-slate-300 leading-relaxed italic">
              "AI is changing how Cyber Security professionals learn, build and work. The opportunity for Arunai is not simply to teach students another technology. It is to help them become professionals who can combine Cyber Security fundamentals with AI-enabled productivity, analysis, automation and problem solving."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
