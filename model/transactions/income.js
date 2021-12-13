const { Schema, model } = require('mongoose')
const Joi = require('joi')

const incomeSchema = Schema(
  {
    email: {
      type: String,
    },
    income: {
      type: String,
      required: [true, 'Set income for transation'],
    },
    date: {
      type: String,
      default: new Date().toISOString().slice(0, 10),
    },
    category: {
      type: String,
      required: [true, 'Set category for transation'],
    },
    description: {
      type: String,
      required: [false, 'Set description for transation'],
    },
    // name: {
    //   type: String,
    //   required: [true, 'Set name for contact'],
    // },
    // phone: {
    //   type: String,
    // },
    negative: {
      type: Boolean,
      required: [true],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
)
const schema = Joi.object({
  income: Joi.string().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  negative: Joi.boolean().required(),
  category: Joi.string().required(),
})

const Income = model('transactions', incomeSchema)

module.exports = {
  Income,
  schema,
  //   schemaFavorite,
}
