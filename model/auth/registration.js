const {
    UserModel
  } = require('../../db/userModel')
const {
    Conflict
  } = require('http-errors')
const { nanoid } = require('nanoid')
  
const registration = async (email, password) => {
  const verificationToken = nanoid()
  const newUser = new UserModel({
    email,
    password,
    verificationToken
  })
  const existenceCheck = await UserModel.findOne({
    email
  })

  if (!existenceCheck) {
    const user = await newUser.save()
    return user
  }
  throw new Conflict('user already exists')
}

module.exports = {
  registration
}