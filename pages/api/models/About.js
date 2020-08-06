const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AboutSchema = new Schema({
    skills: {
        type: Array
    },
    description: {
        type: Array
    },
    socialMedia: [{
        faIcon: String,
        url: String
    }]
});

module.exports = About = mongoose.model('About', AboutSchema);
