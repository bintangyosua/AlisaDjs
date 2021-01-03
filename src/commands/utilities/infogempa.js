const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'infogempa',
    description: 'Info Gempa sekitar Indonesia',
    category: '🕹   **Utility :**',
    run: async(client, message, args) => {
        const url = 'https://api.afumado.net/apiv2/api/infogempa';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setTitle("Info Gempa")
            .setColor('e9c46a')
            .addFields(
                { 
                    name: '**Kedalaman :**',
                    value: `${data.kedalaman}` 
                },
                { 
                    name: '**Koordinat :**',
                    value: `${data.koordinat}` 
                },
                { 
                    name: '**Lokasi :**',
                    value: `${data.lokasi}` 
                },
                { 
                    name: '**magnitude :**',
                    value: `${data.magnitude}` 
                },
                { 
                    name: '**Map :**',
                    value: `${data.map}` 
                },
                { 
                    name: '**Potensi :**',
                    value: `${data.potensi}` 
                },
                { 
                    name: '**Waktu :**',
                    value: `${data.waktu}` 
                },
            )
            .setTimestamp()
            .setFooter(`Requested by ${message.author.tag}`)

        await message.channel.send(embed)
    }
}