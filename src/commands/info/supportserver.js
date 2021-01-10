const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "supportserver",
    description: "Displays the invite link to Calypso\'s Discord Support Server.",
    category: `📃   **Info :**`,
    aliases: ['support', 'ss'],
    usage: "supportserver",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle('Support Server')
            .setDescription('Click [here](https://discord.gg/uXFZScA) to join the Lumina Support Server!')
            .addField('Other Links', 
            '**[Invite Me](https://discord.com/oauth2/authorize?client_id=780018362138886144&scope=bot&permissions=2147483647)**'
            )
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setImage('https://raw.githubusercontent.com/bintangyosua/LuminaDjs/main/src/libs/images/Durandal_Banner.png?token=AOMEPO6VNXXIA6LTO3UOQR277KOY6')
            .setColor("fee588");
        message.channel.send(embed);
    }
}