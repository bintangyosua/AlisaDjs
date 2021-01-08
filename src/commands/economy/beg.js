const emoji = require('../../emojis.json')
const mongoCurrency = require('discord-mongo-currency');
  
module.exports = {
    name: "beg",
    category: `${emoji.diamond}   Economy :`,
    description: "beg for money",
    aliases: ['rob'],
    usage: "beg",
    run: async (client, message, args) => {
 
        const randomCoins = Math.floor(Math.random() * 99) + 1; // Random amount of coins.
        
        await mongoCurrency.giveCoins(message.member.id, message.guild.id, randomCoins);

        message.channel.send(`You got ${randomCoins}`)
    }
}