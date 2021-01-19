const Instagram = require('scraper-instagram');
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

        
        const InstaClient = new Instagram();
        const yourSessionId = '3689696860%3A0RjraI9zlSn0ao%3A7';
        

        try {
        const instagram = await InstaClient.authBySessionId(yourSessionId)
            .catch(err => console.error(err));
        const insta = await InstaClient.getProfile(Replaced)
            const embed = new MessageEmbed()
                .setAuthor(`${insta.verified ? `${Replaced} ✔` : `${Replaced}`} ${insta.private ? '🔒' : ''}`, `${insta.pic}`)
                .setDescription(`${insta.name} \n${insta.bio}`)
                .setColor("ED80A7")
                .setThumbnail(insta.pic)
                .addFields(
                    {
                        name: "Total Posts",
                        value: insta.posts,
                        inline: true
                    },
                    {
                        name: "Followers",
                        value: insta.followers,
                        inline: true
                    },
                    {
                        name: "Following",
                        value: insta.following,
                        inline: true
                
                    },
                )
                .setTimestamp()
                .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
        } catch (error) {
            message.channel.send(`Couldn't find into for that account`)
        } 
    }   
}