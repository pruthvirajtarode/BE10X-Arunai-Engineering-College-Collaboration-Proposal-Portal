export interface Module {
  id: string;
  title: string;
  learn: string;
  activity: string;
  outcome: string;
}

export const aiFoundationModules: Module[] = [
  {
    id: "01",
    title: "Introduction to AI",
    learn: "Core concepts of AI, history, and modern applications.",
    activity: "Explore AI vs Non-AI systems.",
    outcome: "Understand what AI is and isn't."
  },
  {
    id: "02",
    title: "Machine Learning Fundamentals",
    learn: "Supervised vs Unsupervised learning, basic model training.",
    activity: "Train a simple classification model using a visual tool.",
    outcome: "Grasp how machines learn from data."
  },
  {
    id: "03",
    title: "Generative AI Fundamentals",
    learn: "How GenAI differs from traditional AI, core architectures.",
    activity: "Compare outputs from different GenAI models.",
    outcome: "Understand the mechanics of text and image generation."
  },
  {
    id: "04",
    title: "Large Language Models",
    learn: "Transformers, tokens, context windows, and limitations.",
    activity: "Analyze context limits and hallucination examples.",
    outcome: "Effectively navigate LLM capabilities and boundaries."
  },
  {
    id: "05",
    title: "Prompt Engineering",
    learn: "Role, Context, Task, Output framework, few-shot prompting.",
    activity: "Refine a basic prompt into a structured, high-quality prompt.",
    outcome: "Write prompts that produce consistent, accurate results."
  },
  {
    id: "06",
    title: "AI Productivity Tools",
    learn: "Overview of industry-standard AI tools for workflow enhancement.",
    activity: "Automate a repetitive academic or administrative task.",
    outcome: "Save time using appropriate AI productivity tools."
  },
  {
    id: "07",
    title: "Research & Information Synthesis",
    learn: "Using AI for literature review, summarization, and ideation.",
    activity: "Synthesize a complex topic using multiple AI assistants.",
    outcome: "Accelerate research while maintaining academic integrity."
  },
  {
    id: "08",
    title: "AI for Documents & Presentations",
    learn: "Creating outlines, drafting content, and designing slides with AI.",
    activity: "Generate a complete presentation outline and draft.",
    outcome: "Streamline the creation of professional documents."
  },
  {
    id: "09",
    title: "AI-Assisted Programming",
    learn: "Code generation, debugging, and explanation using AI.",
    activity: "Use AI to write and debug a Python script.",
    outcome: "Write and understand code faster with AI assistants."
  },
  {
    id: "10",
    title: "AI Agents & Automation",
    learn: "Introductory concepts of autonomous agents and workflows.",
    activity: "Set up a basic multi-step automated workflow.",
    outcome: "Understand the future of AI-driven automation."
  },
  {
    id: "11",
    title: "Responsible AI",
    learn: "Bias, ethics, security privacy, and responsible usage guidelines.",
    activity: "Identify potential biases in an AI-generated dataset.",
    outcome: "Use AI ethically and securely."
  },
  {
    id: "12",
    title: "AI Project Development",
    learn: "End-to-end lifecycle of building an AI-integrated mini-project.",
    activity: "Build a conceptual AI prototype.",
    outcome: "Apply all learned concepts to a unified project."
  }
];

export const cyberAiModules: Module[] = [
  {
    id: "01",
    title: "AI for Cyber Security — Introduction",
    learn: "Intersection of AI and InfoSec, defensive vs offensive AI.",
    activity: "Analyze case studies of AI in modern security.",
    outcome: "Understand how AI transforms the cyber landscape."
  },
  {
    id: "02",
    title: "Threat Intelligence with AI",
    learn: "Using AI to parse, summarize, and correlate threat feeds.",
    activity: "Use an LLM to extract IOCs from a threat report.",
    outcome: "Accelerate threat intelligence gathering."
  },
  {
    id: "03",
    title: "AI-Assisted Security Research",
    learn: "Discovering vulnerabilities and researching exploits safely.",
    activity: "Research a known CVE using AI assistance.",
    outcome: "Quickly comprehend complex security vulnerabilities."
  },
  {
    id: "04",
    title: "Phishing Detection & Analysis",
    learn: "Analyzing emails, domains, and payloads using AI.",
    activity: "Build an AI prompt to evaluate phishing emails.",
    outcome: "Identify social engineering attacks faster."
  },
  {
    id: "05",
    title: "Malware Analysis Concepts using AI",
    learn: "Using AI to explain obfuscated code and scripts (defensive only).",
    activity: "Use AI to deobfuscate and explain a harmless script.",
    outcome: "Understand malicious scripts through AI explanation."
  },
  {
    id: "06",
    title: "Log Analysis & Security Event Interpretation",
    learn: "Parsing massive server logs to find anomalies.",
    activity: "Analyze a sample Apache log file using an AI assistant.",
    outcome: "Spot suspicious patterns in log files."
  },
  {
    id: "07",
    title: "Anomaly Detection Fundamentals",
    learn: "Basic machine learning concepts for detecting outliers.",
    activity: "Visualize normal vs anomalous network traffic data.",
    outcome: "Grasp how ML detects deviations from baselines."
  },
  {
    id: "08",
    title: "AI for Security Automation",
    learn: "Automating routine SOC tasks and alert triaging.",
    activity: "Design a conceptual automated triage workflow.",
    outcome: "Reduce alert fatigue using AI."
  },
  {
    id: "09",
    title: "Security Documentation using AI",
    learn: "Drafting incident reports and policy documents.",
    activity: "Draft a mock incident response report with AI.",
    outcome: "Create professional security documentation quickly."
  },
  {
    id: "10",
    title: "Prompt Engineering for Security Analysts",
    learn: "Advanced prompts for specific security tasks.",
    activity: "Create a library of reusable security prompts.",
    outcome: "Master LLM interaction for security workflows."
  },
  {
    id: "11",
    title: "Responsible / Secure Use of Generative AI",
    learn: "Data privacy, prompt injection, and secure AI usage.",
    activity: "Demonstrate a prompt injection attack in a safe sandbox.",
    outcome: "Use GenAI tools without compromising sensitive data."
  },
  {
    id: "12",
    title: "AI + Cyber Security Capstone",
    learn: "Integrating all skills into a defensive security project.",
    activity: "Build a defensive AI-assisted workflow.",
    outcome: "Demonstrate practical AI+Cyber capability."
  }
];
