import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectLab } from "@/components/ProjectLab";
import { Resume } from "@/components/Resume";
import { Contact } from "@/components/Contact";
import { CustomCursor } from "@/components/CustomCursor";
import { projects } from "@/data/projects";
import { useGitHub } from "@/hooks/useGitHub";
import { motion } from "framer-motion";

export default function Portfolio() {
  const { data: githubData } = useGitHub();

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <CustomCursor />
      <Navigation />
      
      <Hero />
      
      {/* Featured Projects Section */}
      <section id="projects" className="py-20 relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Featured Projects
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
            
            {/* GitHub Live Stats Card */}
            <motion.div 
              className="glass-effect rounded-2xl p-6 col-span-full lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <i className="fab fa-github mr-3 text-cyan-400"></i>
                Live GitHub Activity
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-sm">Recent Commits</span>
                  <span className="text-cyan-400 font-semibold">
                    {githubData?.totalCommits || "Loading..."}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-sm">Public Repos</span>
                  <span className="text-cyan-400 font-semibold">
                    {githubData?.publicRepos || "Loading..."}
                  </span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-sm">Top Languages</span>
                  <span className="text-cyan-400 font-semibold">
                    {githubData?.topLanguages?.join(", ") || "Loading..."}
                  </span>
                </div>
              </div>
              <a 
                href="https://github.com/nikhiljain" 
                className="inline-block mt-4 text-purple-400 hover:text-purple-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-external-link-alt mr-2"></i>View Full Profile
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <ProjectLab />
      <Resume />
      <Contact />

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">&copy; 2025 Nikhil Jain. Crafted with passion and precision.</p>
        </div>
      </footer>
    </div>
  );
}
