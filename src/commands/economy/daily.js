const eco = require("discord-economy");

module.exports = {
    name: 'daily',
    description: 'Cliam your daily credits, reset every 00.00',
    aliases: ['dailyclaim'],
    usage: 'daily',
    category: ':money_with_wings:   Economy :',
    run: async (client, message, args) => {
        var output = await eco.Daily(message.author.id)
        if (output.updated) {
 
            var profile = await eco.AddToBalance(message.author.id, 100)
            message.reply(`You claimed your daily credits successfully! You now own :money_with_wings: ${profile.newbalance} credits.`);
       
          } else {
            message.channel.send(`Sorry, you already claimed your daily credits!\nBut no worries, over ${output.timetowait} you can daily again!`)
          }
    }
}