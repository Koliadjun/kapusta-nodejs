const { registrationValidation } = require('./registrationValidation')
const { loginValidation } = require('./loginValidation')
const { authenticateUser } = require('./authenticateUser')
const validationWrapper = require('./validationWrapper')
const { bugetValidation } = require('./bugetValidation')

module.exports = {
  registrationValidation,
  loginValidation,
  authenticateUser,
  validationWrapper,
  bugetValidation,
}
