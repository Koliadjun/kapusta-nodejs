const { UserModel } = require('../db/userModel')

const existenceCheck = async (req, res, next) => {
  const { email } = req.body
  const user = await UserModel.findOne({ email })
  if (user) return next() 
  res.status(400).json({message: 'User not found'})
  
}

module.exports = {
  existenceCheck
}