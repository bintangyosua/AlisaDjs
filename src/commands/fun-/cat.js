const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'cat',
    description: 'Random fact and image cats',
    category: `🎮   **Fun :**`,
    usage: "cat",
    aliases: ["cats"],
    run: async (client, message, args) => {
        const url = 'https://some-random-api.ml/img/cat';
        const url_facts = 'https://some-random-api.ml/facts/cat';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        let dataFacts, responseFacts;
        try {
            responseFacts = await axios.get(url_facts);
            dataFacts = responseFacts.data;
        } catch (e) {
            return message.channel.send( dataFacts `An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            .setTitle(dataFacts.fact)
            .setColor(`3caea3`)
            .setTimestamp()
            .setImage(data.link)

        await message.channel.send(embed)
    }
}