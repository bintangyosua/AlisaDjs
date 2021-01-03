const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'juri',
    description: `Display Information about ${AKB48.Takahashi_Juri.name.romaji}.`,
    category: "💃   **AKB48** :",
    aliases: ['takahashijuri', 'juritakahashi'],
    usage: "juri",
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Takahashi_Juri.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Takahashi_Juri.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Takahashi_Juri.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Takahashi_Juri.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Takahashi_Juri.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Takahashi_Juri.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Takahashi_Juri.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Takahashi_Juri.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Takahashi_Juri.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Takahashi_Juri.instagram}`},
        )
        .setImage(AKB48.Takahashi_Juri.images)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
	},
};