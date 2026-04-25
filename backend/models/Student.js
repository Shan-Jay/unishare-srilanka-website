const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  index: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  course: { type: String, required: true },
  results: [{
    subject: String,
    grade: String,
    marks: Number
  }],
}, { timestamps: true });

module.exports = mongoose.model('Student', StudentSchema);