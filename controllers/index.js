const { registrationController } = require('./auth/registrationController')
const { loginController } = require('./auth/loginController')
const { logoutController } = require('./auth/logoutController')
const ctrl = require('./transactions')

module.exports = {
  registrationController,
  loginController,
  logoutController,
  ctrl,
}
