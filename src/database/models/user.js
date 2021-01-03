const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    _id: String,

    money: {type: Number, default: 0}
})

module.exports = mongoose.model("User", UserSchema);