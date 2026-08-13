import React from 'react';
import { Briefcase, Users, Target, Award, LineChart } from 'lucide-react';

export const SupportEcosystem = () => {
  return (
    <>
      {/* Internship Pathway */}
      <section className="py-24 bg-primary-900 border-t border-white/5 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Internship Pathway</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Flexible proposed models to provide students with real-world exposure and project experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {[
              { title: "MODEL A", name: "Short-Term Internship", desc: "Intensive 4-6 week project-based exposure." },
              { title: "MODEL B", name: "8–12 Week Internship", desc: "Deep dive into specific security workflows." },
              { title: "MODEL C", name: "3-Month Project Internship", desc: "Extended engagement for capstone delivery." },
              { title: "MODEL D", name: "Extended Internship", desc: "Long-term industry immersion (6 months)." }
            ].map((model, i) => (
              <div key={i} className="glass-card p-6 rounded-xl text-center hover:border-accent-500/30 transition-colors">
                <span className="text-xs font-bold text-accent-500 tracking-wider mb-2 block">{model.title}</span>
                <h3 className="text-white font-bold mb-2">{model.name}</h3>
                <p className="text-xs text-slate-400">{model.desc}</p>
              </div>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-center p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
            <p className="text-sm text-slate-300 italic">
              "Internship duration, selection, project allocation, mentor availability and eligibility will be finalized based on institutional requirements and BE10X program capacity."
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Development & Mentoring */}
      <section className="py-24 bg-secondary-900 border-t border-white/5 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* FDP */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg text-blue-400">
                  <Users size={24} />
                </div>
                <h2 className="text-3xl font-bold">Faculty Development</h2>
              </div>
              <p className="text-slate-400 mb-8">
                Empowering Arunai's faculty with GenAI tools for teaching, research, and content creation.
              </p>
              
              <ul className="space-y-3 mb-8">
                {[
                  "Generative AI for Teaching & Research",
                  "Prompt Engineering for Faculty",
                  "AI-Assisted Academic Content Creation",
                  "AI for Research & Literature Discovery",
                  "AI in Cyber Security Education",
                  "AI-enabled Assessment Design"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {item}
                  </li>
                ))}
              </ul>
              
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 bg-slate-800 text-xs text-slate-400 rounded border border-slate-700">1-day FDP</span>
                <span className="px-3 py-1 bg-slate-800 text-xs text-slate-400 rounded border border-slate-700">2-day FDP</span>
                <span className="px-3 py-1 bg-slate-800 text-xs text-slate-400 rounded border border-slate-700">Custom FDP</span>
              </div>
              <p className="text-xs text-slate-500 italic mt-3">*Proposed formats — final structure to be jointly finalized.</p>
            </div>

            {/* Mentoring Pipeline */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent-500/10 rounded-lg text-accent-400">
                  <Target size={24} />
                </div>
                <h2 className="text-3xl font-bold">Project Mentoring</h2>
              </div>
              <p className="text-slate-400 mb-8">
                Structured support pipeline to take students from ideation to final viva.
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {["IDEATION", "PROBLEM DEFINITION", "TECH SELECTION", "ARCHITECTURE", "IMPLEMENTATION", "TESTING", "DOCUMENTATION", "PRESENTATION", "VIVA"].map((step, i) => (
                  <React.Fragment key={i}>
                    <span className="text-xs font-bold text-slate-300 bg-slate-800 px-2 py-1 rounded">{step}</span>
                    {i < 8 && <span className="text-slate-600">→</span>}
                  </React.Fragment>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 glass-card rounded-lg border-white/5">
                  <h4 className="text-xs text-accent-400 font-bold mb-2">Technical Guidance</h4>
                  <p className="text-xs text-slate-400">Architecture, Git/GitHub, coding guidance, and AI integration.</p>
                </div>
                <div className="p-4 glass-card rounded-lg border-white/5">
                  <h4 className="text-xs text-accent-400 font-bold mb-2">Academic Support</h4>
                  <p className="text-xs text-slate-400">Documentation, PPT creation, and Viva preparation.</p>
                </div>
              </div>
              <p className="text-xs text-slate-500 italic mt-3">*Proposed mentoring model based on program tier.</p>
            </div>

          </div>
        </div>
      </section>

      {/* Assessment & Employability */}
      <section className="py-24 bg-primary-900 border-t border-white/5 relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Assessment */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Measure Learning. Validate Skills.</h2>
              <p className="text-slate-400 mb-8">A comprehensive evaluation framework to ensure academic rigor and practical capability.</p>
              
              <div className="space-y-4 mb-8">
                <div className="p-4 bg-slate-800/50 rounded-lg border-l-2 border-l-slate-500">
                  <h4 className="text-sm font-bold text-white mb-1">Entry / Diagnostic</h4>
                  <p className="text-xs text-slate-400">Baseline quizzes and prior knowledge surveys to adapt learning delivery.</p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border-l-2 border-l-accent-500">
                  <h4 className="text-sm font-bold text-white mb-1">During Program</h4>
                  <p className="text-xs text-slate-400">Quizzes, assignments, lab tasks, prompt challenges, and project milestones.</p>
                </div>
                <div className="p-4 bg-slate-800/50 rounded-lg border-l-2 border-l-blue-500">
                  <h4 className="text-sm font-bold text-white mb-1">Final Evaluation</h4>
                  <p className="text-xs text-slate-400">Project submission, presentation, viva, and final assessment.</p>
                </div>
              </div>

              <div className="p-4 glass-card rounded-xl border-accent-500/20 flex items-start gap-4">
                <Award className="text-accent-400 shrink-0 mt-1" size={24} />
                <div>
                  <h4 className="text-sm font-bold text-white mb-1">Certification</h4>
                  <p className="text-xs text-slate-400">BE10X Certificate / Participation or Completion Certificate — subject to final program structure and institutional agreement.</p>
                </div>
              </div>
            </div>

            {/* Employability */}
            <div>
              <h2 className="text-3xl font-bold mb-4">From Skills to Employability</h2>
              <p className="text-slate-400 mb-8">Placement-readiness support focused on translating technical skills into career opportunities.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Resume & Profile", items: ["ATS-friendly resume", "Project descriptions", "AI skill positioning"] },
                  { title: "GitHub & Portfolio", items: ["Repository structure", "README documentation", "Project showcasing"] },
                  { title: "Interview Prep", items: ["Technical interview", "Project explanation", "HR interview techniques"] },
                  { title: "Communication", items: ["Professional branding", "LinkedIn optimization", "Explaining technical concepts"] }
                ].map((block, i) => (
                  <div key={i} className="p-5 glass-card rounded-xl border-white/5">
                    <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                      <LineChart size={16} className="text-accent-400" />
                      {block.title}
                    </h4>
                    <ul className="space-y-2">
                      {block.items.map((item, j) => (
                        <li key={j} className="text-xs text-slate-400 flex items-start gap-2">
                          <span className="text-accent-500 mt-0.5">›</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
