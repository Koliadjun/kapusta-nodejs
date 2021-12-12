const {registrationController} = require('./auth/registrationController')
const {loginController} = require('./auth/loginController')
const {logoutController} = require('./auth/logoutController')

module.exports = {
    registrationController,
    loginController,
    logoutController
}