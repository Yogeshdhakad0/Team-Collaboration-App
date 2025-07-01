const mongoose = require('mongoose');


const projectSchema = new mongoose.Schema({
projectname: {
    type: String,
    required: true
  },
  workspaceId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Workspace',
   
  },
  description: String,

}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema);
 