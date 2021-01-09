const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const emoji = require('../../emojis.json');

module.exports = {
    name: 'pat',
    description: 'Random Pats',
    usage: 'pat',
    aliases: ['beat'],
    category: `${emoji.sword}   **Action** :`,
    run: async(client, message, args) => {
        if (!args[0]) return message.channel.send('You need to mention a user');
        const url = 'https://some-random-api.ml/animu/pat';

        const member = message.mentions.members.first()
        const author = message.author.username

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        const msg = `_💬 ${member}, you have been patted by ${author}_`

        const embed = new MessageEmbed()
            .setColor("ED80A7")
            .setImage(data.link)

        await message.channel.send(msg, embed)
    }
}