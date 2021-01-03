const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'fact',
    description: 'Random facts',
    category: '🎲   **Random Stuff :**',
    run: async (client, message, args) => {
        const url = 'https://no-api-key.com/api/v1/facts';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setFooter(`Requested by ${message.author.tag}`)
            .setTitle(data.fact)
            .setColor(`3caea3`)
            .setTimestamp()

        await message.channel.send(embed)
    }
}