const mongoose = require('mongoose')
require('dotenv').config()
const { DB_USER, DB_USER_PASS, DB_NAME } = process.env
const CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_USER_PASS}@cluster0.vnjhf.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`

const db = mongoose.connect(CONNECTION_STRING)

module.exports = db
