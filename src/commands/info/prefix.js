const { default_prefix } = require('../../config.json')

module.exports = {
    name: "prefix",
    description: "Display this Bot prefix",
    category: `📃   **Info :**`,
    aliases: ['prefixess'],
    usage: "prefix",
    run: async (client, message, args) => {
        if(!args[0]) return message.channel.send(`The prefix is ` +"`" + default_prefix + "`")
    }
}