const {registrationController} = require('./auth/registrationController')
const {loginController} = require('./auth/loginController')
const {logoutController} = require('./auth/logoutController')
const {verifyUserController} = require('./auth/verifyUserController')

module.exports = {
    registrationController,
    loginController,
    logoutController,
    verifyUserController
}