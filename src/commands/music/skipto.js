const { canModifyQueue } = require("../../util/EvobotUtil");
const { prefix } = require("../../config.json")

module.exports = {
  name: "skipto",
  aliases: ["st", "musicskipto", "musicst"],
  description: "Skip to the selected queue number",
  category: "🎶   Music :",
  usage: "skip <number of queue>",
  run: async (client, message, args) => {
    if (!args.length || isNaN(args[0]))
      return message
        .reply(`Usage: ${module.exports.name} \`<Queue Number>\``)
        .catch(console.error);

    const queue = message.client.queue.get(message.guild.id);
    if (!queue) return message.channel.send("There is no queue.").catch(console.error);
    if (!canModifyQueue(message.member)) return;
    if (args[0] > queue.songs.length)
      return message.reply(`The queue is only ${queue.songs.length} songs long!`).catch(console.error);

    queue.playing = true;

    if (queue.loop) {
      for (let i = 0; i < args[0] - 2; i++) {
        queue.songs.push(queue.songs.shift());
      }
    } else {
      queue.songs = queue.songs.slice(args[0] - 2);
    }

    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ skipped ${args[0] - 1} songs`).catch(console.error);
  }
};
