const { Income } = require('../../model')

const addTransaction = async (req, res) => {
  const newIncome = { ...req.body, owner: req.user._id }
  const result = await Income.create(newIncome)
  res.status(201).json({ status: 'succes', code: 201, data: { result } })
}
module.exports = addTransaction
