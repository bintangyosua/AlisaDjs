const emoji = require('../../utils/emojis.json');
const eco = require('discord-mongoose-economy');
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: 'leaderboard',
  description: 'Display Leaderboard',
  aliases: ['lb'],
  usage: '$leaderboard',
  category: `${emoji.diamond}   Economy :`,
  run: async (client, message, args) => {
        const lb = await eco.lb(message.guild.id, 10); //(guildID, limit)
        if(lb < 1) return message.reply('less than 1'); //If leaderboard is empty, reply to user that it is.
        var index = 0;
        const mapped = lb.map(i => `**${index+=1}. ${client.users.cache.get(i.userID).tag} - ${i.wallet}**`);

        console.log(lb)
        console.log(mapped)

        const lbembed = new MessageEmbed()
          .setTitle(`${message.guild.name}\'s Leaderboard`)
          .setDescription(`${mapped.join('\n')}`)
          .setColor("RANDOM");
        message.channel.send(lbembed);
  }
}