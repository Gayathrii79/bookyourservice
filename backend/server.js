import "dotenv/config";
import express from "express";
import helmet from "helmet";
import cors from "cors";

import { connectDB } from "./config/db.js";
import enquiryRoutes from "./routes/enquiryRoutes.js";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler.js";

const app = express();
const PORT = process.env.PORT || 5000;

// ─── Security ──────────────────────────────────────────────────────────────
app.use(helmet());

// Allow requests only from the configured frontend origin
const allowedOrigins = [
  process.env.FRONTEND_ORIGIN || "http://localhost:3000",
  "http://localhost:3000",
  "http://localhost:4173",  // vite preview
  "http://localhost:5173",  // vite dev (fallback)
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow server-to-server / Postman requests (no origin header)
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error(`CORS: origin ${origin} not allowed`));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

// ─── Body parsing ──────────────────────────────────────────────────────────
app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ extended: false }));

// ─── Health check ──────────────────────────────────────────────────────────
app.get("/health", (_req, res) =>
  res.status(200).json({ status: "ok", timestamp: new Date().toISOString() })
);

// ─── API routes ────────────────────────────────────────────────────────────
app.use("/api", enquiryRoutes);

// ─── Error handling ────────────────────────────────────────────────────────
app.use(notFoundHandler);
app.use(errorHandler);

// ─── Bootstrap ────────────────────────────────────────────────────────────
async function start() {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`🚀  Server running on http://localhost:${PORT}`);
    console.log(`    Environment : ${process.env.NODE_ENV || "development"}`);
    console.log(`    CORS origin : ${allowedOrigins.join(", ")}`);
  });
}

start();
