const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "setname",
    description: "Set Bot Name",
    ownerOnly: true,
    category: `🔧   **Moderation** :`,
    aliases: ['set-name'],
    usage: "setname",
    run: async (client, message, args) => {
        const newName = message.content.split(' ')
        
        try{
            client.user.setUsername(newName[1])
                .then(user => message.channel.send(`My new username is **${user.username}**`))
                .catch(console.error);
        }
        catch(error){
            message.channel.send("I could not set my new username :sob:");
        }
    }
}