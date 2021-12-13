const { registration } = require('./auth/registration')
const { login } = require('./auth/login')
const { Income, schema } = require('./transactions/income')

module.exports = {
  registration,
  login,
  Income,
  schema,
}
