const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "trouble-commands",
  description: "Get the detail trouble of this bot",
  category: "📃   **Info :**",
  aliases: ["troublecmd", 'trouble-cmd'],
  usage: "trouble-commands",
  run: async (client, message, args) => {
    console.log(client.queue.size)
    let embed = new MessageEmbed()
    .setColor("ED80A7")
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(`Trouble commands`, client.user.displayAvatarURL())
    .setDescription("\`anime-quote\`, \`search\`, \`instagram\`, \`prefix\`")
    .setTimestamp()
    .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
    message.channel.send(embed)
  }
};