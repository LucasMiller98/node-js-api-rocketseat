const { models } = require('../database')
const mongoose = require('../database')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },

  password: {
    type: String,
    required: true,
    select: false, // pra quando um user for buscado ou varios users do bd a informação da senha não velha pro arra de users
  },

  createdAt: { // data do registro
    type: Date,
    default: Date.now,
  },
})

const User = mongoose.model('User', UserSchema)

models.exports = User