const Joi = require('joi')

const schema = Joi.object({
  // email: Joi.string()
  //   .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  //   .required(),
  income: Joi.string().min(1).max(30),
  spend: Joi.string().min(1).max(30),
  date: Joi.string(),
  negative: Joi.boolean().required(),
  category: Joi.string(),
  description: Joi.string(),
})

module.exports = schema
