/**
 * Global error handler — must be registered LAST in the middleware chain.
 *
 * Handles:
 *   - Mongoose validation errors  → 400
 *   - Mongoose duplicate key      → 409
 *   - Unexpected server errors    → 500
 */
export function errorHandler(err, req, res, _next) {
  console.error(`[ERROR] ${req.method} ${req.originalUrl}`, err);

  // Mongoose validation error
  if (err.name === "ValidationError") {
    const messages = Object.values(err.errors).map((e) => e.message);
    return res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors: messages,
    });
  }

  // Mongoose duplicate-key error (e.g. unique index)
  if (err.code === 11000) {
    return res.status(409).json({
      success: false,
      message: "A duplicate record already exists.",
    });
  }

  // Generic server error
  const statusCode = err.statusCode || 500;
  return res.status(statusCode).json({
    success: false,
    message:
      process.env.NODE_ENV === "production"
        ? "An unexpected error occurred. Please try again later."
        : err.message || "Internal Server Error",
  });
}

/**
 * 404 handler — catches requests to undefined routes.
 */
export function notFoundHandler(req, res) {
  return res.status(404).json({
    success: false,
    message: `Route ${req.method} ${req.originalUrl} not found.`,
  });
}
