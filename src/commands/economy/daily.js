const emoji = require('../../utils/emojis.json');
const eco = require('discord-mongoose-economy');

module.exports = {
  name: 'daily',
  description: 'Daily for money',
  aliases: ['dailies'],
  usage: '\`daily\`',
  category: `${emoji.diamond}   Economy :`,
  run: async (client, message, args) => {
    const daily  = await eco.daily(message.author.id, message.guild.id, 500); //give 500 for daily, can be changed
    if(daily.cd) return message.reply(`Daily on cooldown come back in ${daily.cdL}`); //cdL is already formatted cooldown Left
    message.reply(`you claimed ${daily.amount} for daily`);
  }
}