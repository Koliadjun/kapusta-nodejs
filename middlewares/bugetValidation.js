const Joi = require('joi')

const bugetValidation = (req, res, next) => {
  const schema = Joi.object({
    budget: Joi.string(),
  })

  const validationResult = schema.validate(req.body)
  if (validationResult.error) {
    return res.status(400).json({
      message: validationResult.error.details,
    })
  }

  next()
}

module.exports = {
  bugetValidation,
}
