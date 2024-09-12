const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    match: [/.+@.+..+/, 'Please enter a valid email address']
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Thought'
    }
  ]
}, {
  toJSON: {
    virtuals: true
  }
});

// Virtual to get friend count
userSchema.virtual('friendCount').get(function() {
  
  return 0; 
});

const User = mongoose.model('User', userSchema);

module.exports = User;