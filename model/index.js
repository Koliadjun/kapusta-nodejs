const { registration } = require('./auth/registration')
const { login } = require('./auth/login')
const { Income, schema } = require('./transactions/income')
const { Spend, schemaSpend } = require('./transactions/spend')

module.exports = {
  registration,
  login,
  Income,
  schema,
  Spend,
  schemaSpend,
}
