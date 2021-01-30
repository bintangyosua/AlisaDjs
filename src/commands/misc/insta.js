const Instagram = require('scraper-instagram');
const { MessageEmbed, Message } = require('discord.js');
const paginationEmbed = require('discord.js-pagination');
const { verified_instagram } = require('../../utils/emojis.json');

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
    
        const InstaClient = new Instagram();
        const yourSessionId = '3689696860%3A0RjraI9zlSn0ao%3A7';

        const emojiList = ["⏪", "⏩"];
        const timeout = '300000'

        const instagram = await InstaClient.authBySessionId(yourSessionId)
            .catch(err => console.error(err));

        try {

            const insta = await InstaClient.getProfile(Replaced)
            console.log(insta)
            const profileUrl = `https://www.instagram.com/${Replaced}/`
            const postUrl = 'https://www.instagram.com/p/'

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

                try  {

                    if (!insta.lastPosts[0].caption || insta.lastPosts[0].caption === null) insta.lastPosts[0].caption = '-'

                    const post0 = new MessageEmbed()
                        .setTitle('\*\*Instagram\*\*')
                        .addField(`\*\*${insta.name} (@${Replaced}) ${insta.verified ? `${verified_instagram}` : ``} ${insta.private ? '🔒' : ''}\*\*`,
`${insta.lastPosts[0].caption}
${postUrl}${insta.lastPosts[0].shortcode}`)
                        .setColor("C32AA3")
                        .addField('Stats', 
`💖: \`${insta.lastPosts[0].likes}\`
💬: \`${insta.lastPosts[0].comments}\`
`
                        )
                        .setImage(insta.lastPosts[0].thumbnail)
                        .setTimestamp()

                        try {

                            if (!insta.lastPosts[1].caption || insta.lastPosts[1].caption === null) insta.lastPosts[1].caption = '-'

                            const post1 = new MessageEmbed()
                                .setTitle('\*\*Instagram\*\*')
                                .addField(`\*\*${insta.name} (@${Replaced}) ${insta.verified ? `${verified_instagram}` : ``} ${insta.private ? '🔒' : ''}\*\*`,
`${insta.lastPosts[1].caption}
${postUrl}${insta.lastPosts[1].shortcode}`)
                                .setColor("C32AA3")
                                .addField('Stats', 
`💖: \`${insta.lastPosts[1].likes}\`
💬: \`${insta.lastPosts[1].comments}\`
`
                        )
                                .setImage(insta.lastPosts[1].thumbnail)
                                .setTimestamp()

                                try {
                                    if (!insta.lastPosts[2].caption || insta.lastPosts[2].caption === null) insta.lastPosts[2].caption = '-'

                                    const post2 = new MessageEmbed()
                                    .setTitle('\*\*Instagram\*\*')
                                    .addField(`\*\*${insta.name} (@${Replaced}) ${insta.verified ? `${verified_instagram}` : ``} ${insta.private ? '🔒' : ''}\*\*`,
`${insta.lastPosts[2].caption}
${postUrl}${insta.lastPosts[2].shortcode}`)
                                    .setColor("C32AA3")
                                    .addField('Stats', 
`💖: \`${insta.lastPosts[2].likes}\`
💬: \`${insta.lastPosts[2].comments}\`
`
                        )
                                    .setImage(insta.lastPosts[2].thumbnail)
                                    .setTimestamp()

                                    try {
                                        if (!insta.lastPosts[3].caption || insta.lastPosts[3].caption === null) insta.lastPosts[3].caption = '-'

                                        const post3 = new MessageEmbed()
                                        .setTitle('\*\*Instagram\*\*')
                                        .addField(`\*\*${insta.name} (@${Replaced}) ${insta.verified ? `${verified_instagram}` : ``} ${insta.private ? '🔒' : ''}\*\*`,
`${insta.lastPosts[3].caption}
${postUrl}${insta.lastPosts[3].shortcode}`)
                                        .setColor("C32AA3")
                                        .addField('Stats', 
`💖: \`${insta.lastPosts[3].likes}\`
💬: \`${insta.lastPosts[3].comments}\`
`
                        )
                                        .setImage(insta.lastPosts[3].thumbnail)
                                        .setTimestamp()

                                        pages = [
                                            embed,
                                            post0,
                                            post1,
                                            post2,
                                            post3,
                                        ];
                            
                                        paginationEmbed(message, pages, emojiList, timeout);

                                    } catch (error) {
                                        pages = [
                                            embed,
                                            post0,
                                            post1,
                                            post2,
                                        ];
                            
                                        paginationEmbed(message, pages, emojiList, timeout);
                                    }
                                } catch (error){
                                    pages = [
                                        embed,
                                        post0,
                                        post1,
                                    ];
                                             
                                    paginationEmbed(message, pages, emojiList, timeout);
                                }
                        } catch (error) {

                            pages = [
                                embed,
                                post0,
                            ];
                
                            paginationEmbed(message, pages, emojiList, timeout);

                        }
                } catch (error) {
                    message.channel.send(embed)
                }

            } catch (error) {
                console.log(error)
                message.channel.send('Couldn\'t find into that user')
            }
    }
}