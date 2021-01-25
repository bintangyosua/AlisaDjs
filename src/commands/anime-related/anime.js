const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`; //Color Name In CAPS - RANDOM For Random
const Scraper = require("mal-scraper"); //npm i mal-scraper

module.exports = {
  name: "anime",
  category: `🎀   **Anime Related :**`,
  description: "Get anime information",
  aliases: ['searchanime', 'animesearcher'],
  usage: "anime <anime name>",
  run: async (client, message, args) => {
      //Start

      let Text = args.join(" ");

      if (!Text) return message.channel.send(`Please Give Something!`);

      if (Text.length > 200) return message.channel.send(`Text Limit - 200`);

      let Msg = await message.channel.send(`**Searching It For You 🔮**`);

      let Replaced = Text.replace(/ +/g, " ");

      let Anime;

      let Embed;

      try {

      Anime = await Scraper.getInfoFromName(Replaced);

      if (!Anime.genres[0] || Anime.genres[0] === null) Anime.genres[0] = "None";
      if (!Anime.studios[0] || Anime.studios[0] === null) Anime.studios[0] = "None";

      var string = Anime.synopsis;
      var length = 1010;
      var trimmedString = string.substring(0, length);

      Embed = new MessageEmbed()
      .setColor(Color || "RANDOM")
      .setURL(Anime.url)
      .setImage(Anime.picture)
      .setTitle(Anime.title)
      .addField(`Information`,
`\*\*Type:\*\* ${Anime.type}
\*\*Status:\*\* ${Anime.status}
\*\*Aired:\*\* ${Anime.aired}
\*\*English Title:\*\* ${Anime.englishTitle}
\*\*Japanese Title:\*\* ${Anime.japaneseTitle}
\*\*Episodes:\*\* ${Anime.episodes}
\*\*Source:\*\* ${Anime.source}
\*\*Duration:\*\* ${Anime.duration}
\*\*Rating:\*\* ${Anime.rating}
\*\*Status:\*\* ${Anime.status}
\*\*Genres:\*\* ${Anime.genres.join(", ")}
\*\*Score:\*\* ${Anime.score} \`${Anime.scoreStats}\` 
\*\*Ranked:\*\* ${Anime.ranked}
\*\*Popularity:\*\* ${Anime.popularity}
\*\*Members:\*\* ${Anime.members}
\*\*Favorites:\*\* ${Anime.favorites}
\*\*Studios:\*\* ${Anime.studios.join(", ")}
      `)
      .addField(`Description`, `${trimmedString}...`)
      .setThumbnail(Anime.picture)
      .setFooter(`Score - ${Anime.score}`)
      .setTimestamp();

      
      console.log(Anime)
      return message.channel.send(Embed);

      Msg.delete()
      
      } catch (error) {
        return message.channel.send(`No Anime Found!`);
      };




      


      //End


  }
};