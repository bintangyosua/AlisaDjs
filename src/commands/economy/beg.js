const discord = require('discord.js')

  
module.exports = {
    name: "beg",
    category: `🛒   Economy :`,
    description: "beg for money",
    run: async (client, message, args) => {
       
        let randomamount = Math.floor(Math.random() * Math.floor(100))//get random result between 1 - 100

        const userData = await client.models.user.findById(message.author.id)
        if(!userData) await client.models.user.create( { _id: message.author.id } )
        
        message.channel.send(`You got ${randomamount} credits`)

        userData.money = userData.money + randomamount
        userData.save() // save it

    }
}