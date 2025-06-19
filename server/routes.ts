import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function registerRoutes(app: Express): Promise<Server> {
  // GitHub API proxy endpoint
  app.get("/api/github", async (req, res) => {
    try {
      // In a real implementation, you would:
      // 1. Use GitHub API with proper authentication
      // 2. Cache the results
      // 3. Handle rate limiting
      
      // For now, return mock data
      const githubData = {
        publicRepos: 12,
        totalCommits: 235,
        topLanguages: ["C++", "Python", "Dart"],
        recentActivity: "Active this week"
      };
      
      res.json(githubData);
    } catch (error) {
      console.error("GitHub API error:", error);
      res.status(500).json({ error: "Failed to fetch GitHub data" });
    }
  });

  // Contact form endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required" });
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "Invalid email format" });
      }
      
      // In a real implementation, you would:
      // 1. Send email using service like SendGrid, AWS SES, etc.
      // 2. Store in database
      // 3. Add spam protection
      
      console.log("Contact form submission:", { name, email, subject, message });
      
      res.json({ success: true, message: "Message sent successfully" });
    } catch (error) {
      console.error("Contact form error:", error);
      res.status(500).json({ error: "Failed to send message" });
    }
  });

  // Serve resume files
  app.get("/resumes/:filename", (req, res) => {
    const { filename } = req.params;
    const allowedFiles = ["nikhil-resume-core.pdf", "nikhil-resume-ml.pdf"];
    
    if (!allowedFiles.includes(filename)) {
      return res.status(404).json({ error: "File not found" });
    }
    
    const filePath = path.join(__dirname, "..", "client", "public", "resumes", filename);
    res.sendFile(filePath, (err) => {
      if (err) {
        console.error("File serving error:", err);
        res.status(404).json({ error: "File not found" });
      }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
