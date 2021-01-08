const discord = require('discord.js')
const emoji = require('../../emojis.json')
const Levels = require('discord-xp')

module.exports = {
    name: "rank",
    category: `${emoji.diamond}   Economy :`,
    description: "get your level",
    aliases: ['level'],
    usage: "rank",
    cooldown: 5000,
    run: async (client, message, args) => {
        const target = message.mentions.users.first() || message.author; // Grab the target.
        
        const user = await Levels.fetch(target.id, message.guild.id); // Selects the target from the database.
        
        if (!user) return message.channel.send("Seems like this user has not earned any xp so far."); // If there isnt such user in the database, we send a message in general.
        
        message.channel.send(`> **${target.tag}** is currently level ${user.level}.`); // We show the level.        
    }
}

