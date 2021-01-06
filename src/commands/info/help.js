const { MessageEmbed } = require("discord.js")
const { prefix } = require('../../config.json')

module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <cmd>",
  category:  `📃   **Info :**`,
  aliases: ['commands', 'command'],
  run: async (client, message, args) => {
    if (args[0]) {
      const command = await client.commands.get(args[0]);

      if (!command) {
        return message.channel.send("Unknown Command: " + args[0]);
      }

      let embed = new MessageEmbed()
        .setTitle(`**__Here\'s an Information about my commands:__**\n`)
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("Description", command.description || "Not Provided :(")
        .addField("Aliases", "`" + command.aliases + "`" || "Not Provied")
        .addField("Usage", "`" + command.usage + "`" || "Not Provied")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("GREEN")
        .setTimestamp()
        .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

      return message.channel.send(embed);
    } else {
      const commands = await client.commands;
      const command = await client.commands.get(args[0]);
      
      let emx = new MessageEmbed()
        .setTitle(`**__Here\'s a list of all my commands:__**\n`)
        .setAuthor(`Lumina Commands List`, client.user.displayAvatarURL()) 
        .setDescription("Join my server or Die :D")
        .setColor("GREEN")
        .setTimestamp()
        .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
        .setThumbnail(client.user.displayAvatarURL())
        .setImage('https://cdn.discordapp.com/attachments/792749691761721344/793344681564045372/rainbow.gif')

      let com = {};
      for (let comm of commands.array()) {
        let category = comm.category || "Unknown";
        let name = comm.name;

        if (!com[category]) {
          com[category] = [];
        }
        com[category].push(name);
      }

      for(const [key, value] of Object.entries(com)) {
        let category = key;

        let desc = "`" + value.join("`, `") + "`";

        emx.addField(`${category.toString()}`, desc);
      }

      return message.channel.send(emx);
    }
  }
};
