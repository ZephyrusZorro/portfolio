export interface SkillCategory {
  id: string;
  iconName: 'Server' | 'Brain' | 'Cloud' | 'LayoutGrid';
  title: string;
  subtitle: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend-saas',
    iconName: 'Server',
    title: 'BACKEND & SAAS ARCHITECTURE',
    subtitle: 'SERVER-SIDE ENGINEERING',
    skills: [
      'Node.js',
      'Express',
      'Django',
      'Python',
      'Java',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'REST APIs',
      'System Design'
    ]
  },
  {
    id: 'ai-ml',
    iconName: 'Brain',
    title: 'AI / ML / PROMPT ENGINEERING',
    subtitle: 'INTELLIGENCE SYSTEMS',
    skills: [
      'OpenAI',
      'Scikit-Learn',
      'TensorFlow',
      'NLP',
      'Prompt Optimization',
      'ElevenLabs',
      'n8n',
      'Context Orchestration',
      'Whisper'
    ]
  },
  {
    id: 'cloud-infra',
    iconName: 'Cloud',
    title: 'CLOUD & INFRASTRUCTURE',
    subtitle: 'DEVOPS & DEPLOYMENT',
    skills: [
      'AWS (EC2, S3, VPC)',
      'Google Cloud Platform',
      'Docker',
      'CI/CD Pipelines',
      'Git / GitHub',
      'Linux Admin'
    ]
  },
  {
    id: 'system-design',
    iconName: 'LayoutGrid',
    title: 'SYSTEM & INTERFACE DESIGN',
    subtitle: 'ARCHITECTURE & UX',
    skills: [
      'Figma (UI/UX)',
      'Agile Methodology',
      'System Architecture',
      'Context Window Orchestration',
      'API Design',
      'Database Modeling'
    ]
  }
];
