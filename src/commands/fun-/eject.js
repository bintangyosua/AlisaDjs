const discord = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
    name: 'eject',
    aliases: ['amongus'],
    category: `🎮   **Fun :**`,
    usage: 'eject <user>',
    description: 'eject someone from the spaceship - Among us Command.',
    run: async (client, message, args) => {
        const user = message.mentions.users.first()
        const imp = [true, false];
        const imposter = imp[Math.floor(Math.random() * imp.length)];
        const crew = ["black", "blue", "brown", "cyan", "darkgreen", "lime", "orange", "pink", "purple", "red", "white", "yellow"]
        const crewmate = crew[Math.floor(Math.random() * crew.length)];
        
        if(!user) {
            return message.channel.send(`${message.author} Please specify a user to eject by mentioning them!`)
        }
        
        const data = await fetch(`https://vacefron.nl/api//ejected?name=${user.username}&impostor=${imposter}&crewmate=${crewmate}`)
        
        const embed = new discord.MessageEmbed()
            .setAuthor(message.author.username + "#" + message.author.discriminator, message.author.displayAvatarURL())
            .setTitle(`${message.author.username} decided to eject ${user.username}`)
            .setDescription(`[Click here, if the image didn't load!](${data.url})`)
            .setColor("BLUE")
            .setImage(`${data.url}`)
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed);

    }
}