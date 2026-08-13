import React from 'react';
import { MessageSquare, Code2, ArrowDown, Database, GitBranch } from 'lucide-react';

export const FeatureModules = () => {
  return (
    <section className="py-24 bg-secondary-900 border-t border-white/5 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Prompt Engineering */}
        <div className="mb-32">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 text-accent-400 mb-6 border border-slate-700">
              <MessageSquare size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Prompt Engineering & AI Productivity</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Teaching students how to effectively communicate with AI models to generate precise, structured, and secure outputs.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1 w-full grid grid-cols-2 gap-4">
              {['Prompt Structure', 'Role/Context/Task Framework', 'Few-Shot Prompting', 'Structured Output', 'Iterative Prompting', 'Prompt Evaluation', 'Hallucination Awareness', 'Security Analysis Prompts'].map((topic, i) => (
                <div key={i} className="bg-slate-800/50 border border-white/5 rounded-lg p-4 flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-500 mt-2 flex-shrink-0"></div>
                  <span className="text-sm text-slate-300 font-medium">{topic}</span>
                </div>
              ))}
            </div>

            <div className="flex-1 w-full flex flex-col items-center gap-3">
              <div className="w-full max-w-sm p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-center">
                <span className="text-red-400 text-sm font-semibold tracking-wider">BAD PROMPT</span>
              </div>
              <ArrowDown size={20} className="text-slate-600" />
              <div className="w-full max-w-sm p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl text-center">
                <span className="text-yellow-400 text-sm font-semibold tracking-wider">BETTER PROMPT</span>
              </div>
              <ArrowDown size={20} className="text-slate-600" />
              <div className="w-full max-w-sm p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl text-center">
                <span className="text-blue-400 text-sm font-semibold tracking-wider">STRUCTURED PROMPT</span>
              </div>
              <ArrowDown size={20} className="text-slate-600" />
              <div className="w-full max-w-sm p-5 bg-accent-500/20 border border-accent-500/50 rounded-xl text-center shadow-[0_0_20px_rgba(20,184,166,0.15)] ai-glow">
                <span className="text-accent-300 text-base font-bold tracking-wider">REUSABLE WORKFLOW</span>
              </div>
            </div>
          </div>
        </div>

        {/* AI Assisted Programming */}
        <div>
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-800 text-blue-400 mb-6 border border-slate-700">
              <Code2 size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Build Faster With AI-Assisted Programming</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Empowering students to write, debug, and document secure code significantly faster using AI tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { label: 'Code Generation', icon: <Code2 size={16} /> },
              { label: 'Debugging', icon: <Database size={16} /> },
              { label: 'Code Explanation', icon: <MessageSquare size={16} /> },
              { label: 'Refactoring', icon: <GitBranch size={16} /> },
              { label: 'Documentation', icon: <Database size={16} /> },
              { label: 'Testing', icon: <Code2 size={16} /> },
              { label: 'API Integration', icon: <GitBranch size={16} /> },
              { label: 'Git Workflows', icon: <GitBranch size={16} /> }
            ].map((item, i) => (
              <div key={i} className="glass-card rounded-xl p-4 flex flex-col items-center justify-center gap-3 text-center group hover:border-accent-500/30 transition-colors">
                <div className="text-slate-500 group-hover:text-accent-400 transition-colors">{item.icon}</div>
                <span className="text-sm font-medium text-slate-300">{item.label}</span>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-gradient-to-r from-slate-800 to-slate-900 border border-white/10 p-8 rounded-2xl text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 blur-[50px]"></div>
            <h4 className="text-accent-400 text-sm font-bold tracking-wider mb-2 uppercase">Practical Project Integration</h4>
            <h3 className="text-2xl font-bold text-white mb-4">"Build a Security-Aware AI Application"</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              Students will use AI coding assistants to scaffold, develop, and document a defensive security application, keeping implementation strictly ethical and defensive.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
