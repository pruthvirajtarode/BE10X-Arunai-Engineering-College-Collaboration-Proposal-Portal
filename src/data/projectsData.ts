export interface Project {
  title: string;
  category: "AI" | "Cyber Security" | "AI + Cyber";
  problem: string;
  aiComponent: string;
  cyberComponent?: string;
  learningOutcome: string;
  portfolioValue: string;
}

export const projects: Project[] = [
  {
    title: "AI-Powered Phishing Detection",
    category: "AI + Cyber",
    problem: "Identifying sophisticated phishing emails manually is slow.",
    aiComponent: "LLM prompt to evaluate email text and links.",
    cyberComponent: "Analyzing email headers and suspicious domains.",
    learningOutcome: "Integrate GenAI with security analysis.",
    portfolioValue: "High - demonstrates practical defensive AI usage."
  },
  {
    title: "Security Log Intelligence Dashboard",
    category: "AI + Cyber",
    problem: "Raw server logs are difficult to read and interpret.",
    aiComponent: "AI summarizes and highlights anomalies.",
    cyberComponent: "Parsing Apache/Nginx logs.",
    learningOutcome: "Handle real-world security data.",
    portfolioValue: "High - visual dashboard with AI backend."
  },
  {
    title: "Document Intelligence System",
    category: "AI",
    problem: "Extracting key information from long academic PDFs.",
    aiComponent: "RAG (Retrieval-Augmented Generation) concept.",
    learningOutcome: "Understand how AI processes documents.",
    portfolioValue: "Medium - standard AI application."
  },
  {
    title: "Threat Intelligence Research Assistant",
    category: "AI + Cyber",
    problem: "Correlating multiple threat feeds is time-consuming.",
    aiComponent: "AI synthesizes multiple sources into one report.",
    cyberComponent: "Understanding IOCs (Indicators of Compromise).",
    learningOutcome: "Automate threat intelligence gathering.",
    portfolioValue: "High - relevant to SOC analyst roles."
  },
  {
    title: "Anomaly Detection System",
    category: "Cyber Security",
    problem: "Finding outliers in network traffic.",
    aiComponent: "Basic ML clustering/classification.",
    cyberComponent: "Understanding network traffic patterns.",
    learningOutcome: "Apply ML to security.",
    portfolioValue: "Very High - advanced project."
  },
  {
    title: "Security Documentation Assistant",
    category: "AI + Cyber",
    problem: "Writing incident reports takes too long.",
    aiComponent: "Structured generation based on templates.",
    cyberComponent: "Incident response frameworks.",
    learningOutcome: "Automate administrative security tasks.",
    portfolioValue: "Medium - practical workflow tool."
  }
];
