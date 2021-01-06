const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'meme',
    description: 'Random Meme',
    category: '🎲   **Random Stuff :**',
    usage: "meme",
    aliases: ["memes"],
    run: async (client, message, args) => {
        const url = 'https://some-random-api.ml/meme';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            .setTitle(data.caption)
            .setColor(`3caea3`)
            .setTimestamp()
            .setImage(data.image)

        await message.channel.send(embed)
    }
}