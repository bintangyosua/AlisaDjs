const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'neko',
    description: 'Random neko',
    category: `🎀   **Anime Related :**`,
    run: async (client, message, args) => {
        const url = 'https://api.afumado.net/apiv2/api/nekonime';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setColor(`3caea3`)
            .setImage(data.result)

        await message.channel.send(embed)
    }
}