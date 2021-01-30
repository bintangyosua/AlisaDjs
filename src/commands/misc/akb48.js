const { MessageEmbed } = require('discord.js');
const { AKBG } = require('../../libs/akb48/member2');

module.exports = {
    name: "akb",
    usage: "akb <member name>",
    description: "Display specific AKB48 member",
    category: '🕹   **Misc :**',
    aliases: ['akb48', '48', 'hkt48'],
    run: (client, message, args) => {

        const id = AKBG.map(x => x.id)

        const idList = new MessageEmbed()
            .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
            .setTitle('Keyword')
            .setColor('f28ea8')
            .addFields(
                { name: AKBG[0].name.romaji, value: id[0].join(", "), inline: true },
                { name: AKBG[1].name.romaji, value: id[1].join(", "), inline: true },
                { name: AKBG[2].name.romaji, value: id[2].join(", "), inline: true },
                { name: AKBG[3].name.romaji, value: id[3].join(", "), inline: true },
                { name: AKBG[4].name.romaji, value: id[4].join(", "), inline: true },
                { name: AKBG[5].name.romaji, value: id[5].join(", "), inline: true },
                { name: AKBG[6].name.romaji, value: id[6].join(", "), inline: true },
                { name: AKBG[7].name.romaji, value: id[7].join(", "), inline: true },
                { name: AKBG[8].name.romaji, value: id[8].join(", "), inline: true },
                { name: AKBG[9].name.romaji, value: id[9].join(", "), inline: true },
                { name: AKBG[10].name.romaji, value: id[10].join(", "), inline: true },
                { name: AKBG[11].name.romaji, value: id[11].join(", "), inline: true },
                { name: AKBG[12].name.romaji, value: id[12].join(", "), inline: true },
                { name: AKBG[13].name.romaji, value: id[13].join(", "), inline: true },
                { name: AKBG[14].name.romaji, value: id[14].join(", "), inline: true },
                { name: AKBG[15].name.romaji, value: id[15].join(", "), inline: true },
                { name: AKBG[16].name.romaji, value: id[16].join(", "), inline: true },
                { name: AKBG[17].name.romaji, value: id[17].join(", "), inline: true },
                { name: AKBG[18].name.romaji, value: id[18].join(", "), inline: true },
                { name: AKBG[19].name.romaji, value: id[19].join(", "), inline: true },
                { name: AKBG[20].name.romaji, value: id[20].join(", "), inline: true },
            )
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

        const err = new MessageEmbed()
                .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
                .setTitle('How to use')
                .setColor('f28ea8')
                .setDescription('Display specific AKB48 member \nUse \`$akb list\` for the keywords')
                .addField('Usage', 'akb <member name>')
                .addField('Example', 'akb zukky')
                .setTimestamp()
                .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

        let Text = args.join(" ");
        if (!Text) return message.channel.send(err)
        let Replaced = Text.replace(/ +/g, " ");

        if (args[0] === 'list') return message.channel.send(idList)

        try {
        
        const member = AKBG.find(x => x.id.find(x => x === Replaced));

        switch (args[0]){

            case Replaced:
                const embed = new MessageEmbed()
                    .setAuthor('AKB48', 'http://stage48.net/wiki/images/thumb/2/22/AKBLogo.png/210px-AKBLogo.png')
                    .setColor('f28ea8')
                    .setThumbnail(member.image)
                    .addFields(
                        { name: 'Name', value: `
\*\*Romaji:\*\* ${member.name.romaji}
\*\*Kanji:\*\* ${member.name.kanji}
\*\*Hiragana:\*\* ${member.name.hiragana}
                        `, inline: false },
                        { name: 'Date of Birth', value: member.date_of_birth, inline: true },
                        { name: 'Blood Type', value: member.blood_type, inline: true },
                        { name: 'From', value: member.from, inline: true },
                        { name: 'Current Teams', value: member.current_teams.join(", "), inline: false },
                        { name: 'Center Singles', value: member.center_singles, inline: false },
                        { name: 'SNS', value: `[Instagram](${member.instagram}) | [Twitter](${member.twitter})`}
                    )
                    .setTimestamp()
                    .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
                message.channel.send(embed)
                break;
        }

        } catch (error) {
            console.log(error);
            message.channel.send(err)
        } 
    }
}