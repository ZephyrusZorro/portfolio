export interface ExperienceEntry {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string[];
  technologies: string[];
  status: string;
  isActive?: boolean;
}

export const experiences: ExperienceEntry[] = [
  {
    id: 'exp-1',
    period: '03.2026 — PRESENT',
    role: 'FOUNDER & TECHNICAL LEAD',
    company: 'OMNIMATE',
    description: [
      'Architected custom automation workflows and backend infrastructure using Node.js, Express, and Django.',
      'Boosted client operational efficiency by approximately 30% through automated administrative and API integrations.',
      'Designed database schemas and managed full project lifecycles from requirements through cloud deployment.'
    ],
    technologies: ['NODE.JS', 'EXPRESS', 'DJANGO', 'AUTOMATION', 'CLOUD', 'POSTGRESQL'],
    status: 'ACTIVE',
    isActive: true
  },
  {
    id: 'exp-2',
    period: '02.2026 — PRESENT',
    role: 'AI INTERN',
    company: 'HADI AND TAIMUR AI',
    description: [
      'Engineered automated ML pattern extraction models and social media generation/scheduling pipelines using NLP.',
      'Constructed prompt orchestration routines for automated content synthesis and quality verification.'
    ],
    technologies: ['PYTHON', 'NLP', 'MACHINE LEARNING', 'AUTOMATION', 'LLM ORCHESTRATION'],
    status: 'ACTIVE',
    isActive: true
  },
  {
    id: 'exp-3',
    period: '02.2025 — 05.2025',
    role: 'CLOUD COMPUTING INTERN',
    company: 'MYJOBGROW',
    description: [
      'Deployed web applications across AWS and GCP, configured secure Virtual Private Clouds (VPC) and EC2 instances.',
      'Optimized cloud infrastructure expenses and established cloud security configurations.'
    ],
    technologies: ['AWS', 'GCP', 'EC2', 'VPC', 'CLOUD SECURITY', 'DEVOPS'],
    status: 'COMPLETED'
  },
  {
    id: 'exp-4',
    period: '10.2024 — 01.2025',
    role: 'AIML INTERN',
    company: 'ACMEGRADE',
    description: [
      'Fine-tuned supervised and unsupervised machine learning models, improving accuracy by 15%.',
      'Engineered feature extraction pipelines and conducted cross-validation for predictive analytics models.'
    ],
    technologies: ['PYTHON', 'SCIKIT-LEARN', 'MACHINE LEARNING', 'DATA ANALYSIS', 'FEATURE ENGINEERING'],
    status: 'COMPLETED'
  }
];
