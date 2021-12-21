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
        default: 'google'
    },
    token: {
        type: String,
        default: null,
    },
    name: {
        type: String,
        default: null,
    },
    initialBalance: {
        type: Number,
        default: null
    },
    balanceIsSet: {
        type: Boolean,
        default: false
    },
    avatarURL: {
        type: String
    },
    verificationToken: {
        type: String,
        default: null
    },
    verify: {
        type: Boolean,
        default: true
  }
})

userSchema.pre('save', async function () {
    if(this.isNew || this.isModified) {
        if(this.password !== 'google') {
            this.password = await bcrypt.hash(this.password, bcrypt.genSaltSync(10))
            this.verify = false
        }
        this.avatarURL = `https://eu.ui-avatars.com/api/?name=${this.email}.com&length=1&rounded=true`
    }
    
})

const UserModel = mongoose.model('users', userSchema)

module.exports = {
    UserModel
}