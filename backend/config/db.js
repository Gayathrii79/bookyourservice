import mongoose from "mongoose";

/**
 * Connect to MongoDB Atlas using the URI from environment variables.
 * Exits the process on failure so the server does not start in a broken state.
 */
export async function connectDB() {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      // Mongoose 8+ no longer needs useNewUrlParser / useUnifiedTopology
    });
    console.log(`✅  MongoDB connected: ${conn.connection.host}`);
  } catch (err) {
    console.error("❌  MongoDB connection failed:", err.message);
    process.exit(1);
  }
}
