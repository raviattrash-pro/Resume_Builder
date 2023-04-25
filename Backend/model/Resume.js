const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const resumeSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    designation: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    socialMedia: {
        type: String,
        required: true
    },
    skills: {
        type: String,
        required: true
    },
    socialMedia: {
        type: String,
        required: true
    },
    yournotes: {
        type: String,
        required: true
    },
    projects: {
        type: String,
        required: true
    },
    achievemants: {
        type: String,
        required: true
    },
    language: {
        type: String,
        required: true
    },
    interest: {
        type: String,
        required: true
    },
    ssc_mark: {
        type: String,
        required: true
    },
    hssc_mark: {
        type: String,
        required: true
    },
    btech_mark: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model("Resume", resumeSchema);