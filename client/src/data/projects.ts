export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  techColors: Record<string, string>;
  githubUrl: string;
  demoUrl?: string;
  hasDemo?: boolean;
  type: 'flutter' | 'cpp' | 'web' | 'ml';
}

export const projects: Project[] = [
  {
    id: 'ae900',
    title: 'AE900 IoT Dashboard',
    description: 'Flutter app for real-time IoT data visualization with ESP32 integration, featuring dynamic charts and PDF generation.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['Flutter', 'Dart', 'ESP32', 'Bluetooth'],
    techColors: {
      'Flutter': 'bg-blue-500/20 text-blue-300',
      'Dart': 'bg-green-500/20 text-green-300',
      'ESP32': 'bg-purple-500/20 text-purple-300',
      'Bluetooth': 'bg-cyan-500/20 text-cyan-300'
    },
    githubUrl: 'https://github.com/Nikhiljain1008/app_csv',
    hasDemo: true,
    type: 'flutter'
  },
  {
    id: 'custom-stl',
    title: 'Custom STL Library',
    description: 'From-scratch implementation of STL containers with templates, move semantics, and memory optimization.',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['C++', 'Templates', 'CMake', 'Memory Mgmt'],
    techColors: {
      'C++': 'bg-red-500/20 text-red-300',
      'Templates': 'bg-orange-500/20 text-orange-300',
      'CMake': 'bg-yellow-500/20 text-yellow-300',
      'Memory Mgmt': 'bg-blue-500/20 text-blue-300'
    },
    githubUrl: 'https://github.com/Nikhiljain1008/STL_From_Scratch',
    hasDemo: true,
    type: 'cpp'
  },
  {
    id: 'geo-clean',
    title: 'Geo-Clean Platform',
    description: 'Geospatial complaint management system with KML mapping, CLIP verification, and automated assignment.',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['React', 'Node.js', 'GIS', 'AWS'],
    techColors: {
      'React': 'bg-blue-500/20 text-blue-300',
      'Node.js': 'bg-green-500/20 text-green-300',
      'GIS': 'bg-purple-500/20 text-purple-300',
      'AWS': 'bg-orange-500/20 text-orange-300'
    },
    githubUrl: 'https://github.com/Nikhiljain1008/Geo_Clean',
    hasDemo: true,
    type: 'web'
  },
  {
    id: 'healthify',
    title: 'Healthify AI',
    description: 'Diabetes prediction using ML models with CNN-based retina analysis and intelligent chatbot integration.',
    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['Python', 'TensorFlow', 'CNN', 'Gemini API'],
    techColors: {
      'Python': 'bg-green-500/20 text-green-300',
      'TensorFlow': 'bg-blue-500/20 text-blue-300',
      'CNN': 'bg-purple-500/20 text-purple-300',
      'Gemini API': 'bg-cyan-500/20 text-cyan-300'
    },
    githubUrl: 'https://github.com/Nikhiljain1008/Healthify---Diabetes-ML-and-Chatbot',
    hasDemo: true,
    type: 'ml'
  },
  {
    id: 'cancer-detection',
    title: 'Cancer Detection AI',
    description: 'Transfer learning with feature fusion on CBIS-DDSM dataset achieving 90.8% accuracy with Inception V3.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400',
    technologies: ['Deep Learning', 'Transfer Learning', 'Feature Fusion', 'Kaggle'],
    techColors: {
      'Deep Learning': 'bg-red-500/20 text-red-300',
      'Transfer Learning': 'bg-blue-500/20 text-blue-300',
      'Feature Fusion': 'bg-green-500/20 text-green-300',
      'Kaggle': 'bg-purple-500/20 text-purple-300'
    },
    githubUrl: 'https://www.kaggle.com/code/nikhiljain1008/ddms-breast-cancer-predictions-using-8-models',
    hasDemo: true,
    type: 'ml'
  }
];
