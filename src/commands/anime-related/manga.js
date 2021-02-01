const { MessageEmbed } = require("discord.js");
const unirest = require("unirest");

module.exports = {
  name: "manga",
  category: `🎀   **Anime Related :**`,
  description: "Get manga information",
  aliases: ['comic'],
  usage: "manga <manga name>",
  run: async (client, message, args) => {

    let Text = args.join(" ");
    if (!Text) return message.channel.send(`manga <manga name>!`);
    let Replaced = Text.replace(/ +/g, " ");

    var req = unirest("GET", "https://jikan1.p.rapidapi.com/search/manga");
    req.query({ "q": Replaced });
    req.headers({
      "x-rapidapi-key": "812a137c98msha5a3e2e0d04bf5ap1c9887jsne3d0078209c6",
      "x-rapidapi-host": "jikan1.p.rapidapi.com",
      "useQueryString": true
    });
    req.end(function (res) { if (res.error) throw new Error(res.error);

      const result = res.body.results[0]
      
      const embed = new MessageEmbed()
        .setTitle('Manga')
        .setURL(result.url)
        .setThumbnail(result.image_url)
        .addField(result.title, result.synopsis)
        .setColor('ED80A7')
        .addFields(
          { name: 'Chapters', value: result.chapters, inline: true },
          { name: 'Volumes', value: result.volumes, inline: true },
          { name: 'Score', value: result.score, inline: true },
          { name: 'Published at', value: result.start_date, inline: false },
          { name: 'Members', value: result.members, inline: false }
        )
        .setTimestamp()
        .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
      message.channel.send(embed)
      
      
      console.log(res.body); });

    
  }
}