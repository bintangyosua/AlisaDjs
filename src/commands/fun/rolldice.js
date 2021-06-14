const { MessageEmbed } = require('discord.js');

module.exports = {
    name: "rolldice",
    description: "Rolls a dice with the specified number of sides. Will default to 6 sides if no number is given.",
    aliases: ["dice"],
    usage: 'roll <dice sides>',
    category: `🎮   **Fun :**`,
    run: async (client, message, args) => {
        let limit = args[0];
        if (!limit) limit = 6;
        const n = Math.floor(Math.random() * limit + 1);
        if (!n || limit <= 0)
        return this.sendErrorMessage(message, 0, 'Please provide a valid number of dice sides');
        const embed = new MessageEmbed()
            .setTitle('🎲  Dice Roll  🎲')
            .setDescription(`${message.member}, you rolled a **${n}**!`)
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()
            .setColor("ED80A7");
        message.channel.send(embed);
    }
}