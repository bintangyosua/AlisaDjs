const ProfileSchema = require('../../database/models/profile.js');
const discord = require('discord.js');
const emoji = require('../../utils/emojis.json');

module.exports = {
  name: 'profile',
  description: 'Display profile',
  aliases: [' '],
  category: `${emoji.diamond}   **Economy** :`,
  usage: 'profile',
  run: async (client, message, args) => {

    let user;
    if (!args[0]) {
      user = message.member;
    } else {
      user = message.mentions.members.first() || await message.guild.members.fetch(args[0]).catch(err => { return message.channel.send(":x: Unable to find this Person") })
    }
    if (!user) {
      return message.channel.send(":x: Unable to find this person!")
    }

    const userData = await client.models.user.findById(message.author.id)
    if (!userData) await client.models.user.create({ 
      _id: message.author.id,
      username: user.user.tag
     })

    const embed = new discord.MessageEmbed()
      .setAuthor(`${user.user.username}\'s profile`, user.user.displayAvatarURL({ dynamic: true }))
      .setThumbnail(user.user.displayAvatarURL({ dynamic: true }))
      .addFields(
        { name: 'Credits', value: userData.balance }
        )
    message.channel.send(embed)

  }
}