const canvacord = require("canvacord");
const Levels = require('discord-xp');
const emoji = require('../../utils/emojis.json');
const { MessageAttachment } = require('discord.js');

module.exports = {
    name: 'rank',
    description: 'display your profile',
    aliases: [''],
    usage: '$rank',
    category: `${emoji.diamond}   Economy :`,
    run: async (client, message, args) => {

        const target = message.mentions.users.first() || message.author; // Grab the target.
        
        const user = await Levels.fetch(target.id, message.guild.id); // Selects the target from the database.

        const neededXp = Levels.xpFor(parseInt(user.level) + 1);

        if (!user) return message.reply('You don\' have any xp. try to send some messages.');

        try {

        const rank = new canvacord.Rank()
            .setLevel(user.level)
            .setRank(0)
            .setAvatar(target.displayAvatarURL({ dynamic: false, format: 'png' }))
            .setCurrentXP(user.xp)
            .setRequiredXP(neededXp)
            .setStatus(target.presence.status)
            .setProgressBar("#FFA500", "COLOR")
            .setUsername(target.username)
            .setDiscriminator(target.discriminator);
        rank.build()
            .then(data => {
                const attachment = new MessageAttachment(data, "RankCard.png");
                message.channel.send(attachment);
            });

        } catch (error) {
            console.log(error)
            if (!error) console.log('done')
        }



    }
}