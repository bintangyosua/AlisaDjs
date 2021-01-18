const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    userId: String,
    username: String,
    bio: String,
    rep: Number,
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