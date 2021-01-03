const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'kitarie',
    description: `Display Information about ${AKB48.Kitahara_Rie.name.romaji}.`,
    category: "💃   **AKB48** :",
    usage: "kitarie",
    aliases: ['kitahararie', 'riekitahara'],
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Kitahara_Rie.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Kitahara_Rie.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Kitahara_Rie.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Kitahara_Rie.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Kitahara_Rie.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Kitahara_Rie.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Kitahara_Rie.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Kitahara_Rie.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Kitahara_Rie.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Kitahara_Rie.instagram}`},
            { name: '**Youtube :**', value: `${AKB48.Kitahara_Rie.youtube}`},
            { name: '**Weibo :**', value: `${AKB48.Kitahara_Rie.weibo}`},
        )
        .setImage(AKB48.Kitahara_Rie.images)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
	},
};