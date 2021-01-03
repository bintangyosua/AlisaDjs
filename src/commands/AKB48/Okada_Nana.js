const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'nachan',
    description: `Display Information about ${AKB48.Okada_Nana.name.romaji}.`,
    category: "💃   **AKB48** :",
    aliases: ['okadanana', 'nanaokada'],
    usage: "nachan",
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Okada_Nana.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Okada_Nana.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Okada_Nana.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Okada_Nana.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Okada_Nana.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Okada_Nana.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Okada_Nana.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Okada_Nana.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Okada_Nana.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Okada_Nana.instagram}`},
            { name: '**Youtube :**', value: `${AKB48.Okada_Nana.youtube}`},
            { name: '**Showroom :**', value: `${AKB48.Okada_Nana.showroom}`},
        )
        .setImage(AKB48.Okada_Nana.images)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
	},
};