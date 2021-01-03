const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'yukirin',
    description: `Display Information about ${AKB48.Kashiwagi_Yuki.name.romaji}.`,
    category: "💃   **AKB48** :",
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Kashiwagi_Yuki.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Kashiwagi_Yuki.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Kashiwagi_Yuki.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Kashiwagi_Yuki.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Kashiwagi_Yuki.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Kashiwagi_Yuki.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Kashiwagi_Yuki.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Kashiwagi_Yuki.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Kashiwagi_Yuki.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Kashiwagi_Yuki.instagram}`},
            { name: '**Youtube :**', value: `${AKB48.Kashiwagi_Yuki.youtube}`},
            { name: '**Weibo :**', value: `${AKB48.Kashiwagi_Yuki.weibo}`},
            { name: '**Showroom :**', value: `${AKB48.Kashiwagi_Yuki.showroom}`},
        )
        .setImage(AKB48.Kashiwagi_Yuki.images)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
	},
};