const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  details: {
    type: String,
    required: true,
    minlength: 4,
    maxlength: 100,
  },
});

module.exports = mongoose.model("Task", taskSchema);
