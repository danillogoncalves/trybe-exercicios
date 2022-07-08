const Joi = require('joi');

const schema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  pageQuantity: Joi.number(),
});

const errorResponse = (error, res) => {
  if (error.details[0].type === 'any.required') {
    return res.status(400).json({ message: error.details[0].message });
  }
  if (error.details[0].type === 'string.empty'
  || error.details[0].type === 'number.base'
  || error.details[0].type === 'string.base') {
    return res.status(422).json({ message: error.details[0].message });
  }
  res.status(505).json({ message: error.details[0].type });
};

const booksValidade = (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) return errorResponse(error, res);
  next();
};

module.exports = booksValidade;