const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'takamina',
    description: `Display Information about ${AKB48.Takahashi_Minami.name.romaji}.`,
    category: "💃   **AKB48** :",
    aliases: ['takahashiminami', 'minamitakahashi'],
    usage: "takamina",
	run: async (client, message, args) => {
        const embed = new Discord.MessageEmbed()
        .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Takahashi_Minami.name.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Takahashi_Minami.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Takahashi_Minami.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Takahashi_Minami.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Takahashi_Minami.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Takahashi_Minami.office}` },
            { name: '**Center Singles :**', value: `${AKB48.Takahashi_Minami.center_singles}`},
            { name: '**Current Teams :**', value: `${AKB48.Takahashi_Minami.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Takahashi_Minami.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Takahashi_Minami.instagram}`},
            )
        .setImage(AKB48.Takahashi_Minami.images)
        .setTimestamp()
        .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed);
	},
};