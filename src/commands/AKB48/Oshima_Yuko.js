const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'yuuko',
    description: `Display Information about ${AKB48.Oshima_Yuko.name.romaji}.`,
    category: "💃   **AKB48** :",
    aliases: ['oshimayuko', 'yukooshima', 'yuko'],
    usage: 'yuuko',
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Oshima_Yuko.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Oshima_Yuko.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Oshima_Yuko.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Oshima_Yuko.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Oshima_Yuko.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Oshima_Yuko.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Oshima_Yuko.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Oshima_Yuko.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Oshima_Yuko.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Oshima_Yuko.instagram}`},
        )
        .setImage(AKB48.Oshima_Yuko.images)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
	},
};