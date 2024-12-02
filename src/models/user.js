const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  contact: { type: String }
});

const UserInfo = mongoose.model('UserInfo', userSchema, 'UserInfo');

module.exports = UserInfo;
