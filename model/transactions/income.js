const { Schema, model } = require('mongoose')
const Joi = require('joi')

const incomeSchema = Schema(
  {
    income: {
      type: String,
      default: '0',
      required: [true, 'Set income for transation'],
    },
    spend: {
      type: String,
      default: '0',
      required: [true, 'Set spend for transation'],
    },
    date: {
      type: String,
      default: new Date().toISOString().slice(0, 10),
    },
    category: {
      type: String,
      required: [false, 'Set category for transation'],
      default: '-empty-',
    },
    description: {
      type: String,
      required: [false, 'Set description for transation'],
      default: '-empty-',
    },
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
  // email: Joi.string()
  //   .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
  //   .required(),
  income: Joi.string().min(1).max(30),
  spend: Joi.string().min(1).max(30),
  date: Joi.string(),
  negative: Joi.boolean().required(),
  category: Joi.string(),
  description: Joi.string(),
})

const Income = model('transactions', incomeSchema)

module.exports = {
  Income,
  schema,
}
