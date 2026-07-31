import rateLimit from "express-rate-limit";

export const enquiryLimiter = rateLimit({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 5,
  message: {
    success: false,
    message: "Too many enquiries. Please try again after 10 minutes."
  },
  standardHeaders: true,
  legacyHeaders: false,
});