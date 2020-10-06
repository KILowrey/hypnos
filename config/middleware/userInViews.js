// Making the user available in the views

module.exports = function () {
  return function (req, res, next) {
    res.locals.user = req.user;
    next();
  };
};