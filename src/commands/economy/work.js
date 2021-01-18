const emoji = require('../../utils/emojis.json')
const mongoCurrency = require('discord-mongo-currency');
  
module.exports = {
    name: "work",
    category: `${emoji.diamond}   Economy :`,
    description: "work for money",
    aliases: ['works'],
    usage: "work",
    cooldown: 30000,
    run: async (client, message, args) => {
 
        const randomCoins = Math.floor(Math.random() * 99) + 1; // Random amount of coins.
        
        await mongoCurrency.giveCoins(message.member.id, message.guild.id, randomCoins);

        let textList = [`teacher`, `programmer`, `waiter`]
        var text = textList[Math.floor(Math.random() * textList.length)];
        
        
        message.channel.send(`You worked as ${text}  and earned :money_with_wings: $${randomCoins}`)
    }
}