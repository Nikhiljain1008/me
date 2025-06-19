import { motion } from "framer-motion";

export function Resume() {
  const downloadResume = (type: 'core' | 'ml') => {
    const filename = type === 'core' ? 'nikhil-resume-core.pdf' : 'nikhil-resume-ml.pdf';
    const link = document.createElement('a');
    link.href = `/resumes/${filename}`;
    link.download = filename;
    link.click();
  };

  const experiences = [
    {
      title: "Flutter Head - Quark Club",
      period: "October 2023 - Present",
      description: "Leading Flutter development training and organizing tech events including Hackenvision.",
      color: "bg-cyan-400"
    },
    {
      title: "CS Student - VIT Pune",
      period: "2022 - 2026",
      description: "Bachelor of Technology in Computer Science (AIML) - CGPA: 8.74",
      color: "bg-purple-400"
    }
  ];

  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Resume & CV
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {/* Core Resume */}
          <motion.div 
            className="glass-effect rounded-2xl p-8 text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-code text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4">Core Resume</h3>
            <p className="text-gray-300 mb-6">Focused on C++ Systems, Data Structures, and Low-Level Programming</p>
            <ul className="text-sm text-gray-400 space-y-2 mb-8 text-left">
              <li>• Custom STL Implementation</li>
              <li>• Memory Management & Optimization</li>
              <li>• Multithreading & Concurrency</li>
              <li>• System Architecture</li>
            </ul>
            <motion.button 
              onClick={() => downloadResume('core')}
              className="gradient-bg px-6 py-3 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-download mr-2"></i>Download PDF
            </motion.button>
          </motion.div>

          {/* ML Resume */}
          <motion.div 
            className="glass-effect rounded-2xl p-8 text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-brain text-2xl text-white"></i>
            </div>
            <h3 className="text-2xl font-semibold mb-4">ML Resume</h3>
            <p className="text-gray-300 mb-6">Specialized in Machine Learning, Deep Learning, and AI Applications</p>
            <ul className="text-sm text-gray-400 space-y-2 mb-8 text-left">
              <li>• Deep Learning & CNNs</li>
              <li>• Transfer Learning</li>
              <li>• Medical AI Applications</li>
              <li>• NLP & Chatbot Development</li>
            </ul>
            <motion.button 
              onClick={() => downloadResume('ml')}
              className="gradient-bg px-6 py-3 rounded-full font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-download mr-2"></i>Download PDF
            </motion.button>
          </motion.div>
        </div>

        {/* Experience Timeline */}
        <motion.div 
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-12">Experience Timeline</h3>
          <div className="glass-effect rounded-2xl p-8">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-purple-500"></div>
              
              {/* Timeline items */}
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                  >
                    <div className={`w-4 h-4 ${exp.color} rounded-full mt-2 relative z-10`}></div>
                    <div className="ml-8">
                      <h4 className="text-lg font-semibold">{exp.title}</h4>
                      <p className="text-purple-400 mb-2">{exp.period}</p>
                      <p className="text-gray-300">{exp.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
