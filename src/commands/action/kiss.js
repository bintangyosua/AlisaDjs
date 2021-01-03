const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'kiss',
    description: 'Random Kiss',
    usage: 'kiss',
    category: '⚔   **Action** :',
    aliases: ["kissu"],
    run: async(client, message, args) => {
        const url = 'https://no-api-key.com/api/v1/kiss';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setImage(data.image)

        await message.channel.send(embed)
    }
}