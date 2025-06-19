import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type FilterType = 'all' | 'ml' | 'flutter' | 'cpp' | 'web';

export function ProjectLab() {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filters = [
    { id: 'all' as FilterType, label: 'All Projects', icon: '' },
    { id: 'ml' as FilterType, label: 'Machine Learning', icon: 'fas fa-brain' },
    { id: 'flutter' as FilterType, label: 'Flutter', icon: 'fab fa-flutter' },
    { id: 'cpp' as FilterType, label: 'C++', icon: 'fas fa-code' },
    { id: 'web' as FilterType, label: 'Web', icon: 'fas fa-globe' }
  ];

  const renderDemo = () => {
    switch (activeFilter) {
      case 'flutter':
        return <FlutterDemo />;
      case 'cpp':
        return <CppDemo />;
      case 'web':
        return <WebDemo />;
      case 'ml':
        return <MLDemo />;
      default:
        return <DefaultDemo />;
    }
  };

  return (
    <section id="lab" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-8 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Project Lab
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Explore my projects by technology stack and dive deep into interactive demos
        </motion.p>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`glass-effect px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white' 
                  : 'hover:bg-white/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.icon && <i className={`${filter.icon} mr-2`}></i>}
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Interactive Demo Area */}
        <motion.div 
          className="glass-effect rounded-2xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">Interactive Showcase</h3>
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              {renderDemo()}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

function FlutterDemo() {
  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h4 className="text-lg font-semibold mb-4 text-cyan-400">AE900 Flutter App - Live Demo</h4>
      <div className="aspect-video bg-black rounded-lg flex items-center justify-center border border-gray-700">
        <div className="text-center">
          <i className="fas fa-mobile-alt text-4xl text-gray-500 mb-4"></i>
          <p className="text-gray-400">Flutter App Demo</p>
          <p className="text-sm text-gray-500">Real-time IoT Dashboard</p>
          <button 
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => {
              // Open flutter demo in new window
              window.open('about:blank', '_blank');
            }}
          >
            Open Live Demo
          </button>
        </div>
      </div>
    </div>
  );
}

function CppDemo() {
  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h4 className="text-lg font-semibold mb-4 text-cyan-400">Custom STL - Interactive Code</h4>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-medium mb-2 text-purple-300">Vector Implementation</h5>
          <pre className="bg-black rounded-lg p-4 text-sm overflow-x-auto text-green-400">
            <code>{`template<typename T>
class vector {
private:
    T* data;
    size_t size_;
    size_t capacity_;
    
public:
    vector() : data(nullptr), 
               size_(0), capacity_(0) {}
    
    void push_back(const T& value) {
        if (size_ == capacity_) {
            reserve(capacity_ == 0 ? 1 : capacity_ * 2);
        }
        data[size_++] = value;
    }
};`}</code>
          </pre>
        </div>
        <div>
          <h5 className="font-medium mb-2 text-purple-300">Performance Metrics</h5>
          <div className="space-y-3">
            <div className="flex justify-between p-3 bg-black rounded-lg">
              <span>Memory Usage</span>
              <span className="text-cyan-400">95% efficient</span>
            </div>
            <div className="flex justify-between p-3 bg-black rounded-lg">
              <span>Insertion Speed</span>
              <span className="text-cyan-400">O(1) amortized</span>
            </div>
            <div className="flex justify-between p-3 bg-black rounded-lg">
              <span>Access Time</span>
              <span className="text-cyan-400">O(1) constant</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebDemo() {
  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h4 className="text-lg font-semibold mb-4 text-cyan-400">Geo-Clean - Interactive Map</h4>
      <div className="aspect-video bg-black rounded-lg flex items-center justify-center border border-gray-700 relative overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
          alt="Interactive city map" 
          className="w-full h-full object-cover rounded-lg" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h5 className="font-semibold">15 Wards Mapped</h5>
          <p className="text-sm opacity-80">Real-time complaint tracking</p>
        </div>
        {/* Animated markers */}
        <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 right-1/3 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-yellow-500 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}

function MLDemo() {
  return (
    <div className="bg-gray-900 rounded-xl p-6">
      <h4 className="text-lg font-semibold mb-4 text-cyan-400">Machine Learning Models</h4>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <h5 className="font-medium mb-2 text-purple-300">Healthify - Diabetes Prediction</h5>
          <div className="bg-black rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">Logistic Regression</span>
              <span className="text-green-400">92.5%</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">SVM</span>
              <span className="text-blue-400">89.3%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Decision Tree</span>
              <span className="text-yellow-400">87.1%</span>
            </div>
          </div>
        </div>
        <div>
          <h5 className="font-medium mb-2 text-purple-300">Cancer Detection - Model Performance</h5>
          <div className="bg-black rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">Inception V3</span>
              <span className="text-green-400">90.8%</span>
            </div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">ResNet</span>
              <span className="text-blue-400">88.2%</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm">Custom CNN</span>
              <span className="text-cyan-400">85.9%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DefaultDemo() {
  return (
    <div className="text-center py-12">
      <i className="fas fa-flask text-6xl text-gray-600 mb-4"></i>
      <h4 className="text-xl font-semibold text-gray-400 mb-2">Select a Technology</h4>
      <p className="text-gray-500">Choose a filter above to explore interactive project demos</p>
    </div>
  );
}
