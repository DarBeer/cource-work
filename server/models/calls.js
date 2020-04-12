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

module.exports = mongoose.model('Call', Call);