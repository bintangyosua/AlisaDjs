const { MessageEmbed } = require('discord.js');
const rps = ['scissors','rock', 'paper'];
const res = ['Scissors :v:','Rock :fist:', 'Paper :raised_hand:'];

module.exports = {
    name: "rps",
    description: "Play a game of rock–paper–scissors against Lumina!",
    aliases: ["rockpaperscissors"],
    usage: "rps <rock>|<paper>|<scissors>",
    category: `🎮   **Fun :**`,
    run: async (client, message, args) => {
        let userChoice;
        if (args.length) userChoice = args[0].toLowerCase();
        if (!rps.includes(userChoice)) 
            return message.channel.send('Please enter rock, paper, or scissors');
        userChoice = rps.indexOf(userChoice);
        const botChoice = Math.floor(Math.random()*3);
        let result;
        if (userChoice === botChoice) result = 'It\'s a draw!';
        else if (botChoice > userChoice || botChoice === 0 && userChoice === 2) result = '**Lumina** wins!';
        else result = `**${message.author.tag}** wins!`;
        const embed = new MessageEmbed()
          .setTitle(`${message.author.tag} vs. Lumina`)
          .addField('Your Choice:', res[userChoice], true)
          .addField('Lumina\'s Choice', res[botChoice], true)
          .addField('Result', result, true)
          .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor("ED80A7");
        message.channel.send(embed);
    }
}