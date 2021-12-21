const {current} = require('../../model')
const jsonwebtoken = require('jsonwebtoken')
const { Unauthorized } = require('http-errors')
const { UserModel } = require('../../db/userModel')

const currentController = async (req, res) => {
    try {
        if (!req.headers.authorization) throw new Unauthorized('no token provided')
        const [bearer, token] = req.headers.authorization.split(' ')
        console.log(`-----------------`, token)
        if (bearer !== 'Bearer')
          throw new Unauthorized('please, provide a bearer token')
        try {
          const userData = await current(token)
          res.status(200).json({userData})
        } catch (err) {
          throw new Unauthorized(err.message)
        }
      } catch (err) {
        throw new Unauthorized('please, provide a valid token')
      }
}

module.exports = {
    currentController
}