import type { Express } from "express";
import { createServer, type Server } from "http";

export async function registerRoutes(app: Express): Promise<Server> {
  // Health check endpoint for deployment
  app.get("/api/health", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
  });

  // API info endpoint
  app.get("/api", (req, res) => {
    res.json({ 
      message: "ClarioSocial Studio API",
      version: "1.0.0",
      status: "running"
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
