const { UserModel } = require('../../db/userModel')

const updateBudget = async (req, res) => {
  const { id } = req.params
  const { budget } = req.body

  const result = await UserModel.findByIdAndUpdate(
    id,
    { budget },
    { new: true }
  )

  if (!result || budget === undefined) {
    res.status(400).json({ message: 'missing field "budget"' })
  }

  res.status(200).json({ status: 'succes', code: 200, data: { result } })
}

module.exports = updateBudget
