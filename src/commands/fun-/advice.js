const { Random } = require("something-random-on-discord")
const random = new Random();
 
module.exports = {
  name: "advice",
  category: `🎮   **Fun :**`,
  usage: "advice",
  aliases: ["getadvice"],
  description: "Get Fresh Advice :D",
  run: async (client, message, args) => {
  
    let data = await random.getAdvice()
    message.channel.send(data)
  
}
}