const discord = require('discord.js')
const emoji = require('../../emojis.json')
  
module.exports = {
    name: "beg",
    category: `${emoji.diamond}   Economy :`,
    description: "beg for money",
    aliases: ['rob'],
    usage: "beg",
    cooldown: 60000,
    run: async (client, message, args) => {
       
        let randomamount = Math.floor(Math.random(50) * Math.floor(100))//get random result between 1 - 100

        const userData = await client.models.user.findById(message.author.id)
        if(!userData) await client.models.user.create( { _id: message.author.id } )
        
        message.channel.send(`You got ${randomamount} credits`)

        userData.money = userData.money + randomamount
        userData.save() // save it

    }
}