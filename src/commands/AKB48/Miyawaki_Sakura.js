const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'sakura',
    description: `Display Information about ${AKB48.Miyawaki_Sakura.name.romaji}.`,
    category: "💃   **AKB48** :",
    aliases: ['miyawakisakura', 'sakuramiyawaki', 'sakuratan'],
    usage: "sakura",
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('HKT48', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/HKT48_logo.svg/1200px-HKT48_logo.svg.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Miyawaki_Sakura.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Miyawaki_Sakura.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Miyawaki_Sakura.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Miyawaki_Sakura.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Miyawaki_Sakura.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Miyawaki_Sakura.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Miyawaki_Sakura.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Miyawaki_Sakura.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Miyawaki_Sakura.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Miyawaki_Sakura.instagram}`},
            { name: '**Youtube :**', value: `${AKB48.Miyawaki_Sakura.youtube}`},
            { name: '**Tiktok :**', value: `${AKB48.Miyawaki_Sakura.tiktok}`},
            { name: '**Showroom :**', value: `${AKB48.Miyawaki_Sakura.showroom}`},
        )
        .setImage(AKB48.Miyawaki_Sakura.images)
        .setTimestamp()
        .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed);
	},
};