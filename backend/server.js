import dotenv from "dotenv";
dotenv.config();
import express from "express";
import helmet from "helmet";
import cors from "cors";

import { connectDB } from "./config/db.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Security
app.use(helmet());

// Allowed Origins
const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:3000",
  "http://localhost:4173",
  "http://localhost:5173",
  "https://bookyourservices.in",
  "https://www.bookyourservices.in",
  "https://bookyourservice-beryl.vercel.app",
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS: Origin ${origin} is not allowed.`));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// Body Parser
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false }));

// Health Check
app.get("/health", (_req, res) => {
  res.status(200).json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

// API Routes
app.use("/api", enquiryRoutes);

// Error Handlers
app.use(notFoundHandler);
app.use(errorHandler);

// Start Server
async function start() {
  await connectDB();

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV}`);
    console.log(`Allowed Origins: ${allowedOrigins.join(", ")}`);
  });
}

start();