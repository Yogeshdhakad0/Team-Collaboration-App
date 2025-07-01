
const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({




taskId: {

  type: mongoose.Schema.Types.ObjectId,

  ref: 'Task',

  required: true

},

userId:{

  type: mongoose.Schema.Types.ObjectId,

  ref: 'User',

  required: true

},

commenttext: {

  type: String,

  required: true

},


    }

, { timestamps: true });

const comment = mongoose.model('comment', commentSchema);

module.exports = comment;




