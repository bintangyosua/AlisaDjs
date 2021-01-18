const axios = require('axios');
const { MessageEmbed } = require('discord.js');
const emoji = require('../../utils/emojis.json');

module.exports = {
    name: 'cry',
    description: 'Random Cries',
    category: `${emoji.sword}   **Action** :`,
    usage: 'cry',
    cooldown: 5000,
    aliases: ["sad"],
    run: async(client, message, args) => {
        if (!args[0]) return message.channel.send('You need to mention a user');

        const member = message.mentions.members.first();
        const author = message.author.username;

        const url = 'https://neko-love.xyz/api/v1/cry';
        let action = ['did you make her cry?'];

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        const msg = `_💬 ${author}, Did you make ${member} cry?_`
        const embed = new MessageEmbed()
            .setColor("ED80A7")
            .setImage(data.url)

        await message.channel.send(msg, embed)
    }
}