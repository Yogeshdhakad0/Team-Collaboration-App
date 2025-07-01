const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
taskId: {

  type: mongoose.Schema.Types.ObjectId,

  ref: 'Task',

  required: true

},

memberId: {

  type: mongoose.Schema.Types.ObjectId,

  ref: 'member',

  required: true

},

membercommenttext: {

  type: String,

  required: true

},
  status: {
    type: String,
    enum: ['active', 'resolved'],
    default: 'active'
  }
}, { timestamps: true });

// 👇 Yeh line change ki gayi hai: Capital "M"
const commentmember = mongoose.model('commentmember', memberSchema);

module.exports = commentmember;