const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Reaction Schema
const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new mongoose.Types.ObjectId(),
  },
  reactionBody: {
    type: String,
    required: true,
    maxlength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => formatDate(createdAtVal) // Optional: format date if needed
  }
}, {
  toJSON: {
    getters: true
  }
});

// Thought Schema
const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (createdAtVal) => formatDate(createdAtVal) 
  },
  username: {
    type: String,
    required: true
  },
  reactions: [reactionSchema] 
}, {
  toJSON: {
    virtuals: true,
    getters: true
  }
});

// Virtual to get reaction count
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

function formatDate(date) {
  return new Date(date).toLocaleDateString();
}

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
