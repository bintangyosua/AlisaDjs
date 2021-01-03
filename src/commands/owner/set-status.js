const db = require("quick.db")
const discord = require("discord.js")

module.exports = {
  name: "set-status",
  description: "Change the bot status",
  usage: "status <here>",
  category: ":fleur_de_lis:   Owner :",
  ownerOnly: true,
  run: async (client, message, args) => {
    
  
    //ARGUMENT
    if(!args.length) {
      return message.channel.send("Please give status message")
    }
    
 db.set(`status`, args.join(" "))
 client.user.setActivity(args.join(" ")); 
 message.channel.send("Updated the bot status")

    
  }
}