const { NotFound } = require('http-errors')
const { Income } = require('../../model')

const deleteById = async (req, res) => {
  const { id } = req.params
  console.log(id)
  const result = await Income.findByIdAndRemove(id)
  console.log(result)

  if (!result) {
    throw new NotFound(`Not found id = ${id}`)
  }
  res.json({ status: 'succes', code: 200, message: 'contact deleted' })
}

module.exports = deleteById
