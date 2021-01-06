const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');

module.exports = {
    name: 'inviteme',
    aliases: ['invite', 'invme', 'im'],
    usage: 'inviteme',
    description: 'Generates a link you can use to invite Lumina to your own server.',
    category: "📃   **Info :**",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle('Invite Me')
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription(oneLine`
            Click [here](https://discord.com/oauth2/authorize?client_id=780018362138886144&scope=bot&permissions=2147483647)
            to invite me to your server!
            `)
            .addField('Other Links', 
            '**[Support Server](https://discord.gg/uXFZSca) | ' +
            '[Serah](https://discord.com/oauth2/authorize?client_id=670865375470288906&scope=bot&permissions=2147483647&response_type=code)**'
            )
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
    }
}