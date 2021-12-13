// const { Schema, model } = require('mongoose')
// const Joi = require('joi')

// const spendSchema = Schema(
//   {
//     spend: {
//       type: String,
//       required: [true, 'Set income for transation'],
//     },
//     date: {
//       type: String,
//       default: new Date().toISOString().slice(0, 10),
//     },
//     category: {
//       type: String,
//       required: [false, 'Set category for transation'],
//       default: '-empty-',
//     },
//     description: {
//       type: String,
//       required: [false, 'Set description for transation'],
//       default: '-empty-',
//     },
//     negative: {
//       type: Boolean,
//       required: [true],
//     },
//     owner: {
//       type: Schema.Types.ObjectId,
//       ref: 'user',
//     },
//   },
//   { versionKey: false, timestamps: true }
// )
// const schemaSpend = Joi.object({
//   spend: Joi.string().min(3).max(30).required(),
//   date: Joi.string(),
//   negative: Joi.boolean().required(),
//   category: Joi.string(),
//   description: Joi.string(),
// })

// const Spend = model('transactions', spendSchema)

// module.exports = {
//   Spend,
//   schemaSpend,
// }
