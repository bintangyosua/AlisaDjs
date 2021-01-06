const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'sae',
    description: `Display Information about ${AKB48.Miyazawa_Sae.name.romaji}.`,
    category: "💃   **AKB48** :",
    aliases: ['miyazawasae', 'saemiyazawa'],
    usage: "sae",
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Miyazawa_Sae.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Miyazawa_Sae.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Miyazawa_Sae.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Miyazawa_Sae.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Miyazawa_Sae.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Miyazawa_Sae.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Miyazawa_Sae.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Miyazawa_Sae.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Miyazawa_Sae.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Miyazawa_Sae.instagram}`},
            )
        .setImage(AKB48.Miyazawa_Sae.images)
        .setTimestamp()
        .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed);
	},
};