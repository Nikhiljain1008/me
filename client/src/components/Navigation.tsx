import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "lab", "resume", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav 
      className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="glass-effect rounded-full px-6 py-3">
        <ul className="flex space-x-6 text-sm font-medium">
          {[
            { id: "home", label: "Home" },
            { id: "projects", label: "Projects" },
            { id: "lab", label: "Lab" },
            { id: "resume", label: "Resume" },
            { id: "contact", label: "Contact" }
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-cyan-400 transition-colors ${
                  activeSection === item.id ? "text-cyan-400" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <li>
            <button 
              onClick={toggleTheme}
              className="hover:text-cyan-400 transition-colors"
            >
              <i className={`fas ${theme === 'dark' ? 'fa-sun' : 'fa-moon'}`}></i>
            </button>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}
