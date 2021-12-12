const {login} = require('../../model')

const loginController = async (req, res) => {
    const { email, password } = req.body
    try {
        const token = await login(email, password)
        res.status(201).json({ message: 'logged in successfully', token })
    } catch (err) {
        res.status(500).json({message: 'server problems. please try again later'})
    }
    
  }

module.exports = {
    loginController
}