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

// router.get('/:contactId', authenticate, asyncTryCatch(ctrl.getById))
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

// router.put(
//   '/:contactId',
//   authenticate,
//   validation(schema),
//   asyncTryCatch(ctrl.updateById)
// )

// router.patch(
//   '/:contactId/favorite',
//   authenticate,
//   validation(schemaFavorite),
//   asyncTryCatch(ctrl.updateFavorite)
// )

// router.delete('/:contactId', authenticate, asyncTryCatch(ctrl.deleteById))

module.exports = router
