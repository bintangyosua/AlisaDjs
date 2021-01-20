const wiki = require('wikipedia');
const { MessageEmbed } = require('discord.js');

// 3689696860%3A0RjraI9zlSn0ao%3A7
module.exports = {
    name: 'wiki',
    description: 'Scrap keyword from Wiki search engine.',
    category: '🕹   **Utility :**',
    usage: "wiki <keyword> ",
    aliases: [" "],
    run: async(client, message, args) => {

        
        let Text = args.join(" ");

        if (!Text) return message.channel.send(`Please Give Something!`);

        let Replaced = Text.replace(/ +/g, " ");

        try {
            const page = await wiki.page(Replaced);
            
            //Response of type @Page object
            const summary = await page.summary();

            const ExpertSummary = await wiki.search('Batman')
            
            const embed = new MessageEmbed()
                .setAuthor('Wikipedia', summary.thumbnail.source)
                .setColor('ED80A7')
                .setThumbnail(summary.thumbnail.source)
                .setDescription(`\*\*${summary.title}\*\* \n${summary.extract}`)
                .setImage(summary.originalimage.source)
                .addFields(
                    {
                        name: 'Description',
                        value: summary.description,
                        inline: true
                    },
                    {
                        name: 'Urls',
                        value: `Desktop: ${summary.content_urls.desktop.page} \nMobile: ${summary.content_urls.mobile.page}`,
                        inline: true
                    }
                )
                .setTimestamp()
                .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)
            
            
            
            console.log(ExpertSummary);
            //Response of type @wikiSummary - contains the intro and the main image
        } catch (error) {
            console.log(error);
            //=> Typeof wikiError
        }
    }
}