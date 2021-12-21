const Joi = require('joi')

const schema = Joi.object({
  sum: Joi.string().min(1).max(30),
  date: Joi.string(),
  year: Joi.number(),
  month: Joi.number(),
  day: Joi.number(),
  negative: Joi.boolean().required(),
  category: Joi.string(),
  description: Joi.string(),
})

module.exports = schema
