const { UserModel } = require('../../db/userModel')
const { Unauthorized } = require('http-errors')
const jsonwebtoken = require('jsonwebtoken')

const current = async (token) => {
    const { _id } = await jsonwebtoken.verify(token, process.env.SECRET_KEY)
    const user = await UserModel.findById(_id)
    if (!user || user.token !== token) {
        throw new Unauthorized('No such user!')
    }
    // const userData = {
    //     email: user.email,
    //     name: user.name,
    //     budget: user.budget,
    //     avatarURL: user.avatarURL,
    //     token: user.token
    // }
    return user
}

module.exports = {
    current
}