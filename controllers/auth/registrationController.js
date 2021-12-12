const {
    registration
  } = require('../../model')
  
  const registrationController = async (req, res) => {
    const { email, password } = req.body
    const newUser = await registration(email, password)
  
    res.status(201).json({ newUser })
  }
  
  module.exports = {
    registrationController
  }