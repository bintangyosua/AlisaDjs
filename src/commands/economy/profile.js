const Levels = require('discord-xp');
const mongoCurrency = require('discord-mongo-currency');
const { MessageEmbed } = require('discord.js');
const emoji = require('../../emojis.json')

module.exports = {
    name: 'profile',
    description: 'display your profile',
    aliases: ['pf'],
    usage: 'profile',
    category: `${emoji.diamond}   Economy :`,
    run: async (client, message, args) => {
        const target = message.mentions.users.first() || message.author; // Grab the target.
        
        const user = await Levels.fetch(target.id, message.user.id); // Selects the target from the database.

        const member = message.mentions.members.first() || message.member;
 
        const userCurrency = await mongoCurrency.findUser(member.id, message.guild.id);

        const embed = new MessageEmbed()
            .setAuthor(`${message.author.username}\'s Profile`, message.author.displayAvatarURL())
            .setThumbnail(message.author.displayAvatarURL())
            .setDescription(`
**Level  :** ${user.level}.
**Wallet  :** ${userCurrency.coinsInWallet}
**Bank  :** ${userCurrency.coinsInBank}/${userCurrency.bankSpace}
**Total  :** ${userCurrency.coinsInBank + userCurrency.coinsInWallet}
                           `)
            .setColor('RED')
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}