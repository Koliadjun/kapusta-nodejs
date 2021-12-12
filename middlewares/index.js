const {registrationValidation} = require('./registrationValidation')
const {loginValidation} = require('./loginValidation')
const {existenceCheck} = require('./existenceCheck')
const {authenticateUser} = require('./authenticateUser')

module.exports = {
    registrationValidation,
    loginValidation,
    existenceCheck,
    authenticateUser
}

