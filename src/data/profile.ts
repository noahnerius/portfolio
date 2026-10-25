export const profile = {
  name: 'Noah Nerius P',
  title: 'AI/ML Engineer',
  tagline: 'Building intelligent systems that solve real-world problems',
  bio: `I'm an AI/ML Engineer passionate about transforming complex data into actionable intelligence. With a strong foundation in machine learning, deep learning, and data analytics, I design and deploy models that drive measurable impact.

My expertise spans the full ML lifecycle — from data exploration and feature engineering to model architecture, training optimization, and production deployment. I'm particularly interested in computer vision, natural language processing, and scalable ML systems.

When I'm not experimenting with new architectures, you'll find me contributing to open-source projects, reading research papers, or mentoring aspiring data scientists.`,
  email: 'noah.nerius.p@gmail.com', // UPDATE: Replace with your actual email
  location: 'San Francisco Bay Area, USA', // UPDATE: Replace with your actual location
  availability: 'Open to internships & full-time roles',
  resumePath: '/resume.pdf',
  social: {
    github: 'https://github.com/noahnerius',
    linkedin: 'https://linkedin.com/in/noahnerius', // UPDATE: Verify your LinkedIn URL
    twitter: 'https://twitter.com/noahnerius', // UPDATE: Add your Twitter/X if applicable
  },
};

export type Profile = typeof profile;
