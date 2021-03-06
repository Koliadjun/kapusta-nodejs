const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const authRouter = require('./routes/api/authRoutes')
const transactions = require('./routes/api/transactions')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express()
require('dotenv').config()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.static('public'))
app.use(express.json())

app.use('/api/auth', authRouter)
app.use('/api/transactions', transactions)
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  const { status = 500, message = 'Server error' } = err
  res.status(status).json({ message })
})

module.exports = app
