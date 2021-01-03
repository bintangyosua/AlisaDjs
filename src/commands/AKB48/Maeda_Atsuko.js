const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'acchan',
    description: `Display Information about ${AKB48.Maeda_Atsuko.name.romaji}.`,
    category: "💃   **AKB48** :",
    aliases: ['maedaatsuko', 'atsukomaeda'],
    usage: "acchan",
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Maeda_Atsuko.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Maeda_Atsuko.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Maeda_Atsuko.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Maeda_Atsuko.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Maeda_Atsuko.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Maeda_Atsuko.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Maeda_Atsuko.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Maeda_Atsuko.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Maeda_Atsuko.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Maeda_Atsuko.instagram}`},
            )
        .setImage(AKB48.Maeda_Atsuko.images)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
	},
};