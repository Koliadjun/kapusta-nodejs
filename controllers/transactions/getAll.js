const { Income } = require('../../model')
const getAll = async (req, res) => {
  //   const { page, limit } = req.query
  const { _id } = req.user
  //   const skip = (page - 1) * limit
  const transactions = await Income.find({ owner: _id })
  //     '_id name phone email owner',
  //     { skip, limit: +limit }
  //   ).populate('owner', '_id email')
  res.json({ message: 'template message', code: 200, data: { transactions } })
}

module.exports = getAll
