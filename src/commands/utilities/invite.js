const { MessageEmbed } = require('discord.js') 

module.exports = {
    name: "invite",
    description: "Returns latency and API ping",
    category: '🕹   **Utility :**',
    run: async (client, message, args) => {
        
        let lumina = 'https://bit.ly/2LcBcG8'
        let serah = 'https://bit.ly/2WV0UBX' 

        const embed = new MessageEmbed()
            .setAuthor("Invite Lumina and Serah", client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setDescription("Click one of them to invite the Bot")
            .setColor("#ff2050")
            .addField("Lumina", `[https://discord.gg/invite/lumina](${lumina})`)
            .addField("Serah", `[https://discord.gg/invite/serah](${serah})`)
            .setTimestamp()
            .setFooter(`Requested by ${message.author.tag}`)
        message.channel.send(embed)

    }
}