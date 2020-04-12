const mongoose = require('mongoose');
const UsersSchema = mongoose.Schema;

const User = new UsersSchema({
  firstname: String,
  lastname: String,
  email: String,
  password: String,
  role: String
}, {
    collection: 'users'
});

module.exports = mongoose.model('User', User);