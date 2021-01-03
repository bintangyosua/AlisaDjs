const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'miion',
    description: `Display Information about ${AKB48.Mukaichi_Mion.name.romaji}.`,
    category: "💃   **AKB48** :",
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Mukaichi_Mion.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Mukaichi_Mion.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Mukaichi_Mion.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Mukaichi_Mion.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Mukaichi_Mion.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Mukaichi_Mion.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Mukaichi_Mion.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Mukaichi_Mion.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Mukaichi_Mion.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Mukaichi_Mion.instagram}`},
            { name: '**Youtube :**', value: `${AKB48.Mukaichi_Mion.youtube}`},
            { name: '**Showroom :**', value: `${AKB48.Mukaichi_Mion.showroom}`},
        )
        .setImage(AKB48.Mukaichi_Mion.images)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
	},
};