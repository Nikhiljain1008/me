import { motion } from "framer-motion";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const handleLiveDemo = () => {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    } else if (project.type === 'flutter' && project.id === 'ae900') {
      // Show Flutter app demo modal
      const modal = document.getElementById('app-demo-modal');
      if (modal) {
        modal.classList.remove('hidden');
      }
    }
  };

  return (
    <motion.div 
      className="project-card glass-effect rounded-2xl p-6 group relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      {/* Project Image */}
      <div className="relative overflow-hidden rounded-xl mb-4">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
        {project.title}
      </h3>
      
      <p className="text-gray-300 mb-4 text-sm leading-relaxed">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech) => (
          <span 
            key={tech}
            className={`text-xs px-2 py-1 rounded ${project.techColors[tech] || 'bg-gray-500/20 text-gray-300'}`}
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <a 
          href={project.githubUrl} 
          className="text-cyan-400 hover:text-cyan-300 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github mr-2"></i>View Code
        </a>
        {(project.demoUrl || project.hasDemo) && (
          <button 
            onClick={handleLiveDemo}
            className="text-purple-400 hover:text-purple-300 transition-colors"
          >
            <i className="fas fa-external-link-alt mr-2"></i>
            {project.type === 'flutter' ? 'Live Demo' : 'Explore'}
          </button>
        )}
      </div>
    </motion.div>
  );
}
