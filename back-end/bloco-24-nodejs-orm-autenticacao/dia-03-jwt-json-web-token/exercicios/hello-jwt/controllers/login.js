const Joi = require('joi');
require('dotenv').config();
const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const schema = Joi.object({
  username: Joi.string().min(5).alphanum().required(),
  password: Joi.string().min(5).required(),
});

const validateLogin = (body) => schema.validate(body);

const login = async (req, res, next) => {
  const { error } = validateLogin(req.body);
  if (error) return next(error);

  const { username, password } = req.body;

  if (username === 'admin' && password !== 's3nh4S3gur4???') {
    const err = new Error('Invalid username or password');
    err.statusCode = 401;
    return next(err);
  }

  const admin = username === 'admin' && password === 's3nh4S3gur4???';

  const payload = {
    username,
    admin,
  };

  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

  res.status(200).json({ token });
};

module.exports = login;