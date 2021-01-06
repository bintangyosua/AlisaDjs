const axios = require('axios')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'fakename',
    description: 'Random fake name',
    category: '🎲   **Random Stuff :**',
    usage: "fakename",
    aliases: ["fn"],
    run: async (client, message, args) => {
        const url = 'https://api.afumado.net/apiv4/api/fakename.php';
        const url2 = 'https://api.namefake.com/';

        let data, response;
        try {
            response = await axios.get(url);
            data = response.data;
        } catch (e) {
            return message.channel.send( data `An error has occured, try again!`)
        }

        let data2, response2;
        try {
            response2 = await axios.get(url2);
            data2 = response2.data;
        } catch (e) {
            return message.channel.send( data2 `An error has occured, try again!`)
        }

        const embed = new MessageEmbed()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            .setTitle(`**Nama :** ${data.Nama.nama}`)
            .addFields(
                {   name: '**Alamat :**', 
                    value: `${data.Alamat.alamat}` 
                },
                {   name: '**Tanggal Lahir :**', 
                    value: `${data2.birth_data}` 
                },
                {   name: '**Umur :**', 
                    value: `${data.Umur.umur}` 
                },
                {   name: '**Zodiac :**', 
                    value: `${data.Zodiac.zodiac}` 
                },
                {   name: '**No Telp. :**', 
                    value: `${data.Phone.phone}` 
                },
                {   name: '**Website :**', 
                    value: `${data.Website.website}` 
                },
                {   name: '**Perusahaan :**', 
                    value: `${data.Company.company}` 
                },
                {   name: '**Tinggi :**', 
                    value: `${data.Tinggi.tinggi}` 
                },
                {   name: '**Golongan Darah :**', 
                    value: `${data.Darah.darah}` 
                },
            )
            .setColor(`3caea3`)

        await message.channel.send(embed)
    }
}