const tokensss = require('../../utils/twitter.json');
const getTwitterInfo = require('get-twitter-info');
const paginationEmbed = require('discord.js-pagination');
const { MessageEmbed } = require('discord.js');
const { verified_instagram } = require('../../utils/emojis.json')
// 3689696860%3A0RjraI9zlSn0ao%3A7
module.exports = {
    name: 'twitter',
    description: 'Display twitter account',
    category: '🕹   **Misc :**',
    usage: "twitter <username> ",
    aliases: ["twt"],
    run: async(client, message, args) => {
        let Text = args.join(" ");
        if (!Text) return message.channel.send(`Please Give Something!`);
        let Replaced = Text.replace(/ +/g, " ");

        const tokens = {
            consumer_key: tokensss.consumer_key,
            consumer_secret: tokensss.consumer_secret,
            access_token: tokensss.access_token,
            access_token_key: tokensss.access_token_key,
            access_token_secret: tokensss.access_token_secret
          };
        
        try {

            const profile = await getTwitterInfo(tokens, Replaced)
            console.log(profile)

            if (!profile.url || profile.url === null) profile.url = "-";

            const url = `https://www.twitter.com/${profile.screen_name}/`
            
            const embed = new MessageEmbed()
            .setTitle('\*\*Twitter\*\*')
            .setThumbnail(profile.profile_image_url)
            .addField(`\*\*${profile.name} (@${profile.screen_name}) ${profile.verified ? `${verified_instagram}` : ``} ${profile.protected ? '🔒' : ''}\*\*`,
`${profile.description}
${url}`
            )
            .setColor("1b95e0")
            .addFields(
                { name: "Stats", value: `
\*\*Followers:\*\* \`${profile.followers_count}\`
\*\*Followings:\*\* \`${profile.friends_count}\`
\*\*Likes:\*\* \`${profile.favourites_count}\`
`},
                {name: 'Created at', value: profile.created_at, inline: false}
                )
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

                  try {
                    const status = new MessageEmbed()
                        .setTitle('\*\*Twitter\*\*')
                        .addField(`\*\*${profile.name} (@${profile.screen_name}) ${profile.verified ? `${verified_instagram}` : ``} ${profile.protected ? '🔒' : ''}\*\*`,
`${profile.description}
${url}`
                            )
                        .setColor("1b95e0")
                        .addFields(
                            { name: 'Created at', value: profile.status.created_at, inline: true },
                            { name: 'Tweet', value: profile.status.text, inline: false } 
                            )
                        .setTimestamp()
                        .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
                    pages = [
                        embed,
                        status,
                    ];
                    const emojiList = ["⏪", "⏩"];
                    const timeout = '300000'
        
                    paginationEmbed(message, pages, emojiList, timeout);
                    } catch (error) {
                        console.log(error)
                        message.channel.send(embed)
                    }

                    } catch (error) {  
                        message.channel.send('couldn\'t find that account')
                        console.log(error)
                    }
    }
}