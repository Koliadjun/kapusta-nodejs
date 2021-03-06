const Joi = require('joi')

const loginValidation = (req, res, next) => {
    const schema = Joi.object({
      email: Joi.string().email({
        minDomainSegments: 2,
        tlds: {
          allow: ['com', 'net', 'ru', 'ua']
        }
      }).required(),
      password: Joi.string()
    })
  
    const validationResult = schema.validate(req.body)
    if (validationResult.error) {
      return res.status(400).json({
        message: validationResult.error.details
      })
    }
  
    next()
  }
  
  module.exports = {
    loginValidation
  }