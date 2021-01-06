const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'mayuyu',
    description: `Display Information about ${AKB48.Watanabe_Mayu.name.romaji}.`,
    category: "💃   **AKB48** :",
    aliases: ['watanabemayu', 'mayuwatanabe', 'mayu'],
    usage: "mayuyu",
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Watanabe_Mayu.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Watanabe_Mayu.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Watanabe_Mayu.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Watanabe_Mayu.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Watanabe_Mayu.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Watanabe_Mayu.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Watanabe_Mayu.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Watanabe_Mayu.current_teams}`, inline: true },
            )
        .setImage(AKB48.Watanabe_Mayu.images)
        .setTimestamp()
        .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed);
	},
};