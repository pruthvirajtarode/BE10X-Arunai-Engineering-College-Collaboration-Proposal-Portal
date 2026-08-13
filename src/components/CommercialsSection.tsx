import React from 'react';
import { packages, additionalCosts } from '../data/pricingData';
import { Check, Info, IndianRupee, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const CommercialsSection = () => {
  return (
    <>
      {/* Executive Comparison */}
      <section className="py-24 bg-primary-900 border-t border-white/5 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Which Collaboration Model Fits Arunai?</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Comparing standard approaches to help identify the best alignment for your students.
            </p>
          </div>

          <div className="max-w-6xl mx-auto overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs uppercase bg-slate-800/50 text-slate-300">
                <tr>
                  <th scope="col" className="px-6 py-4 rounded-tl-lg">Criteria</th>
                  <th scope="col" className="px-6 py-4 font-normal text-slate-400">Workshop Only</th>
                  <th scope="col" className="px-6 py-4 font-normal text-slate-400">Skill Development Program</th>
                  <th scope="col" className="px-6 py-4 text-accent-400 font-bold bg-accent-950/20 rounded-tr-lg border-x border-t border-accent-500/20">
                    <div className="flex items-center gap-2">
                      <ShieldCheck size={14} />
                      One-Year Industry–Academia Partnership
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Duration", w: "2-5 Days", s: "1-3 Months", o: "1 Academic Year" },
                  { name: "Learning Depth", w: "Awareness", s: "Basic Skills", o: "Comprehensive Ecosystem" },
                  { name: "Hands-on", w: "Limited", s: "Included", o: "Extensive Labs" },
                  { name: "Projects", w: "None", s: "Mini-project", o: "Multiple + Capstone" },
                  { name: "Mentoring", w: "None", s: "Limited", o: "Full Pipeline" },
                  { name: "Internship", w: "None", s: "None", o: "Structured Pathway" },
                  { name: "FDP", w: "None", s: "None", o: "Included" },
                  { name: "Career Readiness", w: "None", s: "Basic", o: "Full Support" }
                ].map((row, i) => (
                  <tr key={i} className="border-b border-white/5 bg-slate-900/50 hover:bg-slate-800/50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-300">{row.name}</td>
                    <td className="px-6 py-4 text-slate-500">{row.w}</td>
                    <td className="px-6 py-4 text-slate-400">{row.s}</td>
                    <td className="px-6 py-4 text-white font-bold bg-accent-950/10 border-x border-accent-500/20">{row.o}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="max-w-6xl mx-auto mt-4 p-4 bg-accent-500/10 border border-accent-500/30 rounded-lg text-center flex flex-col sm:flex-row items-center justify-center gap-3">
            <span className="font-bold text-accent-400">Recommendation: One-Year Industry–Academia Partnership</span>
            <span className="text-slate-400 text-sm italic">Based on the breadth of requirements shared by Arunai; final model subject to institutional discussion.</span>
          </div>
        </div>
      </section>

      {/* Packages and Pricing */}
      <section id="pricing" className="py-24 bg-secondary-900 border-t border-white/5 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Indicative Commercial Structure</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Configurable pricing architecture designed to accommodate institutional requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {packages.map((pkg, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`glass-card rounded-2xl flex flex-col ${pkg.id === 'C' ? 'border-accent-500 shadow-[0_0_30px_rgba(20,184,166,0.15)] relative overflow-hidden ai-glow' : 'border-white/10'}`}
              >
                {pkg.id === 'C' && (
                  <div className="absolute top-0 left-0 w-full bg-accent-600 text-center text-xs font-bold py-1 text-white uppercase tracking-wider">
                    Recommended Model
                  </div>
                )}
                <div className={`p-8 border-b ${pkg.id === 'C' ? 'border-accent-500/30 pt-10' : 'border-white/5'}`}>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 block">PACKAGE {pkg.id}</span>
                  <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-sm text-slate-400 min-h-[40px]">{pkg.target}</p>
                  
                  <div className="mt-6 pt-6 border-t border-white/5">
                    <span className="text-xs text-slate-500 uppercase font-semibold block mb-1">Pricing Model</span>
                    <div className="text-xl font-bold text-slate-200 flex items-center gap-2">
                      {pkg.priceType}
                    </div>
                    <div className="text-sm text-accent-500 font-bold mt-1 bg-accent-500/10 inline-block px-3 py-1 rounded">
                      {pkg.priceValue}
                    </div>
                  </div>
                </div>
                
                <div className="p-8 flex-1 bg-slate-900/50">
                  <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Includes</h4>
                  <ul className="space-y-3">
                    {pkg.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-300">
                        <Check size={16} className="text-accent-500 shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Additional Costs / Resources */}
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 border-white/10">
            <div className="flex items-center gap-2 mb-6">
              <Info size={20} className="text-slate-400" />
              <h3 className="text-lg font-bold text-white">Additional Considerations & Resources</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {additionalCosts.map((cost, i) => (
                <div key={i} className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/50">
                  <span className="block text-xs text-slate-400 mb-1">{cost.item}</span>
                  <span className={`block text-xs font-bold ${cost.status.includes('INCLUDED') ? 'text-accent-400' : 'text-slate-300'}`}>
                    {cost.status}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-slate-800/80 rounded-lg text-center text-sm text-slate-300 italic border border-slate-700">
              "All commercial figures shown in this proposal are indicative and subject to final scope, participant count, delivery mode, faculty/student requirements and institutional discussion."
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
