const Instagram = require('instagram-web-api');
const { username, password } = require('../../utils/insta.json');
const { MessageEmbed} = require('discord.js');
const { verified_instagram, lumina } = require('../../utils/emojis.json');
const { version } = require('moment');

// 3689696860%3A0RjraI9zlSn0ao%3A7
module.exports = {
    name: 'insta',
    description: 'Display instagram account',
    category: '🕹   **Utility :**',
    usage: "insta",
    aliases: ["instaaa"],
    run: async(client, message, args) => {

        let Text = args.join(" ");

        if (!Text) return message.channel.send(`Please Give Something!`);

        let Replaced = Text.replace(/ +/g, " ");

        const verified = '<:instagram:800911136001228801>'

        
        const InstaClient = new Instagram({ username, password })
        await InstaClient.login()

        try {
        const instagram = await InstaClient.getUserByUsername({ username: Replaced })
        
            const embed = new MessageEmbed()
                .setAuthor(`${instagram.is_verified ? `${instagram.username} ✔` : `${instagram.username}`} ${instagram.is_private ? '🔒' : ''}`, instagram.profile_pic_url_hd)
                .setDescription(`**${instagram.full_name}**  \n${instagram.biography}`)
                .setThumbnail(instagram.profile_pic_url_hd)
                .setColor('ED80A7')
                .addFields(
                    {
                        name: "Total Posts",
                        value: instagram.edge_owner_to_timeline_media.count,
                        inline: true
                    },
                    {
                        name: "Followers",
                        value: instagram.edge_followed_by.count,
                        inline: true
                    },
                    {
                        name: "Following",
                        value: instagram.edge_follow.count,
                        inline: true
                
                    },
                )
                .setTimestamp()
                .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
        console.log(instagram)
        } catch (error) {
            message.channel.send(`Couldn't find into for that account`)
        } 
    }   
}