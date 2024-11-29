const catchAsync = (fn) => {
  return (req, res, next) => {
    // try {
    //   fn(req, res, next);
    // } catch (err) {
    //   next();
    // }

    return Promise.resolve(fn(req, res, next)).catch(next);
  };
};

module.exports = catchAsync;
