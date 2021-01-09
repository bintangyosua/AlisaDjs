const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'coinflip',
    aliases: ['cointoss'],
    category: `🎮   **Fun :**`,
    usage: 'coinflip',
    run: async (client, message) => {
        const n = Math.floor(Math.random() * 2);
        let result;
        if (n === 1) result = 'heads';
        else result = 'tails';
        const embed = new MessageEmbed()
            .setTitle('½  Coinflip  ½')
            .setDescription(`I flipped a coin for you, ${message.member}. It was **${result}**!`)
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor("ED80A7");
        message.channel.send(embed);
    },
};