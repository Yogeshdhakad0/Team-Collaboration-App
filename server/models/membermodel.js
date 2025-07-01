// const mongoose = require('mongoose');

// const memberSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
    
//   },
//   owner: {
//     type: mongoose.Schema.Types.ObjectId,
//   },
//       status: {
//         type: String,
//         enum: ['invited', 'accepted'],
//         default: 'invited'
//       }
//     }

// , { timestamps: true });

// const member = mongoose.model('member', memberSchema);

// module.exports = member;


const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
  },
  status: {
    type: String,
    enum: ['invited', 'accepted'],
    default: 'invited'
  }
}, { timestamps: true });

// 👇 Yeh line change ki gayi hai: Capital "M"
const Member = mongoose.model('Member', memberSchema);

module.exports = Member;
