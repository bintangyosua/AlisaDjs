const move = require("array-move");
const { canModifyQueue } = require("../../util/EvobotUtil");
const  { prefix } = require("../../config.json")

module.exports = {
  name: "move",
  aliases: ["mv"],
  description: "Move songs around in the queue",
  category: "🎶   Music :",
  usage: "move <number of queue>",
  run: async (client, message, args) => {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("There is no queue.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    if (!args.length) return message.reply(`Usage: move \`<Queue Number>\``);
    if (isNaN(args[0]) || args[0] <= 1) return message.reply(`Usage: move \`<Queue Number>\``);

    let song = queue.songs[args[0] - 1];

    queue.songs = move(queue.songs, args[0] - 1, args[1] == 1 ? 1 : args[1] - 1);
    queue.textChannel.send(
      `${message.author} 🚚 moved **${song.title}** to ${args[1] == 1 ? 1 : args[1] - 1} in the queue.`
    );
  }
};
