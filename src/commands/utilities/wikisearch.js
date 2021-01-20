const wiki = require('wikipedia');
const { MessageEmbed } = require('discord.js');
const { default_prefix } = require('../../utils/config.json');

// 3689696860%3A0RjraI9zlSn0ao%3A7
module.exports = {
    name: 'wikisearch',
    description: 'Scrap keyword from Wiki search engine.',
    category: '🕹   **Utility :**',
    usage: "wiki <keyword> ",
    aliases: [" "],
    run: async(client, message, args) => {

        
        let Text = args.join(" ");

        if (!Text) return message.channel.send(`Please Give Something!`);

        let Replaced = Text.replace(/ +/g, " ");
        
        const searchResults = await wiki.search(Replaced);

        try {
        const embed = new MessageEmbed()
                .setAuthor('Wiki Search')
                .setColor('ED80A7')
                .setDescription(`\*\*Usage:\*\* ${default_prefix}wiki <name>
\*\*Example:\*\* ${default_prefix}wiki ${searchResults.results[0].title}
\`-${searchResults.results[0].title}\` 
\`-${searchResults.results[1].title}\`
\`-${searchResults.results[2].title}\`
\`-${searchResults.results[3].title}\`
\`-${searchResults.results[4].title}\`
\`-${searchResults.results[5].title}\`
\`-${searchResults.results[6].title}\`
\`-${searchResults.results[7].title}\`
\`-${searchResults.results[8].title}\`
\`-${searchResults.results[9].title}\`
`,)
                .setTimestamp()
                .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)

        console.log(searchResults);

        const newUrl = await wiki.setLang('en');
        console.log(newUrl);
        
        } catch (error) {
            console.log(error);
            //=> Typeof wikiError
        }
    }
}