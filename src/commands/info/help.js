const { MessageEmbed } = require("discord.js")
const { default_prefix } = require('../../config.json')
const emoji = require('../../emojis.json')

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
        .setAuthor(command.name, client.user.displayAvatarURL())
        .addField("Description", command.description || "Not Provided :(")
        .addField("Aliases", "`" + command.aliases + "`" || "Not Provied")
        .addField("Usage", "`" + command.usage + "`" || "Not Provied")
        .setThumbnail(client.user.displayAvatarURL())
        .setColor("ED80A7")
        .setTimestamp()
        .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

      return message.channel.send(embed);
    } else {
      const commands = await client.commands;
      const command = await client.commands.get(args[0]);
      
      let emx = new MessageEmbed()
        .setAuthor(`Lumina Command List`, client.user.displayAvatarURL()) 
        .setDescription(`**Full Command list**. \nYou can get more information on a command using \`${default_prefix}help <name of command>\` \nIf you still lost you can join the **[support server](https://discord.gg/uXFZScA)**. You can also invite me in **[here](https://discord.com/oauth2/authorize?client_id=780018362138886144&scope=bot&permissions=2147483647)**`)
        .setColor("ED80A7")
        .setTimestamp()
        .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
        .setThumbnail(client.user.displayAvatarURL())
        .setImage('https://media.discordapp.net/attachments/792749691761721344/797663796704444416/Lumina_Title.png?width=864&height=315')

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
