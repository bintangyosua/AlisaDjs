const emoji = require('../../utils/emojis.json');
const eco = require("discord-economy");

module.exports = {
  name: 'balance',
  description: 'Display balance',
  aliases: ['bal', 'credits', 'money'],
  usage: '\`balance | balance <@user>\`',
  category: `${emoji.diamond}   Economy :`,
  run: async (client, message, args) => {
    var output = await eco.FetchBalance(message.author.id)
    message.channel.send(`Hey ${message.author.tag}! You own ${output.balance} coins.`);
  }
}