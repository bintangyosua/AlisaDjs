const mongoose = require('mongoose');

const GuildSchema = mongoose.Schema({
    guildId: {
        type: String,
        required: true,
    }, 
    prefix: {
        type: String,  
    }, 
});

module.exports = mongoose.model(`guild-settings`, GuildSchema);