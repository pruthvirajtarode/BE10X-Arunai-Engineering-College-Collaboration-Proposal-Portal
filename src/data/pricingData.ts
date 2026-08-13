export interface PricingPackage {
  id: string;
  name: string;
  target: string;
  includes: string[];
  priceType: "Per Student" | "Per Batch" | "Institutional" | "Annual Package";
  priceValue: string;
}

export const packages: PricingPackage[] = [
  {
    id: "A",
    name: "Foundation",
    target: "Institutions wanting introductory AI exposure.",
    includes: ["AI Basics", "Generative AI", "Prompt Engineering", "Productivity", "Assessment", "Certification"],
    priceType: "Per Student",
    priceValue: "[TO BE CONFIRMED]"
  },
  {
    id: "B",
    name: "Skill Builder",
    target: "Institutions wanting practical skills.",
    includes: ["Foundation Modules", "AI + Cyber Security", "Hands-on Labs", "Projects", "Mentoring", "Career Readiness"],
    priceType: "Per Batch",
    priceValue: "[TO BE CONFIRMED]"
  },
  {
    id: "C",
    name: "Industry-Academia Partnership",
    target: "Institutions wanting a complete one-year ecosystem.",
    includes: ["Foundation Modules", "AI + Cyber Security", "VAC (30-45 Hrs)", "Projects & Labs", "Internship Pathway", "Faculty Development", "Assessment & Certification", "Employability Support", "Annual Academic Planning", "Institutional Review"],
    priceType: "Annual Package",
    priceValue: "[TO BE CONFIRMED]"
  }
];

export const additionalCosts = [
  { item: "GST", status: "[TO BE CONFIRMED]" },
  { item: "Travel (if offline)", status: "[IF APPLICABLE]" },
  { item: "Accommodation (if offline)", status: "[IF APPLICABLE]" },
  { item: "Learning Resources", status: "[INCLUDED / TO BE CONFIRMED]" },
  { item: "LMS Access", status: "[INCLUDED / TO BE CONFIRMED]" },
  { item: "Certification", status: "[INCLUDED / TO BE CONFIRMED]" },
  { item: "Internship", status: "[TO BE CONFIRMED]" },
  { item: "Faculty Development", status: "[TO BE CONFIRMED]" },
];
