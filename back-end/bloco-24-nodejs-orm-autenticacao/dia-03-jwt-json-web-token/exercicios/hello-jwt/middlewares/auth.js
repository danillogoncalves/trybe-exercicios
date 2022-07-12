const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const auth = (req, _res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    
    return next(err);
  }
  try {
    const payload = jwt.verify(authorization, JWT_SECRET);

    req.user = payload;

    return next();
  } catch (err) {
    err.statusCode = 401;

    return next(err);
  }
};

module.exports = auth;