const emoji = require('../../utils/emojis.json');
const eco = require('discord-mongoose-economy');

module.exports = {
  name: 'balance',
  description: 'Display balance',
  aliases: ['bal', 'credits', 'money', 'credit'],
  usage: 'balance / balance <@user>',
  category: `${emoji.diamond}   Economy :`,
  run: async (client, message, args) => {
    const balance = await eco.balance(message.author.id, message.guild.id); //Returns wallet, bank, and bankCapacity. Also creates a USer if it doesn't exist.
    message.channel.send(`Wallet: ${balance.wallet}\nBank: ${balance.bank}/${balance.bankCapacity}`);
  }
}