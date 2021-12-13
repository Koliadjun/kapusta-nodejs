const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

const userSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    token: {
        type: String,
        default: null,
    },
    budget: {
        type: Number,
        default: null
    },
    avatarURL: {
        type: String
    },
})

userSchema.pre('save', async function () {
    if(this.isNew || this.isModified) {
        this.password = await bcrypt.hash(this.password, bcrypt.genSaltSync(10))
        this.avatarURL = `https://eu.ui-avatars.com/api/?name=${this.email}.com&length=1&rounded=true`
    }
    
})

const UserModel = mongoose.model('users', userSchema)

module.exports = {
    UserModel
}