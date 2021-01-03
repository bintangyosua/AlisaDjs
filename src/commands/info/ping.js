
module.exports = {
    name: "ping",
    description: "Returns latency and API ping",
    category: `📃   **Info :**`,
    run: async (client, message, args) => {
       message.channel.send(`Pong - ${client.ws.ping}ms`)
    }
}