const emoji = require('../../utils/emojis.json');
const { MessageEmbed } = require('discord.js');
const mongoCurrency = require('discord-mongo-currency');

module.exports = {
    name: "balance",
    category: `${emoji.diamond}   Economy :`,
    description: "beg for money",
    aliases: ['bal', 'credit', 'credits', 'money'],
    usage: "balance",
    run: async (client, message, args) => {
        const member = message.mentions.members.first() || message.member;
 
        const user = await mongoCurrency.findUser(member.id, message.guild.id); // Get the user from the database.
     
        const embed = new MessageEmbed()
        .setTitle(`${member.user.username}'s Balance`)
        .setDescription(`Wallet: ${user.coinsInWallet}
Bank: ${user.coinsInBank}/${user.bankSpace}
Total: ${user.coinsInBank + user.coinsInWallet}`);
        
        message.channel.send(embed);

    }
}