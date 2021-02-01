const mongoose = require('mongoose');

const reqString = {
    type: String,
    required: true
}

const ProfileSchema = new mongoose.Schema({
    userId: reqString,
    bio: {
        type: String,
        required: false
    },
    rep: {
        type: Number,
        required: false
    },
    xp: {
        type: Number,
        default: 0,
    },
    level: {
        type: Number,
        default: 0
    },
    balance: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model("Profile", ProfileSchema);