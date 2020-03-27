const mongoose = require('mongoose');
const CallSchema = mongoose.Schema;

// Define collection and schema for Items
const Call = new CallSchema({
    phone: String,
    firstname: String,
    secondname: String,
    date: String
},{
    collection: 'calls'
});

Call.methods.setFirstname = function(password) {
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
  };

module.exports = mongoose.model('Call', Call);