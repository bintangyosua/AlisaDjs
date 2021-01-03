const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "trouble-commands",
  description: "Get the detail trouble of this bot",
  category: "📃   **Info :**",
  aliases: ["troublecmd"],
  run: async (client, message, args) => {
    console.log(client.queue.size)
    let embed = new MessageEmbed()
    .setColor("RED")
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(`Trouble commands`, client.user.displayAvatarURL())
    .setDescription("\`anime-quote\`, \`search\`, \`instagram\`")
    .setTimestamp()
    .setFooter(`Requested by ${message.author.tag}`)
    message.channel.send(embed)
  }
};