const { Schema, model } = require('mongoose')

const incomeSchema = Schema(
  {
    sum: {
      type: Number,
      default: '0',
      required: [true, 'Set income for transation'],
    },
    date: {
      type: String,
      default: new Date().toISOString().slice(0, 10),
    },
    year: {
      type: Number,
      required: [true],
      default: null,
    },
    month: {
      type: Number,
      required: [true],
      default: null,
    },
    day: {
      type: Number,
      required: [true],
      default: null,
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
