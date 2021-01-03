const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'tomochin',
    description: `Display Information about ${AKB48.Itano_Tomomi.name.romaji}.`,
    category: "💃   **AKB48** :",
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Itano_Tomomi.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Itano_Tomomi.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Itano_Tomomi.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Itano_Tomomi.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Itano_Tomomi.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Itano_Tomomi.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Itano_Tomomi.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Itano_Tomomi.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Itano_Tomomi.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Itano_Tomomi.instagram}`},
            { name: '**Weibo :**', value: `${AKB48.Itano_Tomomi.weibo}`},
            )
        .setImage(AKB48.Itano_Tomomi.image)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
	},
};