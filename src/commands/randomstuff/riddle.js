const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'riddle',
    description: 'Random Riddles',
    category: '🎲   **Random Stuff :**',
    usage: "riddle",
    aliases: ["riddles"],
    run: async (client, message, args) => {
        const url = 'https://no-api-key.com/api/v1/riddle';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setFooter(`Requested by ${message.author.tag}`)
            .addField
            (
                `${data.question}`, `${data.answer}`
            )
            .setColor(`3caea3`)
            .setTimestamp()

        await message.channel.send(embed)
    }
}