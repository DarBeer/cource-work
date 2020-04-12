const mongoose = require('mongoose');
const ReportSchema = mongoose.Schema;

// Define collection and schema for Items
const Report = new ReportSchema({
    header: String,
    desctiprion: String,
    user: {
        firstname: String,
        lastname: String,
        email: String
    },
    date: String
},{
    collection: 'reports'
});

module.exports = mongoose.model('Report', ReportSchema);