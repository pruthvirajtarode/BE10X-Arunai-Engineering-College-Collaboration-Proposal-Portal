export interface CalendarMonth {
  month: string;
  activity: string;
  type: "training" | "exam-buffer" | "project" | "evaluation";
}

export const academicCalendar: CalendarMonth[] = [
  { month: "June", activity: "Institution Onboarding / Baseline Assessment", type: "evaluation" },
  { month: "July", activity: "AI Foundations", type: "training" },
  { month: "August", activity: "Generative AI + Prompt Engineering", type: "training" },
  { month: "September", activity: "AI + Cyber Security", type: "training" },
  { month: "October", activity: "EXAM BUFFER / NO REGULAR TRAINING", type: "exam-buffer" },
  { month: "November", activity: "EXAM BUFFER / NO REGULAR TRAINING", type: "exam-buffer" },
  { month: "December", activity: "Hands-on Labs", type: "training" },
  { month: "January", activity: "Projects", type: "project" },
  { month: "February", activity: "Project Mentoring", type: "project" },
  { month: "March", activity: "Internship / Career Readiness", type: "training" },
  { month: "April", activity: "EXAM BUFFER / NO REGULAR TRAINING", type: "exam-buffer" },
  { month: "May", activity: "EXAM BUFFER / NO REGULAR TRAINING", type: "exam-buffer" },
];
