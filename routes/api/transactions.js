const express = require('express')
const { ctrl } = require('../../controllers')
const { errorHandler } = require('../../helpers')
const { validationWrapper, authenticateUser } = require('../../middlewares')
const schema = require('../../middlewares/schemaIncome')
const router = express.Router()

router.get('/', authenticateUser, errorHandler(ctrl.getAll))

router.post(
  '/income',
  authenticateUser,
  validationWrapper(schema),
  errorHandler(ctrl.addTransaction)
)
router.post(
  '/spend',
  authenticateUser,
  validationWrapper(schema),
  errorHandler(ctrl.addTransaction)
)

module.exports = router
