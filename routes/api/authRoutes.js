const express = require('express')
const {
    registrationValidation,
    loginValidation,
    authenticateUser
} = require('../../middlewares')
const authRouter = express.Router()
const {
    registrationController,
    loginController,
    logoutController,
    verifyUserController,
    googleAuth,
    googleRedirect,
    currentController
} = require('../../controllers')
const {
    errorHandler
} = require('../../helpers')

authRouter.post('/registration', registrationValidation, errorHandler(registrationController))
authRouter.post('/login', loginValidation, errorHandler(loginController))
authRouter.get('/logout', authenticateUser, logoutController)
authRouter.get('/verify/:verificationToken', errorHandler(verifyUserController))
authRouter.get("/google", errorHandler(googleAuth));
authRouter.get("/google-redirect", errorHandler(googleRedirect));
authRouter.get("/current", errorHandler(currentController));

module.exports = authRouter