const eco = require("discord-economy");

module.exports = {
    name: 'coinflip',
    description: 'Gamble with coinflip',
    aliases: ['cf'],
    usage: 'coinflip',
    category: ':money_with_wings:   Economy :',
    run: async (client, message, args) => {
        var flip = args[0] //Heads or Tails
        var amount = args[1] //Coins to gamble
     
        if (!flip || !['heads', 'tails'].includes(flip)) return message.reply('Please specify the flip, either heads or tails!')
        if (!amount) return message.reply('Specify the amount you want to gamble!')
     
        var output = await eco.FetchBalance(message.author.id)
        if (output.balance < amount) return message.reply('You have fewer credits than the amount you want to gamble!')
     
        var gamble = await eco.Coinflip(message.author.id, flip, amount).catch(console.error)
        message.reply(`You ${gamble.output}! New balance: :money_with_wings: ${gamble.newbalance} credits.`)
    }
}