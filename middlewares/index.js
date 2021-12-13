const { registrationValidation } = require('./registrationValidation')
const { loginValidation } = require('./loginValidation')
const { existenceCheck } = require('./existenceCheck')
const { authenticateUser } = require('./authenticateUser')
const validationWrapper = require('./validationWrapper')

module.exports = {
  registrationValidation,
  loginValidation,
  existenceCheck,
  authenticateUser,
  validationWrapper,
}
