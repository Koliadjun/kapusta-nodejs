const express = require('express')
const {
  registrationValidation,
  loginValidation,
  authenticateUser,
  bugetValidation,
} = require('../../middlewares')
const schema = require('../../middlewares/')
const authRouter = express.Router()
const {
  registrationController,
  loginController,
  logoutController,
  verifyUserController,
  transactions,
} = require('../../controllers')
const { errorHandler } = require('../../helpers')

authRouter.post(
  '/registration',
  registrationValidation,
  errorHandler(registrationController)
)
authRouter.post('/login', loginValidation, errorHandler(loginController))
authRouter.get('/logout', authenticateUser, logoutController)
authRouter.get('/verify/:verificationToken', errorHandler(verifyUserController))
authRouter.patch(
  '/:id/budget',
  authenticateUser,
  bugetValidation,
  errorHandler(transactions.updateBudget)
)

module.exports = authRouter
