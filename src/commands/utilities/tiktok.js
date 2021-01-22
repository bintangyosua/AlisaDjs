const TikTokScraper = require('tiktok-scraper');
const paginationEmbed = require('discord.js-pagination');
const { MessageEmbed } = require("discord.js");
const emojis = require('../../utils/emojis.json');
// de3ced372bfe3b82ad26d5a2e1ca32c5

module.exports = {
  name: "tiktok",
  usage: "tiktok <username>",
  description: "Get Information about specific user tiktok",
  category: '🕹   **Misc :**',
  aliases: [' '],
  run: async (client, message, args) => {

    let Text = args.join(" ");

    if (!Text) return message.channel.send(`Please Give Something!`);

    let Replaced = Text.replace(/ +/g, " ");

    const session = {
      number: 100,
      sessionList: ['sid_tt=de3ced372bfe3b82ad26d5a2e1ca32c5']
    }
    
    const options = {
      number: 50,
      sessionList: ['sid_tt=de3ced372bfe3b82ad26d5a2e1ca32c5'],
      proxy: '',
      by_user_id: false,
      asyncDownload: 5,
      asyncScraping: 3,
      filepath: `CURRENT_DIR`,
      fileName: `CURRENT_DIR`,
      filetype: `na`,
      headers: {
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4198.182 Safari/537.36',
        referer: 'https://www.tiktok.com/',
        cookie: 'tt_webid_v2=682049816937085534'
      },
      noWaterMark: false,
      hdVideo: false,
      verifyFp: ''
  };
      const user = await TikTokScraper.getUserProfileInfo(Replaced, options);

      const posts = await TikTokScraper.user(Replaced, {session})
      const data0 = posts.collector[0]
      const data1 = posts.collector[1]
      const data2 = posts.collector[2]
      const data3 = posts.collector[3]
      const data4 = posts.collector[4]
      const data5 = posts.collector[5]
      const data6 = posts.collector[6]
      const data7 = posts.collector[7]
      const data8 = posts.collector[8]

      
      
      console.log(data0)

    try {

        const profile = user.user
        if (!user.user.signature || user.user.signature === null) user.user.signature = "-";

        const embed = new MessageEmbed()
          .setTitle('Tiktok')
          .addField(`${profile.nickname} (@${Replaced}) ${profile.verified ? `${emojis.verified_instagram}` : ''} ${profile.privateAccount ? '🔒' : ''}`, 
`
${profile.signature}
`
          )
          .setColor("1b95e0")
          .setThumbnail(profile.avatarLarger)
          .addFields(
            { name: 'Followers', value: user.stats.followerCount, inline: true },
            { name: 'Likes', value: user.stats.heartCount, inline: true },
            { name: 'Videos', value: user.stats.videoCount, inline: true },
          )
          .setTimestamp()
          .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

        const embed0 = new MessageEmbed()
            .setTitle('Tiktok')
            .addField(`${profile.nickname} (@${Replaced}) ${profile.verified ? ` ${emojis.verified_instagram}` : ''} ${profile.privateAccount ? '🔒' : ''}`, `\n${data0.text}`)
            .setColor("1b95e0")
            .addFields(
              { name: 'Tiktok Link', value: `[click here](${data0.webVideoUrl})` },
              { name: 'Stats', value: `
👁: \`${data0.playCount}\`
💖: \`${data0.diggCount}\`
🔼: \`${data0.shareCount}\`
💬: \`${data0.commentCount}\`
`, inline: true },
            )
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

            const embed1 = new MessageEmbed()
            .setTitle('Tiktok')
            .addField(`${profile.nickname} (@${Replaced}) ${profile.verified ? ` ${emojis.verified_instagram}` : ''} ${profile.privateAccount ? '🔒' : ''}`, `\n${data1.text}`)
            .setColor("1b95e0")
            .addFields(
              { name: 'Tiktok Link', value: `[click here](${data1.webVideoUrl})` },
              { name: 'Stats', value: `
👁: \`${data1.playCount}\`
💖: \`${data1.diggCount}\`
🔼: \`${data1.shareCount}\`
💬: \`${data1.commentCount}\`
`, inline: true },
            )
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

            const embed2 = new MessageEmbed()
            .setTitle('Tiktok')
            .addField(`${profile.nickname} (@${Replaced}) ${profile.verified ? ` ${emojis.verified_instagram}` : ''} ${profile.privateAccount ? '🔒' : ''}`, `\n${data2.text}`)
            .setColor("1b95e0")
            .addFields(
              { name: 'Tiktok Link', value: `[click here](${data2.webVideoUrl})` },
              { name: 'Stats', value: `
👁: \`${data2.playCount}\`
💖: \`${data2.diggCount}\`
🔼: \`${data2.shareCount}\`
💬: \`${data2.commentCount}\`
`, inline: true },
            )
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

            const embed3 = new MessageEmbed()
            .setTitle('Tiktok')
            .addField(`${profile.nickname} (@${Replaced}) ${profile.verified ? ` ${emojis.verified_instagram}` : ''} ${profile.privateAccount ? '🔒' : ''}`, `\n${data3.text}`)
            .setColor("1b95e0")
            .addFields(
              { name: 'Tiktok Link', value: `[click here](${data3.webVideoUrl})` },
              { name: 'Stats', value: `
👁: \`${data3.playCount}\`
💖: \`${data3.diggCount}\`
🔼: \`${data3.shareCount}\`
💬: \`${data3.commentCount}\`
`, inline: true },
            )
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

            const embed4 = new MessageEmbed()
            .setTitle('Tiktok')
            .addField(`${profile.nickname} (@${Replaced}) ${profile.verified ? ` ${emojis.verified_instagram}` : ''} ${profile.privateAccount ? '🔒' : ''}`, `\n${data4.text}`)
            .setColor("1b95e0")
            .addFields(
              { name: 'Tiktok Link', value: `[click here](${data4.webVideoUrl})` },
              { name: 'Stats', value: `
👁: \`${data4.playCount}\`
💖: \`${data4.diggCount}\`
🔼: \`${data4.shareCount}\`
💬: \`${data4.commentCount}\`
`, inline: true },
            )
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

            const embed5 = new MessageEmbed()
            .setTitle('Tiktok')
            .addField(`${profile.nickname} (@${Replaced}) ${profile.verified ? ` ${emojis.verified_instagram}` : ''} ${profile.privateAccount ? '🔒' : ''}`, `\n${data5.text}`)
            .setColor("1b95e0")
            .addFields(
              { name: 'Tiktok Link', value: `[click here](${data5.webVideoUrl})` },
              { name: 'Stats', value: `
👁: \`${data5.playCount}\`
💖: \`${data5.diggCount}\`
🔼: \`${data5.shareCount}\`
💬: \`${data5.commentCount}\`
`, inline: true },
            )
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

            const embed6 = new MessageEmbed()
            .setTitle('Tiktok')
            .addField(`${profile.nickname} (@${Replaced}) ${profile.verified ? ` ${emojis.verified_instagram}` : ''} ${profile.privateAccount ? '🔒' : ''}`, `\n${data6.text}`)
            .setColor("1b95e0")
            .addFields(
              { name: 'Tiktok Link', value: `[click here](${data6.webVideoUrl})` },
              { name: 'Stats', value: `
👁: \`${data6.playCount}\`
💖: \`${data6.diggCount}\`
🔼: \`${data6.shareCount}\`
💬: \`${data6.commentCount}\`
`, inline: true },
            )
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

            const embed7 = new MessageEmbed()
            .setTitle('Tiktok')
            .addField(`${profile.nickname} (@${Replaced}) ${profile.verified ? ` ${emojis.verified_instagram}` : ''} ${profile.privateAccount ? '🔒' : ''}`, `\n${data7.text}`)
            .setColor("1b95e0")
            .addFields(
              { name: 'Tiktok Link', value: `[click here](${data7.webVideoUrl})` },
              { name: 'Stats', value: `
👁: \`${data7.playCount}\`
💖: \`${data7.diggCount}\`
🔼: \`${data7.shareCount}\`
💬: \`${data7.commentCount}\`
`, inline: true },
            )
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

            const embed8 = new MessageEmbed()
            .setTitle('Tiktok')
            .addField(`${profile.nickname} (@${Replaced}) ${profile.verified ? ` ${emojis.verified_instagram}` : ''} ${profile.privateAccount ? '🔒' : ''}`, `\n${data8.text}`)
            .setColor("1b95e0")
            .addFields(
              { name: 'Tiktok Link', value: `[click here](${data8.webVideoUrl})` },
              { name: 'Stats', value: `
👁: \`${data8.playCount}\`
💖: \`${data8.diggCount}\`
🔼: \`${data8.shareCount}\`
💬: \`${data8.commentCount}\`
`, inline: true },
            )
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
     
            pages = [
              embed,
              embed0,
              embed1,
              embed2,
              embed3,
              embed4,
              embed5,
              embed6,
              embed7,
              embed8,
            ];

            const emojiList = ["⏪", "⏩"];
            const timeout = '300000'

          

            paginationEmbed(message, pages, emojiList, timeout);
            
    } catch (error) {
        console.log(error);
    }
    
  }
}