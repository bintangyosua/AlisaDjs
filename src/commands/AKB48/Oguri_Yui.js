const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'yuiyui',
    description: `Display Information about ${AKB48.Oguri_Yui.name.romaji}.`,
    category: "💃   **AKB48** :",
    aliases: ['oguriyui', 'yuioguri'],
    usage: "yuiyui",
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Oguri_Yui.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Oguri_Yui.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Oguri_Yui.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Oguri_Yui.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Oguri_Yui.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Oguri_Yui.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Oguri_Yui.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Oguri_Yui.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Oguri_Yui.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Oguri_Yui.instagram}`},
            { name: '**Tiktok :**', value: `${AKB48.Oguri_Yui.tiktok}`},
            { name: '**Showroom :**', value: `${AKB48.Oguri_Yui.showroom}`},
        )
        .setImage(AKB48.Oguri_Yui.images)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
	},
};