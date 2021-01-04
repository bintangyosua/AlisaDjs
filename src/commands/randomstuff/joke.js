const { Random } = require("something-random-on-discord")
const random = new Random();
 
module.exports = {
  name: "joke",
  category: "🎲   **Random Stuff :**",
  description: "Get Fresh Joke :D",
  usage: "joke",
  aliases: ["jokes"],
  run: async (client, message, args) => {
  
    let data = await random.getJoke()
    message.channel.send(data)
  
}
}