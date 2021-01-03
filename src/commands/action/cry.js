const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'cry',
    description: 'Random Cries',
    category: '⚔   **Action** :',
    usage: 'cry',
    cooldown: 5000,
    aliases: ["sad"],
    run: async(client, message, args) => {
        const url = 'https://neko-love.xyz/api/v1/cry';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setColor('RANDOM')
            .setImage(data.url)

        await message.channel.send(embed)
    }
}