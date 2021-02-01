const emoji = require('../../utils/emojis.json');
const eco = require("discord-economy");

module.exports = {
  name: 'coinflip',
  description: 'Display leaderboard',
  aliases: ['cf'],
  usage: '\`coinflip <heads/tails> <amount>\`',
  category: `${emoji.diamond}   Economy :`,
  run: async (client, message, args) => {
    var flip = args[0] //Heads or Tails
    var amount = args[1] //Coins to gamble

    if (!flip || !['heads', 'tails'].includes(flip)) return message.reply('Please specify the flip, either heads or tails!')
    if (!amount) return message.reply('Specify the amount you want to gamble!')

    var output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('You have fewer coins than the amount you want to gamble!')

    var gamble = await eco.Coinflip(message.author.id, flip, amount).catch(console.error)
  }
}