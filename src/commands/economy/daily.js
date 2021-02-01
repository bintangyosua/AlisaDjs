const emoji = require('../../utils/emojis.json');
const eco = require("discord-economy");

module.exports = {
  name: 'daily',
  description: 'daily money',
  aliases: ['dailies'],
  usage: '\`daily\`',
  category: `${emoji.diamond}   Economy :`,
  run: async (client, message, args) => {
    var output = await eco.Daily(message.author.id)
    //output.updated will tell you if the user already claimed his/her daily yes or no.
 
    if (output.updated) {
 
      var profile = await eco.AddToBalance(message.author.id, 100)
      message.reply(`You claimed your daily coins successfully! You now own ${profile.newbalance} coins.`);
 
    } else {
      message.channel.send(`Sorry, you already claimed your daily coins!\nBut no worries, over ${output.timetowait} you can daily again!`)
    }
  }
}