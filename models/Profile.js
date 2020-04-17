const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  handle: { type: String, required: true },
  age: { type: Number },
  sex: { type: String },
  email: { type: String },
  location: { type: String },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
