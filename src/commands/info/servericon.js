const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'servericon',
    aliases: ['icon', 'i'],
    usage: 'servericon',
    description: 'Displays the server\'s icon.',
    category: "📃   **Info :**",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle(`${message.guild.name}'s Icon`)
            .setImage(message.guild.iconURL({ dynamic: true, size: 512 }))
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
    }
}