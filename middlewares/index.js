const { registrationValidation } = require('./registrationValidation')
const { loginValidation } = require('./loginValidation')
const { existenceCheck } = require('./existenceCheck')
const { authenticateUser } = require('./authenticateUser')
const validation = require('./validation')

module.exports = {
  registrationValidation,
  loginValidation,
  existenceCheck,
  authenticateUser,
  validation,
}
