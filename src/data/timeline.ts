export const experience = [
  {
    id: 'exp-1',
    role: 'AI/ML Engineer',
    company: 'TechCorp AI', // UPDATE: Replace with your actual company
    location: 'San Francisco, CA (Remote)',
    startDate: '2023-06',
    endDate: 'present',
    current: true,
    description:
      'Lead ML initiatives for core product features. Design and deploy production ML systems serving 10M+ users. Mentor junior engineers and establish ML best practices.',
    achievements: [
      'Reduced model inference latency by 60% through quantization and TensorRT optimization',
      'Built automated retraining pipeline cutting model decay detection from weeks to hours',
      'Designed feature store adopted by 5 product teams, reducing feature engineering time by 40%',
      'Published internal ML platform documentation and conducted 10+ training workshops',
    ],
    techStack: ['PyTorch', 'TensorRT', 'Kubernetes', 'Feast', 'MLflow', 'Python', 'AWS'],
  },
  {
    id: 'exp-2',
    role: 'Machine Learning Engineer',
    company: 'DataFlow Analytics', // UPDATE: Replace with your actual company
    location: 'New York, NY',
    startDate: '2021-07',
    endDate: '2023-05',
    current: false,
    description:
      'Developed end-to-end ML solutions for enterprise clients across finance, healthcare, and retail. Owned full lifecycle from problem definition to production deployment.',
    achievements: [
      'Delivered 12+ client projects with 100% on-time delivery rate',
      'Built churn prediction system generating $2.4M annual retention value for fintech client',
      'Created reusable NLP pipeline reducing text classification project timeline from 8 to 3 weeks',
      'Established MLOps standards: CI/CD, monitoring, automated testing for ML models',
    ],
    techStack: ['TensorFlow', 'Scikit-learn', 'GCP', 'Vertex AI', 'BigQuery', 'Docker', 'Airflow'],
  },
  {
    id: 'exp-3',
    role: 'Data Science Intern',
    company: 'MIT Computer Science Lab', // UPDATE: Replace with your actual organization
    location: 'Cambridge, MA',
    startDate: '2020-06',
    endDate: '2021-06',
    current: false,
    description:
      'Research internship focused on computer vision for medical imaging. Collaborated on publications and open-source tooling.',
    achievements: [
      'Co-authored 2 peer-reviewed papers (MICCAI, IEEE TMI) on segmentation architectures',
      'Developed open-source preprocessing library for 3D medical volumes (500+ downloads)',
      'Implemented U-Net++ variant achieving SOTA on public organ segmentation benchmark',
    ],
    techStack: ['PyTorch', 'MONAI', 'NiBabel', 'SimpleITK', 'Weights & Biases'],
  },
] as const;

export const education = [
  {
    id: 'edu-1',
    degree: 'M.S. in Computer Science (Machine Learning)',
    institution: 'Stanford University',
    location: 'Stanford, CA',
    startDate: '2019',
    endDate: '2021',
    current: false,
    description: 'Focus: Deep Learning, Computer Vision, Optimization. GPA: 3.9/4.0',
    highlights: [
      'Thesis: "Efficient Transformer Architectures for Long-Sequence Modeling"',
      'TA for CS231n (Computer Vision) and CS224n (NLP with Deep Learning)',
      'Research assistant in Vision Lab (Prof. Fei-Fei Li)',
    ],
  },
  {
    id: 'edu-2',
    degree: 'B.S. in Computer Science & Mathematics',
    institution: 'MIT',
    location: 'Cambridge, MA',
    startDate: '2015',
    endDate: '2019',
    current: false,
    description: 'Double major with focus on algorithms, statistics, and systems. GPA: 3.8/4.0',
    highlights: [
      'Capstone: Distributed training framework for large-scale recommendation models',
      'ACM ICPC Regional Finalist (2017, 2018)',
      'Undergraduate researcher in Database Group (Prof. Michael Stonebraker)',
    ],
  },
] as const;

export type ExperienceEntry = (typeof experience)[0];
export type EducationEntry = (typeof education)[0];
