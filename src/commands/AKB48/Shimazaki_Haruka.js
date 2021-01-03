const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'paruru',
    description: `Display Information about ${AKB48.Shimazaki_Haruka.name.romaji}.`,
    category: "💃   **AKB48** :",
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Shimazaki_Haruka.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Shimazaki_Haruka.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Shimazaki_Haruka.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Shimazaki_Haruka.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Shimazaki_Haruka.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Shimazaki_Haruka.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Shimazaki_Haruka.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Shimazaki_Haruka.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Shimazaki_Haruka.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Shimazaki_Haruka.instagram}`},
            { name: '**Youtube :**', value: `${AKB48.Shimazaki_Haruka.youtube}`},
            { name: '**Weibo :**', value: `${AKB48.Shimazaki_Haruka.weibo}`},
            { name: '**Tiktok :**', value: `${AKB48.Shimazaki_Haruka.tiktok}`},
            { name: '**Showroom :**', value: `${AKB48.Shimazaki_Haruka.showroom}`},
        )
        .setImage(AKB48.Shimazaki_Haruka.images)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
	},
};