const Discord = require('discord.js');
const AKB48 = require('../../libs/akb48/member');

module.exports = {
	name: 'sasshii',
    description: `Display Information about ${AKB48.Sashihara_Rino.romaji}.`,
    category: "💃   **AKB48** :",
    aliases: ['rino', 'sasshiko', 'sasshi', 'sashi', 'sasshi', 'sashiko', 'sasshikoo', 'sashihararino', 'rinosashihara'],
    usage: "sasshii",
    run: async (client, message, args) => {

        let imagelist = [`${AKB48.Sashihara_Rino.image}`, `${AKB48.Sashihara_Rino.image2}`]
        var image = imagelist[Math.floor(Math.random() * imagelist.length)];


        const embed = new Discord.MessageEmbed()
        .setAuthor('HKT48', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/HKT48_logo.svg/1200px-HKT48_logo.svg.png')
        .setColor('f28ea8')
        .addFields(
            { name: '**Name :**', value: `${AKB48.Sashihara_Rino.romaji}`, inline:true },
            { name: '**Nickname :**', value: `${AKB48.Sashihara_Rino.nickname}`, inline: true },
            { name: '**Date of Birth :**', value: `${AKB48.Sashihara_Rino.date_of_birth}`},
            { name: '**From :**', value: `${AKB48.Sashihara_Rino.from}`},
            { name: '**CatchPhrase :**', value: `${AKB48.Sashihara_Rino.catch_phrase}`},
            { name: '**Office :**', value: `${AKB48.Sashihara_Rino.office} \nProducer of =LOVE and ≠ME`, inline:false },
            { name: '**Solo Singles :**', value: 'Soredemo Suki da yo (2012)\nIkuji Nashi Masquerade (2012)'},
            { name: '**Center Singles :**', value: `${AKB48.Sashihara_Rino.center_singles}`},
            { name: '**Current Teams :**', value: `Graduated, ${AKB48.Sashihara_Rino.current_teams}`, inline: true },
            { name: '**Twitter :**', value: `${AKB48.Sashihara_Rino.twitter}`},
            { name: '**Instagram :**', value: `${AKB48.Sashihara_Rino.instagram}`},
            { name: '**Ameblo :**', value: `${AKB48.Sashihara_Rino.ameblo}`},
            { name: '**Weibo :**', value: `${AKB48.Sashihara_Rino.weibo}`},
            { name: '**Showroom :**', value: `${AKB48.Sashihara_Rino.showroom}`},
            { name: '**Youtube :**', value: `${AKB48.Sashihara_Rino.youtube}`},
        )
        .setImage(image)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed);
	},
};