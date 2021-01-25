const { MessageEmbed } = require('discord.js');
const Levels = require('discord-xp');
const emoji = require('../../utils/emojis.json');

module.exports = {
    name: 'leaderboard',
    description: 'display global leaderboard',
    aliases: ['lb'],
    usage: 'leaderboard',
    category: `${emoji.diamond}   Economy :`,
    run: async (client, message, args) => {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.
 
        if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");
        
        const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.
        
        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`); // We map the outputs.
        console.log(lb)
        const embed = new MessageEmbed()
            .setAuthor('Lumina\'s Leaderboard', client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(`\n\n${lb.join("\n\n")}`)
            .setColor('ED80A7')
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
        

        message.channel.send(embed);
    }
}