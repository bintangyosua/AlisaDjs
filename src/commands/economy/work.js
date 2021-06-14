const Discord = require('discord.js');
const config = require('../../utils/config.json');
const ms = require('ms');
const emoji = require('../../utils/emojis.json');

module.exports = {
  name: 'work',
  aliases: ['w'],
  category: `${emoji.diamond}   **Economy** :`,
  usage: 'work',
  description: 'work and get your credits',
  run: async (client, message, args) => {
    
    let amount = 100
    let timeout = 86400000

    let daily = await client.models.user.findById(message.author.id);
    if (!daily) await client.models.user.create({ 
      _id: message.author.id,
      username: user.user.tag
     })

    if (daily.balance === daily.balance + amount ) {
      let time = ms(timeout - (Date.now() - daily));

      message.channel.send(`You have already claimed your daily coins!\nWait: ${time.hours} hours ${time.minutes} minutes ${time.seconds} seconds`)
    } else {
      message.channel.send(`You have claimed ${amount} coins`)
      daily.balance = daily.balance + amount
      daily.save()
    }
  }
}