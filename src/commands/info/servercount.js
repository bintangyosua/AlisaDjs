const { MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');

module.exports = {
    name: "servercount",
    description: "",
    aliases: ['usercount', 'sc', 'uc'],
    usage: "servercount",
    category: "📃   **Info :**",
    run: async (client, message, args) => {
        const counts = stripIndent`
      Servers :: ${message.client.guilds.cache.size}
      Users   :: ${message.client.users.cache.size}
    `;
    const embed = new MessageEmbed()
      .setTitle('Alisa\'s Server Count')
      .setDescription(stripIndent`\`\`\`asciidoc\n${counts}\`\`\``)
      .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor("ED80A7");
    message.channel.send(embed);
    }
}