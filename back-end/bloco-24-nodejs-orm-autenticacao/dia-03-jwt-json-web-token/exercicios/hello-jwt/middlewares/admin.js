const admin = (req, _res, next) => {
  const { user } = req;
  if (!user.admin) {
    const err = new Error('Restricted access');
    err.statusCode = 403;
    return next(err);
  }
  next();
};

module.exports = admin;