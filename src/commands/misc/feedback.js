const { MessageEmbed } = require('discord.js');
const { oneLine } = require('common-tags');
const { feedbackChannelId } = require('../../utils/config.json');

module.exports = {
    name: 'feedback',
    description: 'Sends a message to the Alisa Support Server\'s feedback channel.',
    usage: 'feedback <messages>',
    aliases: ['fb'],
    category: '🕹   **Misc :**',
    run: async (client, message, args) => {
        const feedbackChannel = message.client.channels.cache.get(feedbackChannelId);
        if (!feedbackChannel) 
          return message.channel.send('The feedbackChannelId property has not been set');
        if (!args[0]) return message.channel.send('Please provide a message to send');1
        let feedback = message.content.slice(message.content.indexOf(args[0]), message.content.length);
    
        // Send report
        const feedbackEmbed = new MessageEmbed()
          .setTitle('Feedback')
          .setThumbnail(feedbackChannel.guild.iconURL({ dynamic: true }))
          .setDescription(feedback)
          .addField('User', message.member, true)
          .addField('Server', message.guild.name, true)
          .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
        feedbackChannel.send(feedbackEmbed);
    
        // Send response
        if (feedback.length > 1024) feedback = feedback.slice(0, 1021) + '...';
        const embed = new MessageEmbed()
          .setTitle('Feedback')
          .setThumbnail('https://raw.githubusercontent.com/sabattle/CalypsoBot/develop/data/images/Calypso.png')
          .setDescription(oneLine`
            Successfully sent feedback!
            Please join the [Alisa Support Server](https://discord.gg/pnYVdut) to further discuss your feedback.
          `) 
          .addField('Member', message.member, true)
          .addField('Message', feedback)
          .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
          .setTimestamp()
          .setColor(message.guild.me.displayHexColor);
        message.channel.send(embed);
      }
    };