const { Schema, model } = require('mongoose')

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
      default: null,
    },
    description: {
      type: String,
      required: [false, 'Set description for transation'],
      default: null,
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

const Income = model('transactions', incomeSchema)

module.exports = { Income }
