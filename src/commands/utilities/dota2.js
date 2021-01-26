const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
const { stripIndent } = require('common-tags');

module.exports = {
    name: 'dota2',
    description: 'Sends a message to the Lumina Support Server\'s feedback channel.',
    usage: 'dota2 <hero name>',
    aliases: ['dota'],
    category: '🕹   **Misc :**',
    run: async (client, message, args) => {
        

        const list = new MessageEmbed()
            .setTitle('Dota 2')
            .setColor('141518')
            .addField('Usage', '$dota2 <hero name> \nExample: $dota2 Anti-Mage')
            .addField('List', `Abaddon, Alchemist, Ancient Apparition, Anti-Mage, Arc Warden, Axe, Bane, Batrider, Beastmaster, Bloodseeker, Bounty Hunter, Brewmaster, Bristleback, Broodmother, Centaur Warrunner, Chaos Knight, Chen, Clinkz, Clockwerk, Crystal Maiden, Dark Seer, Dark Willow, Dazzle, Death Prophet, Disruptor, Doom, Dragon Knight, Drow Ranger, Earth Spirit, Earthshaker, Elder Titan, Ember Spirit, Enchantress, Enigma, Faceless Void, Grimstroke, Gyrocopter, Hoodwink, Huskar, Invoker, Io, Jakiro, Juggernaut, Keeper of the Light, Kunkka, Legion Commander, Leshrac, Lich, Lifestealer, Lina, Lion, Lone Druid, Luna, Lycan`)
            .addField('List2', `Magnus, Mars, Medusa, Meepo, Mirana, Monkey King, Morphling, Naga Siren, Nature's Prophet, Necrophos, Night Stalker, Nyx Assassin, Ogre Magi, Omniknight, Oracle, Outworld Destroyer, Pangolier, Phantom Assassin, Phantom Lancer, Phoenix, Puck, Pudge, Pugna, Queen of Pain, Razor, Riki, Rubick, Sand King, Shadow Demon, Shadow Fiend, Shadow Shaman, Silencer, Skywrath Mage, Slardar, Slark, Snapfire, Sniper, Spectre, Spirit Breaker, Storm Spirit, Sven, Techies, Templar Assassin, Terrorblade, Tidehunter, Timbersaw, Tinker, Tiny, Treant Protector, Troll Warlord, Tusk, Underlord, Undying, Ursa, Vengeful Spirit, Venomancer, Viper, Visage, Void Spirit, Warlock, Weaver, Windranger, Winter Wyvern, Witch Doctor, Wraith King`)
            .setTimestamp()
            .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))

        let Text = args.join(" ");
        if (!Text) return message.channel.send(list);
        let Replaced = Text.replace(/ +/g, " ");

        

        try {

            const data = await fetch("https://api.opendota.com/api/heroStats").then((res) =>
            res.json()
            );

            const response = data.filter(record => record.localized_name === Replaced)
            const hero = response[0]
            console.log(hero)
            
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
                .setThumbnail(img_url)
                .addFields(
                    { name: 'Name', value: `\`${hero.localized_name}\``, inline: true },
                    { name: 'Primary Attribute', value: `\`${hero.primary_attr}\``, inline: true },
                    { name: 'Attack Type', value: `\`${hero.attack_type}\``, inline: true },
                    { name: 'Roles', value: `\`${hero.roles.join(", ")}\``, inline: true },
                    { name: 'Stats', value: `\`\`\`asciidoc\n${Stats}\`\`\``, inline: false}
                    )
                .setTimestamp()
                .setFooter(message.author.tag,  message.author.displayAvatarURL({ dynamic: true }))
            message.channel.send(embed)

        } catch (error) {
            console.log(error)
            message.channel.send('Please give the correct name!', list)
        }
        
    }
}