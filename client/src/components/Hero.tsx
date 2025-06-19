import { motion } from "framer-motion";

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <motion.div 
          className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-20 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full"
          animate={{ y: [-15, 25, -15] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-r from-emerald-400 to-cyan-500 rounded-full"
          animate={{ y: [-10, 30, -10] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Profile Image Placeholder */}
          <motion.div 
            className="w-32 h-32 mx-auto mb-8 rounded-full glass-effect flex items-center justify-center"
            animate={{ 
              boxShadow: [
                "0 0 20px #667eea",
                "0 0 30px #764ba2, 0 0 40px #667eea",
                "0 0 20px #667eea"
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <i className="fas fa-user text-4xl text-cyan-400"></i>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm <span className="gradient-text">Babusha Santosh Kolhe</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            CS Student & ML/Flutter Developer crafting intelligent solutions with elegant code
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {["Machine Learning", "Flutter Development", "C++ Systems", "Full Stack"].map((skill, index) => (
              <motion.span 
                key={skill}
                className="glass-effect px-4 py-2 rounded-full text-sm"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="gradient-bg px-8 py-3 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.button>
            <motion.button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="glass-effect px-8 py-3 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
