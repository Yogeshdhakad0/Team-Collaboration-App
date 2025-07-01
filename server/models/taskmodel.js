



const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  taskname: {
    type: String,
    required: true
  },
  projectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true  // Task must belong to a project
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Member',   // Or 'User' if your member is a user
    required: true
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',   // The logged-in user creating this task
    required: true
  },
  dueDate: {
    type: Date
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high'],
    default: 'medium'
  },
  status: {
    type: String,
    enum: ['todo', 'in-progress', 'done'],
    default: 'todo'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Task', taskSchema);