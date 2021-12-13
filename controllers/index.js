
const {registrationController} = require('./auth/registrationController')
const {loginController} = require('./auth/loginController')
const {logoutController} = require('./auth/logoutController')
const {verifyUserController} = require('./auth/verifyUserController')
const ctrl = require('./transactions')

module.exports = {
    registrationController,
    loginController,
    logoutController,
    verifyUserController,
    ctrl,
}

