module.exports = {
    name: 'debug',
    aliases: ['mydebug'],
    category: `📃   **Info :**`,
    usage: 'debug',

    run: async (client, message) => {
        message.channel.send(`:white_check_mark: - ${client.user.username} connected in **${client.voice.connections.size}** channels !`);
    },
};