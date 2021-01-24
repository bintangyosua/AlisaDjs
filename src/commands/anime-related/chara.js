const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`; //Color Name In CAPS - RANDOM For Random
const Scraper = require("mal-scraper");

module.exports = {
  name: "malsearch",
  category: `🎀   **Anime Related :**`,
  description: "Search something from MyAnimeList",
  aliases: ['mal', 'searchmal'],
  usage: "anime <anime name>",
  async play(song, message) {
    const lagu = song
    
    console.log(lagu)
  }
}