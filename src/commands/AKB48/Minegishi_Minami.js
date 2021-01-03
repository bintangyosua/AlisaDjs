const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'micchan',
    description: `Display Information about ${AKB48.Minegishi_Minami.name.romaji}.`,
    category: "💃   **AKB48** :",
    aliases: ['minegishiminami', 'minamiminegishi'],
    usage: "micchan",
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Minegishi_Minami.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Minegishi_Minami.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Minegishi_Minami.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Minegishi_Minami.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Minegishi_Minami.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Minegishi_Minami.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Minegishi_Minami.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Minegishi_Minami.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Minegishi_Minami.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Minegishi_Minami.instagram}`},
            { name: '**Tiktok :**', value: `${AKB48.Minegishi_Minami.tiktok}`},
            { name: '**Showroom :**', value: `${AKB48.Minegishi_Minami.showroom}`},
        )
        .setImage(AKB48.Minegishi_Minami.images)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
	},
};