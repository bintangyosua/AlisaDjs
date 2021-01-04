const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'kitsune',
    description: 'Random Kitsune',
    category: `🎀   **Anime Related :**`,
    aliases: ['kitsuneee'],
    usage: "kitsune",
    run: async (client, message, args) => {
        const url = 'http://neko-love.xyz/api/v1/kitsune';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setColor(`3caea3`)
            .setImage(data.url)

        await message.channel.send(embed)
    }
}