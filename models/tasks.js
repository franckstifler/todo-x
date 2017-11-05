const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const doneSchema = new Schema({
    date: Date,
    done: Boolean
})
const taskSchema = new Schema({
  title: {
    type: String
  },
  time: Date,
  completed: [doneSchema]
});

// const Task = mongoose.model('Task', taskSchema);

module.exports = {
    taskSchema
}
