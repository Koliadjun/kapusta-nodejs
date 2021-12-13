const express = require('express')
const { ctrl } = require('../../controllers')
const {
  asyncTryCatch,
  validation,
  authenticateUser,
} = require('../../middlewares')
const { schema } = require('../../model')
const router = express.Router()

router.get('/', authenticateUser, asyncTryCatch(ctrl.getAll))

router.post(
  '/income',
  authenticateUser,
  validation(schema),
  asyncTryCatch(ctrl.addTransaction)
)
router.post(
  '/spend',
  authenticateUser,
  validation(schema),
  asyncTryCatch(ctrl.addTransaction)
)

module.exports = router
