const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'car',
    description: 'Get Random Car Image',
    category: `🎮   **Fun :**`,
    usage: "car",
    aliases: "cars",
    run: async (client, message, args) => {

        console.log(message.member.voice.channel)
    
        const url = 'https://no-api-key.com/api/v1/car';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setColor("ED80A7")
            .setImage(data.image)
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

        await message.channel.send(embed)
    }
}