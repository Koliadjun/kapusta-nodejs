const app = require('../app')
const db = require('../db/connection')
require('dotenv').config()

const PORT = process.env.PORT || 3000

db.then(() => console.log('Database connection successful')).then(() => app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`)
}))
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })
