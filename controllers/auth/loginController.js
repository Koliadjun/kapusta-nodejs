const {login} = require('../../model')

const loginController = async (req, res) => {
    const { email, password } = req.body
        const token = await login(email, password)
        res.status(201).json({ message: 'logged in successfully', token })
    
  }

module.exports = {
    loginController
}