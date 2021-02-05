const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');

module.exports = {
    name: 'dota2',
    description: 'Sends a message to the Alisa Support Server\'s feedback channel.',
    usage: 'dota2 <hero name>',
    aliases: ['dota'],
    category: '🕹   **Misc :**',
    run: async (client, message, args) => {

        const heroName = await fetch("https://api.opendota.com/api/heroStats").then((res) =>
            res.json()
            );

        const str = heroName.filter(record => record.primary_attr === 'str')
        const strList = str.map(obj => obj.localized_name)
        
        const agi = heroName.filter(record => record.primary_attr === 'agi')
        const agiList = agi.map(obj => obj.localized_name)

        const int = heroName.filter(record => record.primary_attr === 'int')
        const intList = int.map(obj => obj.localized_name)

        console.log(strList)

        const heroList = new MessageEmbed()
            .setTitle('Dota 2')
            .setColor('141518')
            .setThumbnail('https://i.pinimg.com/originals/c1/ec/da/c1ecda477bc92b6ecfc533b64d4a0337.png')
            .setDescription('Usage: \`$dota2 <Hero Name>\` \nExample: \`$dota2 Anti-Mage\`')
            .addFields(
                { name: 'Strength', value: strList.join(", ") },
                { name: 'Agility', value: agiList.join(", ") },
                { name: 'Intelligence', value: intList.join(", ")}
            )
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

        let Text = args.join(" ");
        if (!Text) return message.channel.send(heroList);
        let Replaced = Text.replace(/ +/g, " ");

        

        try {

            const data = await fetch("https://api.opendota.com/api/heroStats").then((res) =>
            res.json()
            );

            const response = data.filter(record => record.localized_name === Replaced)
            const hero = response[0]
            
            const img_url = `https://api.opendota.com${hero.img}`

            const Stats = stripIndent`
            Base Health       :: ${hero.base_health}
            Base Health Regen :: ${hero.base_health_regen}
            Base Mana         :: ${hero.base_mana}
            Base Mana Regen   :: ${hero.base_mana_regen}
            Base Armor        :: ${hero.base_armor}
            Base Mr           :: ${hero.base_mr}
            Base Attack Min   :: ${hero.base_attack_min}
            Base Attack Max   :: ${hero.base_attack_max}
            Base Strength     :: ${hero.base_str}
            Base Agility      :: ${hero.base_agi}
            Base Intelligence :: ${hero.base_int}
            Strength Gain     :: ${hero.str_gain}
            Agility Gain      :: ${hero.agi_gain}
            Intelligence Gain :: ${hero.int_gain}
            Attack Range      :: ${hero.attack_range}
            Projectile Speed  :: ${hero.projectile_speed}
            Attack Rate       :: ${hero.attack_rate}
            Movement Speed    :: ${hero.move_speed}
            Turn Rate         :: ${hero.turn_rate}
            `;

            const embed = new MessageEmbed()
                .setTitle('Dota 2')
                .setColor('141518')
                .addFields(
                    { name: 'Name', value: `${hero.localized_name}`, inline: true },
                    { name: 'Primary Attribute', value: `${hero.primary_attr}`, inline: true },
                    { name: 'Attack Type', value: `${hero.attack_type}`, inline: true },
                    { name: 'Roles', value: `${hero.roles.join(", ")}`, inline: true },
                    { name: 'Stats', value: `\`\`\`asciidoc\n${Stats}\`\`\``, inline: false}
                    )
                .setImage(img_url)
                .setTimestamp()
                .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)

        } catch (error) {
            console.log(error)
            message.channel.send('Please give the correct name!', heroList)
        }
        
    }
}