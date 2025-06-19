import { useState } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { 
      href: "mailto:1008nikhiljain@gmail.com", 
      icon: "fas fa-envelope", 
      color: "text-cyan-400",
      label: "Email"
    },
    { 
      href: "https://linkedin.com/in/nikhil-jain", 
      icon: "fab fa-linkedin", 
      color: "text-blue-400",
      label: "LinkedIn"
    },
    { 
      href: "https://github.com/nikhiljain", 
      icon: "fab fa-github", 
      color: "text-gray-400",
      label: "GitHub"
    },
    { 
      href: "tel:+917385957267", 
      icon: "fas fa-phone", 
      color: "text-green-400",
      label: "Phone"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6 text-center">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 gradient-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Ready to collaborate on cutting-edge projects? Let's build something amazing together.
        </motion.p>

        <motion.div 
          className="flex flex-wrap justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              className="glass-effect p-4 rounded-2xl group"
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
            >
              <i className={`${link.icon} text-2xl ${link.color} group-hover:text-white transition-colors`}></i>
            </motion.a>
          ))}
        </motion.div>

        <motion.div 
          className="glass-effect rounded-2xl p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-semibold mb-6">Get In Touch</h3>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                required
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                required
                className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
              />
            </div>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              placeholder="Subject"
              required
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={5}
              placeholder="Your Message"
              required
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
            />
            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="gradient-bg px-8 py-3 rounded-full font-semibold disabled:opacity-50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
