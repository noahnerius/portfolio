export const skills = [
  {
    category: 'Machine Learning & AI',
    icon: 'Brain',
    items: [
      { name: 'PyTorch', level: 90 },
      { name: 'TensorFlow / Keras', level: 85 },
      { name: 'Scikit-learn', level: 90 },
      { name: 'Hugging Face Transformers', level: 85 },
      { name: 'OpenCV', level: 80 },
      { name: 'MLOps (MLflow, DVC)', level: 70 },
    ],
  },
  {
    category: 'Deep Learning Specializations',
    icon: 'Network',
    items: [
      { name: 'Computer Vision (CNNs, ViT, YOLO)', level: 85 },
      { name: 'NLP (Transformers, BERT, LLMs)', level: 85 },
      { name: 'Generative AI (GANs, Diffusion, RAG)', level: 75 },
      { name: 'Time Series Forecasting', level: 70 },
      { name: 'Reinforcement Learning', level: 60 },
    ],
  },
  {
    category: 'Data & Analytics',
    icon: 'Database',
    items: [
      { name: 'Python (Pandas, NumPy, Polars)', level: 95 },
      { name: 'SQL (PostgreSQL, BigQuery)', level: 85 },
      { name: 'Data Visualization (Matplotlib, Plotly, Tableau)', level: 80 },
      { name: 'Feature Engineering & Pipelines', level: 85 },
      { name: 'Statistical Analysis & A/B Testing', level: 80 },
      { name: 'Big Data (Spark, Ray)', level: 65 },
    ],
  },
  {
    category: 'Engineering & Deployment',
    icon: 'Cpu',
    items: [
      { name: 'Docker & Containerization', level: 80 },
      { name: 'Cloud (AWS/GCP/Azure)', level: 75 },
      { name: 'CI/CD (GitHub Actions, GitLab)', level: 80 },
      { name: 'REST APIs & FastAPI', level: 85 },
      { name: 'Model Serving (TensorRT, ONNX, Triton)', level: 70 },
      { name: 'Version Control (Git)', level: 95 },
    ],
  },
  {
    category: 'Core CS & Tools',
    icon: 'Code',
    items: [
      { name: 'Algorithms & Data Structures', level: 85 },
      { name: 'Software Design Patterns', level: 80 },
      { name: 'Testing (Pytest, Unit/Integration)', level: 80 },
      { name: 'Linux & Shell Scripting', level: 80 },
      { name: 'Jupyter & VS Code', level: 95 },
    ],
  },
] as const;

export type SkillCategory = (typeof skills)[number];
export type SkillItem = (typeof skills)[number]['items'][number];
