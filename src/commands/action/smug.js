const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
const emoji = require('../../emojis.json')

module.exports = {
    name: 'smug',
    description: 'Random smug',
    usage: 'smug',
    aliases: [' '],
    category: `${emoji.sword}   **Action** :`,
    run: async(client, message, args) => {
        const data = await fetch("https://nekos.life/api/v2/img/smug").then((res) =>
        res.json()
      );

      const embed = new MessageEmbed()
        .setColor("ED80A7")
        .setImage(`${data.url}`)
  
      message.channel.send({ embed });  
    }
}