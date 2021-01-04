
module.exports = {
    name: "ping",
    description: "Returns latency and API ping",
    category: `📃   **Info :**`,
    aliases: ['latency'],
    usage: "ping",
    run: async (client, message, args) => {
       message.channel.send(`Pong - ${client.ws.ping}ms`)
    }
}