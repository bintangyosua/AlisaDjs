const { canModifyQueue } = require("../../utils/EvobotUtil");
const { prefix } = require("../../utils/config.json")

module.exports = {
  name: "remove",
  aliases: ["rm", "removemusic"],
  description: "Remove song from the queue",
  category: "🎶   Music :",
  usage: "remove <number of queue>",
  run: async (client, message, args) => {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("There is no queue.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!args.length) return message.reply(`Usage: remove \`<Queue Number>\``);
    if (isNaN(args[0])) return message.reply(`Usage: remove \`<Queue Number>\``);

    const song = queue.songs.splice(args[0] - 1, 1);
    queue.textChannel.send(`${message.author} ❌ removed **${song[0].title}** from the queue.`);
  }
};
