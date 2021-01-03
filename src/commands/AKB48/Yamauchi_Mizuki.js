const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'zukky',
    description: `Display Information about ${AKB48.Yamauchi_Mizuki.name.romaji}.`,
    category: "💃   **AKB48** :",
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Yamauchi_Mizuki.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Yamauchi_Mizuki.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Yamauchi_Mizuki.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Yamauchi_Mizuki.from}`},
            { name: '**Office :**', value: `${AKB48.Yamauchi_Mizuki.office}`},
            { name: '**Center Singles :**', value: `${AKB48.Yamauchi_Mizuki.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Yamauchi_Mizuki.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Yamauchi_Mizuki.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Yamauchi_Mizuki.instagram}`},
            { name: '**Showroom :**', value: `${AKB48.Yamauchi_Mizuki.showroom}`},
        )
        .setImage(AKB48.Yamauchi_Mizuki.images)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
	},
};