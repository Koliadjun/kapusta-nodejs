const { UserModel } = require('../../db/userModel')

const updateBudget = async (req, res) => {
  const { initialBalance } = req.body
  const { token } = req.user

  const result = await UserModel.findOneAndUpdate(
    { token: token },
    { initialBalance },
    { new: true }
  )

  if (!result || budget === undefined) {
    res.status(400).json({ message: 'missing field "budget"' })
  }

  res.status(200).json({ status: 'succes', code: 200, data: { result } })
}

module.exports = updateBudget
