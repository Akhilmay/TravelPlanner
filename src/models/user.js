const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  studentId: { type: String }
});

const UserInfo = mongoose.model('UserInfo', userSchema, 'UserInfo');

module.exports = UserInfo;
