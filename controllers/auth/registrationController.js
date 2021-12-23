const {
  registration
} = require('../../model')
// const { sendMail } = require('../../helpers/sendMail')

const registrationController = async (req, res) => {
  const { email, password } = req.body
  const newUser = await registration(email, password)
  await sendMail(email, newUser.verificationToken)

  res.status(201).json({ newUser })
}

module.exports = {
  registrationController
}