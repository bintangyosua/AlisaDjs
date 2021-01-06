const axios = require('axios');
const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    name: 'instagram',
    description: 'Display instagram account',
    category: '🕹   **Utility :**',
    usage: "instagram",
    aliases: ["ig"],
    run: async(client, message, args) => {
        if (!args[0]) {
            return message.channel.send(`Please enter a Username`)
        }

        const url = `https://instagram.com/${args[0]}/?__a=1`

        let response, account, details;

        try {
            response = await axios.get(url)
            account = response.data
            details = account.graphql.user
        } catch (error) {
            message.channel.send(`Couldn't find into for that account`)
        }

        const embed = new MessageEmbed()
            .setTitle(`${details.is_verified ? `${details.username} :verified:` : `${details.username}`} ${details.is_private ? '🔒' : ''}`)
            .setDescription(details.biography)
            .setThumbnail(details.profile_pic_url)
            .addFields(
                {
                    name: "Total Posts",
                    value: details.edge_owner_to_timeline_media.count,
                    inline: true
                },
                {
                    name: "Followers",
                    value: details.edge_followed_by.count,
                    inline: true
                },
                {
                    name: "Following",
                    value: details.edge_follow.count,
                    inline: true
            
                },
            )
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
    }
}