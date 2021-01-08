const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const emoji = require('../../emojis.json');

module.exports = {
    name: 'punch',
    description: 'Random Punch',
    usage: 'punch',
    aliases: ['strike'],
    category: `${emoji.sword}   **Action** :`,
    run: async(client, message, args) => {
        const url = 'https://neko-love.xyz/api/v1/punch';

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