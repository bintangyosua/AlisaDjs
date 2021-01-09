const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const emoji = require('../../emojis.json');

module.exports = {
    name: 'wink',
    description: 'Random Wink',
    usage: 'wink',
    aliases: ['flirt'],
    category: `${emoji.sword}   **Action** :`,
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
            .setColor("ED80A7")
            .setImage(data.link)

        await message.channel.send(embed)
    }
}