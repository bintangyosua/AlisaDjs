const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'anime-quote',
    description: 'Random Anime Quotes',
    category: `🎀   **Anime Related :**`,
    run: async (client, message, args) => {
        const url = 'https://animechanapi.xyz/api/quotes/random';

        let data2, response;
        try {
            response = await axios.get(url);
            data2 = response.data;
        } catch (e) {
            return message.channel.send( data2 `An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setFooter(`Requested by ${message.author.tag}`)
            .setTitle("**Random Anime Quote**")
            .setColor(`3caea3`)
            .addFields(
                { 
                    name: '**Character :**',
                    value: `${data2.data[0].character}`,
                    inline: true, 
                },
                { 
                    name: '**Anime :**',
                    value: `${data2.data[0].anime}`,
                    inline: true, 
                },
                { 
                    name: '**Quote :**',
                    value: `${data2.data[0].quote}` 
                },
            )
            .setTimestamp()

        await message.channel.send(embed)
    }
}