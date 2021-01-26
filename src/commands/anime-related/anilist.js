const { MessageEmbed } = require("discord.js");
const Anilist = require('anilist.js');
const { ANILIST_TOKEN } = require('../../utils/apikey.json');

module.exports = {
  name: "chara",
  category: `🎀   **Anime Related :**`,
  description: "Get specific character information",
  aliases: ['character'],
  usage: "$chara <character name>",
  run: async (client, message, args) => {

    const anilist = new Anilist.Client(ANILIST_TOKEN);

    let Text = args.join(" ");
    if (!Text) return message.channel.send(`Usage: $chara <name> \n Example: $chara shirayuki`);
    let Replaced = Text.replace(/ +/g, " ");

    try {
    
        const search = await anilist.searchCharacters({search: Replaced});

        const result = await search.Results[0].info

        console.log(result)

        const title = result.media.edges[0].node.title

        var string = result.description;
        var length = 1010;
        var trimmedString = string.substring(0, length);

        const SearchMessage = new MessageEmbed()
            .setTitle(`${title.userPreferred}`)
            .setThumbnail(result.image.large)
            .setColor('ED80A7')
            .addFields(
                { name: 'Name', value: `[${result.name.full} ${result.name.native}](${result.siteUrl})` },
                { name: 'Favourites', value: `${result.favourites}` },
                { name: 'Description', value: `${trimmedString}..` }
            )
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
        await message.channel.send(SearchMessage)
    } catch (error) {
        console.log(error)
    }
  }
};