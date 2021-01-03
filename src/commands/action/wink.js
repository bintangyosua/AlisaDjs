const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'wink',
    description: 'Random Wink',
    usage: 'wink',
    category: '⚔   **Action** :',
    run: async(client, message, args) => {
        const url = 'https://some-random-api.ml/animu/wink';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setImage(data.link)

        await message.channel.send(embed)
    }
}