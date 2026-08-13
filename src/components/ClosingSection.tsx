import React, { useState } from 'react';
import { faqs } from '../data/faqData';
import { ChevronDown, BarChart3, ShieldCheck, Target, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const ClosingSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Outcome & Dashboard */}
      <section className="py-24 bg-primary-900 border-t border-white/5 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Success Looks Like</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Measuring the impact of the Industry-Academia Collaboration across all stakeholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            <div className="p-6 glass-card rounded-xl border-t-4 border-t-blue-500">
              <h3 className="text-xl font-bold mb-4 text-white">Student Outcomes</h3>
              <ul className="space-y-2">
                {["AI literacy & GenAI capability", "Prompt engineering mastery", "Cyber security awareness", "Practical tool usage", "Project portfolio generation", "Industry exposure", "Career readiness"].map((item, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 glass-card rounded-xl border-t-4 border-t-purple-500">
              <h3 className="text-xl font-bold mb-4 text-white">Faculty Outcomes</h3>
              <ul className="space-y-2">
                {["AI-enabled teaching methods", "AI-enabled research", "Personal productivity", "Academic content creation", "Cyber security teaching workflows"].map((item, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="p-6 glass-card rounded-xl border-t-4 border-t-accent-500">
              <h3 className="text-xl font-bold mb-4 text-white">Institution Outcomes</h3>
              <ul className="space-y-2">
                {["Industry connection", "Structured skill development", "Project ecosystem", "Internship pathway", "Placement readiness", "Modern AI/Cyber curriculum support"].map((item, i) => (
                  <li key={i} className="text-sm text-slate-300 flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-1.5 shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mock Dashboard */}
          <div className="max-w-4xl mx-auto glass-card rounded-2xl p-8 border-white/10">
            <div className="flex items-center gap-3 mb-8">
              <BarChart3 className="text-accent-400" />
              <h3 className="text-xl font-bold text-white">Measurement Dashboard (Mockup)</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Students Enrolled", target: "TBD" },
                { label: "Training Hours", target: "TBD" },
                { label: "Hands-on Hours", target: "TBD" },
                { label: "Projects Completed", target: "TBD" },
                { label: "Faculty Participants", target: "TBD" },
                { label: "Internship Opportunities", target: "TBD" },
                { label: "Assessments Completed", target: "TBD" },
                { label: "Certificates Issued", target: "TBD" }
              ].map((metric, i) => (
                <div key={i} className="p-4 bg-slate-900/80 rounded-lg border border-slate-700/50">
                  <span className="block text-xs text-slate-400 mb-2 uppercase tracking-wider">{metric.label}</span>
                  <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold text-white">{metric.target}</span>
                    <span className="text-xs text-slate-500 mb-1">/ Target</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-secondary-900 border-t border-white/5 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Addressing specific queries raised by the Arunai Engineering College Cyber Security Department.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <div key={i} className="mb-3 glass-card rounded-lg overflow-hidden border-white/5">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 flex items-center justify-between focus:outline-none"
                >
                  <h4 className="font-semibold text-slate-200 text-sm md:text-base pr-4">{faq.question}</h4>
                  <ChevronDown 
                    size={18} 
                    className={`text-slate-400 shrink-0 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-accent-400' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-4 pt-1">
                        <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-accent-500/50 pl-3">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Recommendation & CTA */}
      <section id="contact" className="py-32 bg-primary-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900 to-slate-950 z-0"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[400px] bg-accent-600/10 blur-[120px] rounded-full pointer-events-none z-0"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Let's Build Arunai's Next Generation of <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-blue-400">Cyber Security Talent</span>
            </h2>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed">
              BE10X proposes a practical, scalable and academically aligned Industry–Academia pathway that helps students move from AI awareness to hands-on capability, project development, industry exposure and career readiness.
            </p>
            
            <div className="p-8 glass-card border-accent-500/30 rounded-2xl mb-12 inline-block ai-glow">
              <h3 className="text-2xl font-bold text-white mb-2">One Partnership.</h3>
              <h3 className="text-2xl font-bold text-slate-300 mb-2">Multiple Learning Pathways.</h3>
              <h3 className="text-2xl font-bold text-accent-400">A Stronger Student-to-Industry Pipeline.</h3>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-accent-600 hover:bg-accent-500 text-white font-semibold flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(20,184,166,0.4)] hover:shadow-[0_0_30px_rgba(20,184,166,0.6)]">
                Discuss the One-Year Collaboration
                <ArrowRight size={18} />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 font-semibold flex items-center justify-center transition-all">
                Review Indicative Proposal
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Source Section & Footer */}
      <footer className="bg-slate-950 py-12 border-t border-white/5 relative z-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 border-b border-white/5 pb-12">
            <div>
              <div className="text-accent-500 font-bold text-xl tracking-tight mb-4">BE10X</div>
              <p className="text-sm text-slate-500 max-w-xs">
                Building AI-Ready Cyber Security Talent. From Classroom Learning to Industry Capability.
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-slate-300 uppercase tracking-wider mb-4">Proposal Basis</h4>
              <ul className="space-y-2 text-xs text-slate-500">
                <li className="flex items-start gap-2">
                  <ShieldCheck size={14} className="text-accent-500 shrink-0" />
                  Arunai Engineering College requirement shared by Department of Cyber Security.
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck size={14} className="text-accent-500 shrink-0" />
                  Official BE10X public program information.
                </li>
                <li className="flex items-start gap-2">
                  <ShieldCheck size={14} className="text-accent-500 shrink-0" />
                  Proposed program architecture created specifically for Arunai.
                </li>
              </ul>
              <div className="mt-4 p-3 bg-slate-900 rounded border border-slate-800">
                <p className="text-[10px] text-slate-500 italic">
                  Note: Distinguishes between "Current BE10X Offering" (Category A) and "Proposed Arunai Collaboration" (Category C) structures. Not a binding contract.
                </p>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
            <p>&copy; {new Date().getFullYear()} BE10X Proposal for Arunai Engineering College. Strictly Confidential.</p>
            <p>Prepared for: Dr. S. Mohanarangan, Prof. & Head – Dept of Cyber Security</p>
          </div>
        </div>
      </footer>
    </>
  );
};
