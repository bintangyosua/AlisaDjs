const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'avatar',
    description: 'Gives avatar for message author or mentioned user.',
    aliases: ['ava', 'pfp'],
    category: `📃   **Info :**`,
    usage: 'avatar/avatar <@user>',
    run: async (client, message) => {
        let user = message.mentions.users.first() || message.author;

        let embed = new MessageEmbed()
            .setTitle(`${user.username}'s Avatar!`)
            .setDescription(`[***Avatar Url***](${message.author.displayAvatarURL({ dynamic: true })})`)
            .setImage(user.avatarURL({size: 2048, dynamic: true, format: "png"}))
            .setColor("ED80A7")
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp();
        message.channel.send(embed);
    }
}