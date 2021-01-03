const eco = require("discord-economy");

module.exports = {
    name: 'credits',
    description: 'Display your current credits',
    aliases: ['balance', 'bal', 'money'],
    usage: 'credits',
    category: ':money_with_wings:   Economy :',
    run: async (client, message, args) => {
        var output = await eco.FetchBalance(message.author.id)
        message.channel.send(`Hey ${message.author.tag}! You own :money_with_wings: ${output.balance} credits.`);
    }
}