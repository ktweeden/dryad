const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
  UID: { type: String, required: true},
  userName: {type: String, required: true}
})

const User = mongoose.model('User', UserSchema)


module.exports = User