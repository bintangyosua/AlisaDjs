const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'waifu',
    description: 'Random waifu',
    category: `🎀   **Anime Related :**`,
    run: async (client, message, args) => {
        const url = 'https://api.afumado.net/apiv2/api/waifu';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle(data.name)
            .setDescription(data.desc)
            .setColor(`3caea3`)
            .setImage(data.image)
            .setTimestamp()
            .setFooter(`Requested by ${message.author.tag}`)

        await message.channel.send(embed)
    }
}