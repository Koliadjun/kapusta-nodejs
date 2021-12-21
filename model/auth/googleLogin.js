const { UserModel } = require('../../db/userModel')
const jwt = require('jsonwebtoken')

const googleLogin = async (userData) => {

  const token = await jwt.sign({
    _id: userData._id
  }, process.env.SECRET_KEY, {expiresIn: '2h'})
  await UserModel.findByIdAndUpdate(userData._id, {token})

  return token
}

module.exports = {
    googleLogin
}
