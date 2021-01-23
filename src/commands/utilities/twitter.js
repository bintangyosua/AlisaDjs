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
            

            const embed = new MessageEmbed()
            .setTitle('\*\*Twitter\*\*')
            .addField(`\*\*${profile.name} (@${profile.screen_name}) ${profile.verified ? `${verified_instagram}` : ``} ${profile.protected ? '🔒' : ''}\*\*`,
`${profile.description}
${profile.url}`
            )
            .setColor("1b95e0")
            .addFields(
                {
                    name: "Followers",
                    value: profile.followers_count,
                    inline: true
                },
                {
                    name: "Followings",
                    value: profile.friends_count,
                    inline: true
            
                },
                {
                    name: "Favourites",
                    value: profile.favourites_count,
                    inline: true
                },
                {
                    name: "Last Tweet",
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
          
        

                  try {
                    const status = new MessageEmbed()
                .setTitle('\*\*Twitter\*\*')
                .addField(`\*\*${profile.name} (@${profile.screen_name}) ${profile.verified ? `${verified_instagram}` : ``} ${profile.protected ? '🔒' : ''}\*\*`,
`${profile.description}
${profile.url}`
                            )
                .setColor("1b95e0")
                .addFields(
                    {
                        name: 'Created at',
                        value: profile.status.created_at,
                        inline: true
                    },
                    {
                        name: 'Tweet',
                        value: profile.status.text,
                        inline: false
                    }
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
                    const embed = new MessageEmbed()
            .setTitle('\*\*Twitter\*\*')
            .addField(`\*\*${profile.name} (@${profile.screen_name}) ${profile.verified ? `${verified_instagram}` : ``} ${profile.protected ? '🔒' : ''}\*\*`,
`${profile.description}
${profile.url}`
            )
            .setColor("1b95e0")
            .addFields(
                {
                    name: "Followers",
                    value: profile.followers_count,
                    inline: true
                },
                {
                    name: "Followings",
                    value: profile.friends_count,
                    inline: true
            
                },
                {
                    name: "Favourites",
                    value: profile.favourites_count,
                    inline: true
                },
                {
                    name: "Last Tweet",
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
                    
                pages = [
                    embed,
                  ];
      
                  const emojiList = ["⏪", "⏩"];
                  const timeout = '300000'
      
                  paginationEmbed(message, pages, emojiList, timeout);

                  }

                } catch (error) {  
                    message.channel.send('couldn\'t find that account')
                    console.log(error)
                }
    }
}