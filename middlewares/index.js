const {registrationValidation} = require('./registrationValidation')
const {loginValidation} = require('./loginValidation')
const {authenticateUser} = require('./authenticateUser')

module.exports = {
    registrationValidation,
    loginValidation,
    authenticateUser
}

