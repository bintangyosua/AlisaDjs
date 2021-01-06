//LETS GET STARTED
const { get } = require("request-promise-native");
const { MessageEmbed } = require("discord.js")

module.exports = {
name: "anime",
  category: `🎀   **Anime Related :**`,
  description: "Get anime information",
  aliases: ['searchanime', 'animesearcher'],
    usage: "anime <anime name>",
  run: (client, message, args) => {
    
    
    
    if(!args.length) {
      return message.channel.send("Please Give Anime Name")
    }
    //DEFINE OPTIONS
    
    let option = {
      url: `https://kitsu.io/api/edge/anime?filter[text]=${args.join(" ")}`,
      method: `GET`,
      headers: {
        'Content-Type': "application/vnd.api+json",
        'Accept': "application/vnd.api+json"

      },
      json: true
    }
    
    
    message.channel.send("Fetching The Info").then(msg => {
      get(option).then(body => {
       try {
        let embed = new MessageEmbed()
        .setTitle(body.data[0].attributes.titles.en)
        .setColor("RED")
        .setDescription(body.data[0].attributes.synopsis)
        .setThumbnail(body.data[0].attributes.posterImage.original)
        .addField("TOTAL EPISODES", body.data[0].attributes.episodeCount, true)
        .addField("RATINGS", body.data[0].attributes.averageRating, true)
        .addField("AGE RATINGS", body.data[0].attributes.ageRatingGuide, true)
        .addField("TYPE", body.data[0].attributes.subtype, true)
        .addField("STATUS", body.data[0].attributes.status, true)
        .addField("NSFW", body.data[0].attributes.nsfw, true)
        .setTimestamp()
        .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
        //.setImage(body.data[0].attributes.coverImage.large)
        //try it
        
        
        message.channel.send(embed)
        msg.delete();
        
       } catch (err) {
        msg.delete();
         return message.channel.send("Unable to find this anime");
       }
        
        
        
      }                 
                       
    )})
    
  }

}