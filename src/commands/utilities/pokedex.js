const { MessageEmbed } = require('discord.js');
const Pokedex = require('pokedex-promise-v2');

module.exports = {
    name: 'pokedex',
    description: 'Use this command to return data about specific types of pokedexes.',
    usage: '$pokedex <pokemon name>',
    aliases: ['pokemon', 'poke'],
    category: '🕹   **Misc :**',
    run: async (client, message, args) => {

        var P = new Pokedex();

        try {
        
        const target = P.getPokemonByName("pikachu")
                        .then(function(response) {
                            console.log(response);

                            const embed = new MessageEmbed()
                                .setTitle('Pokemon')
                                .setDescription(response.name)
                                .setColor("ED80A7")
                                .setThumbnail(response.sprites.front_default)
                                .addFields(
                                    { name: 'Weight', value: response.weight, inline: true },
                                    { name: 'Height', value: response.height, inline: true },
                                    { name: 'Type', value: response.types[0].type.name, inline: true },
                                    { name: 'Abilities', value: `${response.abilities[0].ability.name}, ${response.abilities[1].ability.name}`, inline: true},
                                    { name: 'Base', value: `
Exp: ${response.abilities.base_experience} 
HP: ${response.stats[0].base_stat}
Attack: ${response.stats[1].base_stat}
Defense:${response.stats[2].base_stat}
Special Attack: ${response.stats[3].base_stat}
Special Defense: ${response.stats[4].base_stat}
Speed: ${response.stats[5].base_stat}
                                    `}
                                )
                                .setTimestamp()
                                .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
                                message.channel.send(embed)

                        })
                        .catch(function(error) {
                            console.log('There was an ERROR: ', error);
                        });

        
        
        } catch (error) {
            console.log(error)
            message.reply('Pokemon not found')
        }

    }

}