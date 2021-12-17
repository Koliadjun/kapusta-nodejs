const Joi = require('joi')

const schema = Joi.object({
  sum: Joi.string().min(1).max(30),
  date: Joi.string(),
  negative: Joi.boolean().required(),
  category: Joi.string(),
  description: Joi.string(),
})

module.exports = schema
