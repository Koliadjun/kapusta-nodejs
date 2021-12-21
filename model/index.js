const { registration } = require('./auth/registration')
const { googleRegistration } = require('./auth/googleRegistration')
const { login } = require('./auth/login')

const { Income } = require('./transactions/income')

const { googleLogin } = require('./auth/googleLogin')
const { current } = require('./auth/current')



module.exports = {
  registration,
  login,
  googleRegistration,
  googleLogin,
  Income,
  current
}

