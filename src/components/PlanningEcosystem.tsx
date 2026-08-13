import React from 'react';
import { academicCalendar } from '../data/calendarData';
import { Calendar, Monitor, Users, Laptop, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export const PlanningEcosystem = () => {
  return (
    <>
      {/* Delivery Modes & Rural Support */}
      <section className="py-24 bg-secondary-900 border-t border-white/5 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Delivery Options</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Final delivery mode can be aligned with Arunai's academic calendar and infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24">
            {[
              { title: "ONLINE", icon: <Laptop />, items: ["Live sessions", "Digital resources", "Remote labs where applicable", "Online mentoring"] },
              { title: "OFFLINE", icon: <Users />, items: ["Classroom delivery", "Live demonstrations", "Hands-on lab sessions", "Faculty/student interaction"] },
              { title: "HYBRID", icon: <Monitor />, items: ["On-campus intensive sessions", "Online reinforcement", "Digital resources", "Remote mentoring"] }
            ].map((mode, i) => (
              <div key={i} className="p-8 glass-card rounded-2xl border-white/10 text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-accent-400 mx-auto mb-6 border border-slate-700">
                  {mode.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{mode.title}</h3>
                <ul className="text-left space-y-3">
                  {mode.items.map((item, j) => (
                    <li key={j} className="text-sm text-slate-300 flex items-start gap-2">
                      <CheckCircle2 size={16} className="text-accent-500 shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Rural Support */}
          <div className="max-w-4xl mx-auto bg-primary-900 border border-accent-500/30 rounded-2xl p-8 md:p-12 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 blur-[50px]"></div>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Designed for Diverse Learning Backgrounds</h2>
            <p className="text-slate-400 leading-relaxed max-w-2xl mx-auto mb-8">
              We understand Arunai serves students from rural and semi-urban backgrounds with diverse levels of prior AI exposure. Our pedagogy is structured to ensure no student is left behind.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Beginner-friendly onboarding", "Foundational learning first", "Step-by-step labs", 
                "Structured notes", "Mentor support", "Practical exercises", 
                "Peer learning", "Project templates", "Recorded resources (if applicable)"
              ].map((item, i) => (
                <span key={i} className="px-4 py-2 bg-slate-800/80 rounded-full text-xs font-semibold text-slate-300 border border-slate-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
      <section id="calendar" className="py-24 bg-primary-900 border-t border-white/5 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-accent-400 text-xs font-semibold tracking-wider uppercase mb-6">
              <Calendar size={14} />
              <span>Calendar Constraints Respected</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Academic Calendar-Aligned Delivery</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Illustrative academic schedule — final dates to be jointly aligned with the university examination calendar.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-x-auto pb-8">
            <div className="flex min-w-[800px] gap-2">
              {academicCalendar.map((month, i) => (
                <div key={i} className="flex-1 flex flex-col">
                  <div className={`p-3 text-center text-xs font-bold uppercase rounded-t-lg border-b-2 ${
                    month.type === 'exam-buffer' 
                      ? 'bg-red-950/40 text-red-400 border-red-500/50' 
                      : month.type === 'training'
                        ? 'bg-accent-950/40 text-accent-400 border-accent-500/50'
                        : 'bg-blue-950/40 text-blue-400 border-blue-500/50'
                  }`}>
                    {month.month}
                  </div>
                  <div className={`flex-1 p-3 text-center flex items-center justify-center text-xs rounded-b-lg border-x border-b ${
                    month.type === 'exam-buffer' 
                      ? 'bg-red-950/10 text-red-300/80 border-red-500/20' 
                      : 'bg-slate-800/20 text-slate-300 border-white/5'
                  }`}>
                    {month.activity}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8 max-w-3xl mx-auto p-4 bg-slate-800/50 border border-slate-700 rounded-lg flex items-start gap-4">
            <div className="text-accent-500 mt-1"><CheckCircle2 size={20} /></div>
            <div>
              <h4 className="text-sm font-bold text-white mb-1">Constraints Verified</h4>
              <p className="text-xs text-slate-400">
                The schedule explicitly avoids regular training during ODD SEMESTER (October–November) and EVEN SEMESTER (April–May) to accommodate university practicals and examinations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Model */}
      <section className="py-24 bg-secondary-900 border-t border-white/5 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Proposed One-Year Industry–Academia Collaboration</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A comprehensive timeline transforming students from beginners to industry-ready professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Semester 1 */}
            <div className="glass-card rounded-2xl overflow-hidden border border-accent-500/30 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 blur-[50px]"></div>
              <div className="bg-slate-900 p-6 border-b border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-accent-500 uppercase tracking-wider mb-1 block">Semester 1</span>
                  <h3 className="text-xl font-bold text-white">"BUILD THE FOUNDATION"</h3>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {["AI FOUNDATION", "GENERATIVE AI", "PROMPT ENGINEERING", "AI PRODUCTIVITY", "INTRODUCTION TO CYBER SECURITY APPLICATIONS"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-accent-500 text-xs shrink-0 border border-slate-700">
                        0{i+1}
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Semester 2 */}
            <div className="glass-card rounded-2xl overflow-hidden border border-blue-500/30 relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 blur-[50px]"></div>
              <div className="bg-slate-900 p-6 border-b border-white/10 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-400 uppercase tracking-wider mb-1 block">Semester 2</span>
                  <h3 className="text-xl font-bold text-white">"BUILD THE PORTFOLIO"</h3>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {["AI + CYBER SPECIALIZATION", "PROJECTS", "INTERNSHIP", "FACULTY DEVELOPMENT", "CAREER READINESS"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold text-slate-300">
                      <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-blue-400 text-xs shrink-0 border border-slate-700">
                        0{i+6}
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
