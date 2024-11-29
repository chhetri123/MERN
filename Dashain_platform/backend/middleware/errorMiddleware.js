const sendDevError = (err, res) => {
  return res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

const sendProdError = (err, res) => {
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      message: err.message,
      status: err.status,
      statusCode: err.statusCode,
    });
  }

  res.status(500).json({
    status: "fail",
    message: "Internal Server Error",
  });
};

const errorHandler = (err, req, res, next) => {
  console.log("From global error handler middleware");
  err.status = err.status || "error";
  err.statusCode = err.statusCode || 500;
  console.log(err);

  if (process.env.NODE_ENV === "development") {
    sendDevError(err, res);
  }
  if (process.env.NODE_ENV === "production") {
    sendProdError(err, res);
  }
};

module.exports = errorHandler;
