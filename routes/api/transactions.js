const express = require('express')
const { transactions } = require('../../controllers')
const { errorHandler } = require('../../helpers')
const { validationWrapper, authenticateUser } = require('../../middlewares')
const schema = require('../../middlewares/schemaJoi')
const router = express.Router()

router.get('/', authenticateUser, errorHandler(transactions.getAll))

router.post(
  '/income',
  authenticateUser,
  validationWrapper(schema),
  errorHandler(transactions.addIncome)
)

module.exports = router
