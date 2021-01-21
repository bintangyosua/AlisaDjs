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
            .setImage('https://cdn.discordapp.com/attachments/797800866173288468/798425454163394572/Invite_Me.png')
            .setDescription(oneLine`
            Click [here](https://discord.com/oauth2/authorize?client_id=780018362138886144&scope=bot&permissions=2147483647)
            to invite me to your server!
            `)
            .addField('Other Links', 
            '**[Support Server](https://discord.gg/uXFZScA) | ' +
            '[Serah](https://discord.com/oauth2/authorize?client_id=670865375470288906&scope=bot&permissions=2147483647&response_type=code) | ' +
            '[Github](https://github.com/bintangyosua/Lumina/)**'
            )
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor("755172");
        message.channel.send(embed);
    }
}