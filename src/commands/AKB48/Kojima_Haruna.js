const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'nyanchan',
    description: `Display Information about ${AKB48.Kojima_Haruna.name.romaji}.`,
    category: "💃   **AKB48** :",
    aliases: ['kojimaharuna', 'harunakojima', 'harunyan', 'kojiharu'],
    usage: 'nyanchan',
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Kojima_Haruna.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Kojima_Haruna.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Kojima_Haruna.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Kojima_Haruna.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Kojima_Haruna.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Kojima_Haruna.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Kojima_Haruna.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Kojima_Haruna.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Kojima_Haruna.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Kojima_Haruna.instagram}`},
            { name: '**Youtube :**', value: `${AKB48.Kojima_Haruna.youtube}`},
            { name: '**Tiktok :**', value: `${AKB48.Kojima_Haruna.tiktok}`},
        )
        .setImage(AKB48.Kojima_Haruna.images)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
	},
};