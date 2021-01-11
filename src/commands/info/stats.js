const { MessageEmbed } = require('discord.js');
const moment = require('moment');
const { mem, cpu, os } = require('node-os-utils');
const { stripIndent } = require('common-tags');
const ms = require("ms")

module.exports = {
  name: "stats",
  description: "Fetches Lumina\'s statistics.",
  category: "📃   **Info :**",
  aliases: ['botstats'],
  usage: "stats",
  run: async (client, message, args) => {
    const d = moment.duration(message.client.uptime);
    const days = (d.days() == 1) ? `${d.days()} day` : `${d.days()} days`;
    const hours = (d.hours() == 1) ? `${d.hours()} hour` : `${d.hours()} hours`;
    const clientStats = stripIndent`
      Servers   :: ${message.client.guilds.cache.size}
      Users     :: ${message.client.users.cache.size}
      Channels  :: ${message.client.channels.cache.size}
      WS Ping   :: ${Math.round(message.client.ws.ping)}ms
      Uptime    :: ${days} and ${hours}
    `;
    const { totalMemMb, usedMemMb } = await mem.info();
    const serverStats = stripIndent`
      OS        :: ${await os.oos()}
      CPU       :: ${cpu.model()}
      Cores     :: ${cpu.count()}
      CPU Usage :: ${await cpu.usage()} %
      RAM       :: ${totalMemMb} MB
      RAM Usage :: ${usedMemMb} MB 
    `;
    const embed = new MessageEmbed()
      .setTitle('Lumina\'s Statistics')
      .addField('Commands', `\`${message.client.commands.size}\` commands`, true)
      .addField('Aliases', `\`${message.client.aliases.size}\` aliases`, true)
      .addField('Client', `\`\`\`asciidoc\n${clientStats}\`\`\``)
      .addField('Server', `\`\`\`asciidoc\n${serverStats}\`\`\``)
      .addField(
        'Links', 
        '**[Invite Me](https://discord.com/oauth2/authorize?client_id=780018362138886144&scope=bot&permissions=2147483647) | ' +
        '[Support Server](https://discord.gg/uXFZScA)**'
      )
      .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setImage('https://cdn.discordapp.com/attachments/797800866173288468/798240121216434196/Lumina_Stats.png')
      .setColor("ED80A7");
    message.channel.send(embed);
  }
};