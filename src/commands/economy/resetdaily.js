const eco = require("discord-economy");

module.exports = {
    name: 'resetdaily',
    category: ':money_with_wings:   Economy :',
    run: async (client, message, args) => {
        var output = await eco.ResetDaily(message.author.id)
 
        message.reply(output) //It will send 'Daily Reset.'
    }
}