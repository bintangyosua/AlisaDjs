const Instagram = require('scraper-instagram');
const { MessageEmbed } = require('discord.js');
const InstagramApi = require('instagram-web-api');
const paginationEmbed = require('discord.js-pagination');
const { verified_instagram } = require('../../utils/emojis.json');
const { post } = require('request-promise-native');

// 3689696860%3A0RjraI9zlSn0ao%3A7
module.exports = {
    name: 'insta',
    description: 'Display instagram account',
    category: '🕹   **Misc :**',
    usage: "insta <username> ",
    aliases: ["ig", "instagram"],
    run: async(client, message, args) => {

        let Text = args.join(" ");
        if (!Text) return message.channel.send(`Please Give Something!`);
        let Replaced = Text.replace(/ +/g, " ");

        const verified = '<:instagram:800911136001228801>'
        const InstaClient = new Instagram();
        const yourSessionId = '3689696860%3A0RjraI9zlSn0ao%3A7';
        
        const instagram = await InstaClient.authBySessionId(yourSessionId)
            .catch(err => console.error(err));
        const insta = await InstaClient.getProfile(Replaced)
        console.log(insta)

        const posts = insta.lastPosts

        const profileUrl = `https://www.instagram.com/${Replaced}/`
        try {
        
            const embed = new MessageEmbed()
                .setTitle('\*\*Instagram\*\*')
                .addField(`\*\*${insta.name} (@${Replaced}) ${insta.verified ? `${verified_instagram}` : ``} ${insta.private ? '🔒' : ''}\*\*`,
`${insta.bio}
${profileUrl}`)
                .setColor("C32AA3")
                .setThumbnail(insta.pic)
                .addFields(
                    { name: "Total Posts", value: insta.posts, inline: true },
                    { name: "Followers", value: insta.followers, inline: true },
                    { name: "Followings", value: insta.following, inline: true },
                )
                .setTimestamp()
                .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
        } catch (error) {
            message.channel.send(`Couldn't find into for that account`)
        } 
    }   
}