class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.status = String(statusCode).startsWith("4") ? "fail" : "error";
    this.statusCode = statusCode;
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = AppError;
