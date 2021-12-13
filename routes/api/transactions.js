const express = require('express')
const { ctrl } = require('../../controllers')
const { errorHandler } = require('../../helpers')
const { validation, authenticateUser } = require('../../middlewares')
const { schema } = require('../../model')
const router = express.Router()

router.get('/', authenticateUser, errorHandler(ctrl.getAll))

router.post(
  '/income',
  authenticateUser,
  validation(schema),
  errorHandler(ctrl.addTransaction)
)
router.post(
  '/spend',
  authenticateUser,
  validation(schema),
  errorHandler(ctrl.addTransaction)
)

module.exports = router
