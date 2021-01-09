const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const emoji = require('../../emojis.json');

module.exports = {
    name: 'kiss',
    description: 'Random Kiss',
    usage: 'kiss',
    category: `${emoji.sword}   **Action** :`,
    aliases: ["kissu"],
    run: async(client, message, args) => {
        if (!args[0]) return message.channel.send('You need to mention a user');
        const url = 'https://no-api-key.com/api/v1/kiss';

        const member = message.mentions.members.first()
        const author = message.author.username

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        const msg = `_💬 ${member}, you have been kissed by ${author}_`

        const embed = new MessageEmbed()
            .setColor("ED80A7")
            .setImage(data.image)

        await message.channel.send(msg, embed)
    }
}