const {
  UserModel
} = require('../../db/userModel')
const jwt = require('jsonwebtoken')


const googleRegistration = async (email, name) => {
  const newUser = new UserModel({
    email,
    name
  })
  const user = await newUser.save()
  const token = jwt.sign({
    _id: user._id
  }, process.env.SECRET_KEY, {
    expiresIn: '2h'
  })
  user.token = token
  await user.save()
  return user
}

module.exports = {
  googleRegistration
}