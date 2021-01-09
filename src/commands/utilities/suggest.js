const { MessageEmbed } = require("discord.js")


module.exports = {
  name: "suggest",
  usage: "suggest <message>",
  description: "Send your Suggestion",
  category: '🕹   **Utility :**',
  aliases: ['suggestions', 'suggestion'],
  run: (client, message, args) => {
    
    if(!args.length) {
      return message.channel.send("Please Give the Suggestion")
    }
    
    let channel = message.guild.channels.cache.find((x) => (x.name === "suggestion" || x.name === "suggestions"))
    
    
    if(!channel) {
      return message.channel.send("there is no channel with name - suggestions")
    }
                                                    
    
    let embed = new MessageEmbed()
    .setAuthor("Suggest", client.user.avatarURL())
    .setThumbnail(message.author.avatarURL())
    .setColor("ED80A7")
    .setDescription(args.join(" "))
    .setTimestamp()
    .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
    
    
    channel.send(embed).then(m => {
      m.react("✅")
      m.react("❌")
    }).catch(err => {})
    

    
    message.channel.send(`Sended Your Suggestion to + ${channel}`).catch(err => {})
    
  }
}