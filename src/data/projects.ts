export const projects = [
  {
    id: 'project-1',
    title: 'Visual Defect Detection System',
    description:
      'End-to-end computer vision pipeline for automated manufacturing defect detection. Achieved 97.3% accuracy on production line data using YOLOv8 + custom augmentation strategies. Deployed on edge devices with TensorRT optimization for <15ms inference.',
    longDescription: `Developed a complete MLOps pipeline for real-time visual inspection in manufacturing. The system processes high-resolution camera feeds to detect surface defects (scratches, dents, discoloration) with sub-20ms latency.

Key achievements:
- Curated and annotated 50K+ images with active learning workflow
- Implemented test-time augmentation and ensemble inference for robustness
- Built FastAPI serving layer with batch processing and health monitoring
- Reduced false positive rate from 12% to 2.1% through hard negative mining
- Integrated with PLC systems for automated rejection signaling`,
    techStack: ['PyTorch', 'YOLOv8', 'TensorRT', 'FastAPI', 'Docker', 'ONNX', 'MLflow', 'OpenCV'],
    category: 'Computer Vision',
    links: {
      github: 'https://github.com/noahnerius/visual-defect-detection',
      demo: null,
      paper: null,
    },
    featured: true,
    year: 2024,
    metrics: {
      accuracy: '97.3%',
      latency: '<15ms',
      dataset: '50K+ images',
      improvement: '82% FP reduction',
    },
  },
  {
    id: 'project-2',
    title: 'RAG-Powered Technical Documentation Assistant',
    description:
      'Production RAG system for querying 10K+ technical documents with hybrid search (dense + sparse retrieval). Implemented reranking, citation tracking, and hallucination detection. Serves 500+ daily queries with 92% user satisfaction.',
    longDescription: `Built a retrieval-augmented generation system for internal engineering teams to query technical specifications, API docs, and incident reports. The system combines semantic search with keyword-based retrieval for optimal recall.

Architecture highlights:
- Hybrid retrieval: FAISS (dense) + BM25 (sparse) with reciprocal rank fusion
- Cross-encoder reranking (ms-marco-MiniLM-L-6-v2) for precision
- Chunking strategy optimized for technical content (section-aware, 512 tokens)
- Citation generation with source document linking
- Hallucination guard: consistency check between generated answer and retrieved context
- Feedback loop: user ratings → automatic evaluation dataset expansion`,
    techStack: [
      'LangChain',
      'FAISS',
      'Sentence Transformers',
      'FastAPI',
      'PostgreSQL',
      'Redis',
      'Docker',
      'OpenAI API',
    ],
    category: 'NLP / LLMs',
    links: {
      github: 'https://github.com/noahnerius/rag-docs-assistant',
      demo: null,
      paper: null,
    },
    featured: true,
    year: 2024,
    metrics: {
      satisfaction: '92%',
      queriesPerDay: '500+',
      documents: '10K+',
      latency: '<2s p95',
    },
  },
  {
    id: 'project-3',
    title: 'Time Series Anomaly Detection for IoT Sensors',
    description:
      'Unsupervised anomaly detection for multivariate sensor streams using LSTM-VAE architecture. Detects equipment failures 48+ hours before critical thresholds. Deployed on 200+ sensor nodes with automated alerting.',
    longDescription: `Designed and deployed a scalable anomaly detection system for industrial IoT sensor networks. The model learns normal operational patterns and flags deviations indicative of impending failures.

Technical approach:
- Multivariate LSTM-VAE with attention for temporal dependencies
- Sliding window preprocessing with statistical feature augmentation
- Dynamic thresholding using extreme value theory (EVT)
- Online learning capability for concept drift adaptation
- Grafana + Alertmanager integration for operations team
- Achieved 89% precision at 94% recall on historical failure data`,
    techStack: ['PyTorch', 'Kafka', 'InfluxDB', 'Grafana', 'Docker', 'Kubernetes', 'Prometheus'],
    category: 'Time Series / IoT',
    links: {
      github: 'https://github.com/noahnerius/iot-anomaly-detection',
      demo: null,
      paper: null,
    },
    featured: true,
    year: 2023,
    metrics: {
      leadTime: '48+ hours',
      precision: '89%',
      recall: '94%',
      sensors: '200+ nodes',
    },
  },
  {
    id: 'project-4',
    title: 'Customer Churn Prediction Platform',
    description:
      'Full-stack ML platform predicting customer churn with 91% AUC. Features automated feature store, model versioning, A/B testing framework, and explainable predictions via SHAP. Integrated with CRM for targeted retention campaigns.',
    longDescription: `Built an end-to-end customer intelligence platform for a SaaS business. The system ingests behavioral, transactional, and support data to predict churn risk at the account level.

Platform capabilities:
- Automated feature engineering pipeline (200+ features) with Feast feature store
- Gradient boosting (XGBoost/LightGBM) with Optuna hyperparameter optimization
- SHAP-based explanations for every prediction (global + local)
- Champion/challenger A/B testing with statistical significance guards
- CRM (Salesforce) integration for automated outreach workflows
- Model monitoring: data drift, concept drift, performance degradation alerts`,
    techStack: ['XGBoost', 'SHAP', 'Feast', 'MLflow', 'FastAPI', 'PostgreSQL', 'Airflow', 'Docker'],
    category: 'Tabular ML / Business Analytics',
    links: {
      github: 'https://github.com/noahnerius/churn-prediction-platform',
      demo: null,
      paper: null,
    },
    featured: false,
    year: 2023,
    metrics: {
      auc: '91%',
      features: '200+',
      campaignROI: '3.2x',
      accountsScored: '50K+/month',
    },
  },
  {
    id: 'project-5',
    title: 'Open-Source: ML Experiment Tracker',
    description:
      'Lightweight experiment tracking library for PyTorch with automatic hyperparameter logging, metric visualization, and Git integration. 500+ GitHub stars, used in 50+ projects. Published to PyPI.',
    longDescription: `Created a developer-friendly experiment tracking tool that integrates seamlessly with existing PyTorch workflows. Zero-config setup with powerful querying and comparison features.

Features:
- Automatic capture: hyperparameters, metrics, artifacts, Git commit, environment
- Real-time dashboard with metric plots, parallel coordinates, hyperparameter importance
- Experiment comparison with diff view
- Artifact versioning (models, datasets, predictions)
- CLI for querying and exporting results
- Extensible backend: local filesystem, S3, PostgreSQL`,
    techStack: ['Python', 'PyTorch', 'SQLAlchemy', 'Plotly', 'Typer', 'Rich', 'PyPI'],
    category: 'Open Source / MLOps',
    links: {
      github: 'https://github.com/noahnerius/ml-experiment-tracker',
      demo: null,
      paper: null,
    },
    featured: false,
    year: 2024,
    metrics: {
      stars: '500+',
      downloads: '10K+/month',
      contributors: '12',
      projects: '50+',
    },
  },
] as const;

export type Project = (typeof projects)[0];
