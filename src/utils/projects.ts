import customerChurn from '../assets/customerChurn.jpg';
import musicPlayer from '../assets/musicPlayer.jpg';
import streetFighter from '../assets/streetFighter.jpg';
import type { ArchiveProjectType, ProjectType } from './types';

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

export const archiveProjects: ArchiveProjectType[] = [
  // 2025 Projects
  {
    year: 2025,
    title: 'Telecom Customer Churn Analysis',
    techStack: ['Python', 'XGBoost', 'Pandas', 'PCA', 'Streamlit'],
    repoUrl: 'https://github.com/sthasubin429/slpt',
    category: 'Data Analytics',
  },
  {
    year: 2025,
    title: 'CPSC Assignment 3',
    techStack: ['Python', 'Jupyter Notebook', 'Data Analysis'],
    repoUrl: 'https://github.com/sthasubin429/CPSC_Assignment_3',
    category: 'Data Analytics',
  },
  {
    year: 2025,
    title: 'Portfolio Website v2',
    techStack: ['Astro', 'TypeScript', 'Tailwind CSS'],
    repoUrl: 'https://github.com/sthasubin429/personal-website',
    projectUrl: 'https://www.subinstha.com.np/',
    category: 'Software Engineering',
  },
  {
    year: 2025,
    title: 'macOS Dotfiles',
    techStack: ['Shell', 'Bash', 'Configuration'],
    repoUrl: 'https://github.com/sthasubin429/.dotfiles-macos',
    category: 'Other',
  },

  // 2024 Projects
  {
    year: 2024,
    title: 'Spotify Profile Viewer',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Spotify API'],
    repoUrl: 'https://github.com/sthasubin429/spotify-profile',
    category: 'Software Engineering',
  },
  {
    year: 2024,
    title: 'Uptime Monitor',
    techStack: ['Rust'],
    repoUrl: 'https://github.com/sthasubin429/uptime_monitor',
    category: 'Other',
  },
  {
    year: 2024,
    title: 'Angular Template',
    techStack: ['Angular', 'TypeScript'],
    repoUrl: 'https://github.com/sthasubin429/angular-template',
    category: 'Software Engineering',
  },
  {
    year: 2024,
    title: 'Rails Template',
    techStack: ['Ruby', 'Rails'],
    repoUrl: 'https://github.com/sthasubin429/rails-template',
    category: 'Software Engineering',
  },

  // 2023 Projects
  {
    year: 2023,
    title: 'Machine Learning Practice',
    techStack: ['Python', 'Scikit-learn', 'TensorFlow', 'Jupyter'],
    repoUrl: 'https://github.com/sthasubin429/ml_practice',
    category: 'Data Analytics',
  },
  {
    year: 2023,
    title: 'Rails API Template',
    techStack: ['Ruby', 'Rails', 'API'],
    repoUrl: 'https://github.com/sthasubin429/rails-api-template',
    category: 'Software Engineering',
  },
  {
    year: 2023,
    title: 'PWA Rails',
    techStack: ['Ruby', 'Rails', 'PWA'],
    repoUrl: 'https://github.com/sthasubin429/pwa-rails',
    category: 'Software Engineering',
  },
  {
    year: 2023,
    title: 'NGX Directives',
    techStack: ['Angular', 'TypeScript'],
    repoUrl: 'https://github.com/sthasubin429/ngx-directives',
    category: 'Software Engineering',
  },
  {
    year: 2023,
    title: 'Neovim Config',
    techStack: ['Lua', 'Vim'],
    repoUrl: 'https://github.com/sthasubin429/nvim',
    category: 'Other',
  },

  // 2022 Projects
  {
    year: 2022,
    title: 'Groovy - Music Sharing Platform',
    techStack: ['React', 'Django', 'Flask', 'Keras', 'RNN'],
    repoUrl: 'https://github.com/sthasubin429/groovy',
    category: 'Software Engineering',
  },
  {
    year: 2022,
    title: 'Clipers - User Management System',
    techStack: ['Java', 'MySQL', 'CSS'],
    repoUrl: 'https://github.com/sthasubin429/Clipers_CW',
    category: 'Software Engineering',
  },
  {
    year: 2022,
    title: 'Stripe Rails Integration',
    techStack: ['Ruby', 'Rails', 'Stripe API'],
    repoUrl: 'https://github.com/sthasubin429/stripe-rails',
    category: 'Software Engineering',
  },
  {
    year: 2022,
    title: 'React Practice Projects',
    techStack: ['React', 'JavaScript'],
    repoUrl: 'https://github.com/sthasubin429/reactPractice',
    category: 'Software Engineering',
  },
  {
    year: 2022,
    title: 'Data Faker',
    techStack: ['Ruby'],
    repoUrl: 'https://github.com/sthasubin429/data_fake',
    category: 'Software Engineering',
  },
  {
    year: 2022,
    title: 'Frontend Practice',
    techStack: ['HTML', 'CSS', 'JavaScript'],
    repoUrl: 'https://github.com/sthasubin429/FrontendPractice',
    category: 'Software Engineering',
  },

  // 2021 Projects
  {
    year: 2021,
    title: 'Street Fighter Clone',
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
    repoUrl:
      'https://github.com/sthasubin429/sthasubin429.github.io/tree/master/Assignments/FinalProject',
    projectUrl: 'https://sthasubin429.github.io/Assignments/FinalProject/',
    category: 'Software Engineering',
  },
  {
    year: 2021,
    title: 'Flappy Bird Clone',
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
    repoUrl:
      'https://github.com/sthasubin429/sthasubin429.github.io/tree/master/Assignments/JavaScript/Assignment-5',
    projectUrl: 'https://sthasubin429.github.io/Assignments/JavaScript/Assignment-5/',
    category: 'Software Engineering',
  },
  {
    year: 2021,
    title: 'Car Lane Game',
    techStack: ['JavaScript', 'HTML5', 'CSS3'],
    repoUrl:
      'https://github.com/sthasubin429/sthasubin429.github.io/tree/master/Assignments/JavaScript/Assignment-4',
    projectUrl: 'https://sthasubin429.github.io/Assignments/JavaScript/Assignment-4/',
    category: 'Software Engineering',
  },
  {
    year: 2021,
    title: 'Big Data Coursework - NY State Analysis',
    techStack: ['MongoDB', 'Jupyter Notebook', 'JavaScript'],
    repoUrl: 'https://github.com/sthasubin429/BigData_cw',
    category: 'Data Analytics',
  },
  {
    year: 2021,
    title: 'Task Tracker',
    techStack: ['TypeScript'],
    repoUrl: 'https://github.com/sthasubin429/TaskTracker',
    category: 'Software Engineering',
  },

  // 2020 Projects
  {
    year: 2020,
    title: 'Travelers Journal',
    techStack: ['Django', 'JavaScript', 'CSS', 'HTML'],
    repoUrl: 'https://github.com/sthasubin429/Aurora_ADC5',
    category: 'Software Engineering',
  },
  {
    year: 2020,
    title: 'Python Data Visualization',
    techStack: ['Python', 'NumPy', 'Matplotlib', 'Jupyter'],
    repoUrl: 'https://github.com/sthasubin429/py_data_visualization',
    category: 'Data Analytics',
  },
  {
    year: 2020,
    title: 'Lyrics Visualizer',
    techStack: ['Python', 'NumPy', 'Matplotlib'],
    repoUrl: 'https://github.com/sthasubin429/py_data_visualization/tree/master/LyricsVisualizer',
    category: 'Data Analytics',
  },
  {
    year: 2020,
    title: 'CUDA Coursework',
    techStack: ['C++', 'C', 'CUDA', 'Jupyter'],
    repoUrl: 'https://github.com/sthasubin429/cuda-cw',
    category: 'Other',
  },
  {
    year: 2020,
    title: 'Data Structures in Java',
    techStack: ['Java'],
    repoUrl: 'https://github.com/sthasubin429/DataStr_Java',
    category: 'Other',
  },
  {
    year: 2020,
    title: 'Tix',
    techStack: ['JavaScript'],
    repoUrl: 'https://github.com/sthasubin429/tix',
    category: 'Software Engineering',
  },
];
