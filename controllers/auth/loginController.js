const {login} = require('../../model')

const loginController = async (req, res) => {
    const { email, password } = req.body
        const user = await login(email, password)
        res.status(201).json({ message: 'logged in successfully', user })
    
  }

module.exports = {
    loginController
}