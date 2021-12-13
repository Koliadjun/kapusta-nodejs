const express = require('express')
const {registrationValidation, loginValidation, authenticateUser} = require('../../middlewares')
const authRouter = express.Router()
const {registrationController, loginController, logoutController, verifyUserController} = require('../../controllers')
const {errorHandler} = require('../../helpers')

authRouter.post('/registration', registrationValidation, errorHandler(registrationController))
authRouter.post('/login', loginValidation, errorHandler(loginController))
authRouter.get('/logout',  authenticateUser, logoutController)
authRouter.get('/verify/:verificationToken', errorHandler(verifyUserController))

module.exports = authRouter