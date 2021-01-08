const discord = require('discord.js')
const emoji = require('../../emojis.json')
  
module.exports = {
    name: "balance",
    category: `${emoji.diamond}   Economy :`,
    description: "beg for money",
    aliases: ['bal', 'credit', 'credits', 'money'],
    usage: "balance",
    run: async (client, message, args) => {
       
        const userData = await client.models.user.findById(message.author.id)
        if(!userData) await client.models.user.create( { _id: message.author.id } )

        let money = userData.money

        message.channel.send(`You have ${money} coins`)

    }
}