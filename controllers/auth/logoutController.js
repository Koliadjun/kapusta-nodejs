const { UserModel } = require('../../db/userModel')

const logoutController = async (req, res) => {
  const { _id } = req.user
  await UserModel.findByIdAndUpdate(_id, { token: null })
  res.status(200).json({ message: 'successfully logged out' })
}

module.exports = {
  logoutController
}
