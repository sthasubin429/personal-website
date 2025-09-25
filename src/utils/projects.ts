import customerChurn from '../assets/customerChurn.jpg';
import musicPlayer from '../assets/musicPlayer.jpg';
import streetFighter from '../assets/streetFighter.jpg';
import type { ProjectType } from './types';

export const featuredProjects: ProjectType[] = [
  {
    title: 'Groovy',
    imageUrl: musicPlayer.src,
    repoUrl: 'https://github.com/sthasubin429/groovy',
    description: `Full-stack music sharing application built with <span>React</span>, <span>Django</span>, and <span>Flask</span> featuring user authentication, file
                  upload/ streaming capabilities, and an integrated <span>RNN</span> - based <span>Music Generation Model</span>   that creates original piano
                  compositions in ABC notation.`,
    techStack: ['React', 'Django', 'Flask', 'Keras', 'RNN'],
  },
  {
    title: 'Telecom Customer Churn Analysis',
    imageUrl: customerChurn.src,
    repoUrl: 'https://github.com/sthasubin429/slpt',
    description: `End-to-end data analytics project analyzing telecom customer data to identify churn patterns and retention factors using <span>Python</span>, achieving 75% accuracy through <span>XGBoost Model</span> and feature engineering. Conducted comprehensive EDA with correlation analysis, implementation of <span>PCA</span> for dimensionality reduction and created interactive <span>Streamlit</span> dashboard for stakeholder presentations.`,
    techStack: ['Python', 'XGBoost', 'Pandas', 'PCA', 'Streamlit'],
  },
  {
    title: 'Street Fighter Clone',
    imageUrl: streetFighter.src,
    repoUrl:
      'https://github.com/sthasubin429/sthasubin429.github.io/tree/master/Assignments/FinalProject',
    description: `Browser-based fighting game developed with vanilla <span>JavaScript</span> implementing real-time multiplayer functionality, character selection system with 3 unique fighters, and responsive controls for 2-player local gameplay.`,
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
    projectUrl: 'https://sthasubin429.github.io/Assignments/FinalProject/',
  },
];
