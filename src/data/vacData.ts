export interface VAC {
  id: string;
  title: string;
  duration: string;
  description: string;
  modules: string[];
  project: string;
}

export const vacOptions: VAC[] = [
  {
    id: "A",
    title: "Generative AI & Prompt Engineering for Cyber Security",
    duration: "36 hours",
    description: "Proposed VAC — Final syllabus subject to institutional discussion. Focuses on leveraging GenAI for security workflows.",
    modules: ["GenAI Basics", "Prompt Frameworks", "Security Log Analysis", "Threat Intel Summarization"],
    project: "AI-Powered Threat Intelligence Summarizer"
  },
  {
    id: "B",
    title: "AI-Assisted Cyber Security & Threat Intelligence",
    duration: "40 hours",
    description: "Proposed VAC — Final syllabus subject to institutional discussion. Deep dive into practical AI applications for InfoSec.",
    modules: ["AI for InfoSec", "Phishing Detection", "Anomaly Detection Concepts", "Security Automation"],
    project: "Automated Phishing Analysis Tool"
  },
  {
    id: "C",
    title: "AI-Assisted Programming & Project Development",
    duration: "40 hours",
    description: "Proposed VAC — Final syllabus subject to institutional discussion. Build secure applications faster with AI coding assistants.",
    modules: ["AI Coding Assistants", "Secure Code Generation", "Debugging with AI", "API Integration"],
    project: "Secure AI Chatbot Implementation"
  },
  {
    id: "D",
    title: "Generative AI, Automation & Productivity",
    duration: "30 hours",
    description: "Proposed VAC — Final syllabus subject to institutional discussion. General productivity enhancement for students.",
    modules: ["AI Workflows", "Document Generation", "Research Assistants", "Task Automation"],
    project: "Automated Academic Research Assistant"
  },
  {
    id: "E",
    title: "Cyber Security Analytics with AI",
    duration: "45 hours",
    description: "Proposed VAC — Final syllabus subject to institutional discussion. Advanced data analysis for security events.",
    modules: ["Data Parsing", "Log Analysis", "Pattern Recognition", "Incident Reporting with AI"],
    project: "Security Log Intelligence Dashboard"
  }
];
