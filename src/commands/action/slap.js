const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const emoji = require('../../utils/emojis.json');

module.exports = {
    name: 'slap',
    description: 'Random Slaps',
    usage: 'slap',
    aliases: ['bash'],
    category: `${emoji.sword}   **Action** :`,
    run: async(client, message, args) => {
        if (!args[0]) return message.channel.send('You need to mention a user');
        const url = 'https://nekos.life/api/v2/img/slap';

        const member = message.mentions.members.first()
        const author = message.author.username

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        const msg = `_💬 ${member}, you have been slapped by ${author}_`

        const embed = new MessageEmbed()
            .setColor("ED80A7")
            .setImage(data.url)

        await message.channel.send(msg, embed)
    }
}