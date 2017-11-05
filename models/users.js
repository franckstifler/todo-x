// TODO maybe think of creating different collections.
const mongoose = require("mongoose");
const { taskSchema } = require("./tasks");

const Schema = mongoose.Schema;

const categorySchema = new Schema({
  name: {
    type: String,
    trim: true
  },
  icon: String,
  color: String,
  endDate: Date,
  tasks: [taskSchema]
});

const userSchema = new Schema({
  username: String,
  email: {
    type: String,
    required: true,
    unique: true,
    index: true
  },
  password: {
      type: String,
      required: true,
      min: [4, 'Password too short enter at least 4 chars']
  },
  created_at: { type: Date, default: Date.now },
  categories: [categorySchema]
}); 

const User = mongoose.model("User", userSchema);
module.exports = User;
