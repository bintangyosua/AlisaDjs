const tokensss = require('../../utils/twitter.json');
const getTwitterInfo = require('get-twitter-info');
const { MessageEmbed } = require('discord.js');
// 3689696860%3A0RjraI9zlSn0ao%3A7
module.exports = {
    name: 'twitter',
    description: 'Display twitter account',
    category: '🕹   **Utility :**',
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

        const profile = await getTwitterInfo(tokens, Replaced)
        
          const embed = new MessageEmbed()
            .setAuthor(`${profile.verified ? `${profile.screen_name} ✔` : `${Replaced}`} ${profile.protected ? '🔒' : ''}`, `${profile.profile_image_url}`)
            .setDescription(profile.description)
            .setColor("1b95e0")
            .addFields(
                {
                    name: "Followers",
                    value: profile.followers_count,
                    inline: true
                },
                {
                    name: "Following",
                    value: profile.friends_count,
                    inline: true
            
                },
                {
                    name: "Favourites",
                    value: profile.favourites_count,
                    inline: true
                },
                {
                    name: "Statuses",
                    value: profile.statuses_count,
                    inline: true
                },
                {
                    name: "Created at",
                    value: profile.created_at,
                    inline: true
                }, 
              
            )
            .setImage(profile.profile_banner_url)
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
          message.channel.send(embed)
        
        console.log(profile);
    }
}