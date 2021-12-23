const sendGrid = require('@sendgrid/mail')
require('dotenv').config()
sendGrid.setApiKey(process.env.GRID_SEND_APIKEY)

const sendMail = async (email, verificationToken) => {
  const mailMarkup = `<p>Hello there! Please verify your email by clicking that button!</p> <button type="button"><a href="https://kapusta-api-iteam.herokuapp.com/api/auth/verify/${verificationToken}">BUTTON</a></button>`
  const msg = {
    to: email,
    from: 'Koliadjun@gmail.com',
    subject: 'Please verify email!',
    html: mailMarkup
  }
  await sendGrid.send(msg)
}

module.exports = {
  sendMail
}
