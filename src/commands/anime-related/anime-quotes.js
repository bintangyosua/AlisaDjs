const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'animequote',
    description: 'Random Anime Quotes',
    category: `🎀   **Anime Related :**`,
    aliases: ['animequote', 'animequotes'],
    usage: "animequote",
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
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            .setTitle("**Anime Quote**")
            .setColor("ED80A7")
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