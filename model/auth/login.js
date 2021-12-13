const { UserModel } = require('../../db/userModel')
const { Unauthorized } = require('http-errors')
const bcrypt = require('bcryptjs')
const jsonwebtoken = require('jsonwebtoken')

const login = async (email, password) => {
  const user = await UserModel.findOne({ email })
  if (!user) {
    throw new Unauthorized('Credentials are wrong')
  }
  const check = await bcrypt.compare(password, user.password)
  if (!check) throw new Unauthorized('Credentials are wrong')

  const token = await jsonwebtoken.sign({
    _id: user._id,
    email: user.email,
    budget: user.budget
  }, process.env.SECRET_KEY, {expiresIn: '2h'})

  await UserModel.findByIdAndUpdate(user._id, {token})

  return token
}

module.exports = {
    login
}
