const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    trim: true
  },
  cohort_number: {
    type: String,
    require: true,
    trim: true
  },
  month: {
    type: String,
    require: true,
    trim: true
  },
  date: {
    type: String,
    require: true,
    trim: true
  }
})