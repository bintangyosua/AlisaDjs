const { MessageEmbed } = require('discord.js');
const { pong } = require('../../emojis.json');

module.exports = {
    name: "ping",
    description: "Returns latency and API ping",
    category: `📃   **Info :**`,
    aliases: ['latency'],
    usage: "ping",
    run: async (client, message, args) => {
        const embed = new MessageEmbed()
            .setDescription('`Pinging...`')
            .setColor("ED80A7");    
        const msg = await message.channel.send(embed);
        const timestamp = (message.editedTimestamp) ? message.editedTimestamp : message.createdTimestamp; // Check if edited
        const latency = `\`\`\`ini\n[ ${Math.floor(msg.createdTimestamp - timestamp)}ms ]\`\`\``;
        const apiLatency = `\`\`\`ini\n[ ${Math.round(message.client.ws.ping)}ms ]\`\`\``;
        embed.setTitle(`Pong!  ${pong}`)
            .setDescription('')
            .addField('Latency', latency, true)
            .addField('API Latency', apiLatency, true)
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp();
        msg.edit(embed);
    }
}