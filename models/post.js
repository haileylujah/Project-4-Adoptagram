const mongoose = require('mongoose');

const likesSchema = mongoose.Schema({
  username: String,
  userId: { type: mongoose.Schema.Types.ObjectId }
})

const postSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'}, // referencing a model
  photoUrl: String,
  petName: String,
  petSex: String,
  petAge: String,
  petBreed: String,
  petHealth: String,
  likes: [likesSchema]
})

module.exports = mongoose.model('Post', postSchema);