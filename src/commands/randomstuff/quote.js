const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'quote',
    description: 'Random Quotes',
    category: '🎲   **Random Stuff :**',
    usage: "quote",
    aliases: ["quotes"],
    run: async (client, message, args) => {
        const url = 'https://no-api-key.com/api/v1/quotes';

        let data2, response;
        try {
            response = await axios.get(url);
            data2 = response.data;
        } catch (e) {
            return message.channel.send( data2 `An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            .setColor(`3caea3`)
            .setDescription(`${data2.quote}
- ${data2.author}`)
            .setTimestamp()

        await message.channel.send(embed)
    }
}