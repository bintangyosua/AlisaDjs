const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'yuiri',
    description: `Display Information about ${AKB48.Murayama_Yuiri.name.romaji}.`,
    category: "💃   **AKB48** :",
    aliases: ['murayamayuiri', 'yuirimurayama'],
    usage: "yuiri",
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Murayama_Yuiri.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Murayama_Yuiri.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Murayama_Yuiri.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Murayama_Yuiri.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Murayama_Yuiri.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Murayama_Yuiri.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Murayama_Yuiri.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Murayama_Yuiri.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Murayama_Yuiri.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Murayama_Yuiri.instagram}`},
            { name: '**Youtube :**', value: `${AKB48.Murayama_Yuiri.youtube}`},
            { name: '**Showroom :**', value: `${AKB48.Murayama_Yuiri.showroom}`},
        )
        .setImage(AKB48.Murayama_Yuiri.images)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
	},
};