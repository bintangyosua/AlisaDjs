const { canModifyQueue } = require("../../utils/EvobotUtil");

module.exports = {
  name: "skip",
  aliases: ["s", "musicskip"],
  description: "Skip the currently playing song",
  category: "🎶   Music :",
  usage: "skip",
  run: async (client, message, args) => {
    const queue = message.client.queue.get(message.guild.id);
    if (!queue)
      return message.reply("There is nothing playing that I could skip for you.").catch(console.error);
    if (!canModifyQueue(message.member)) return;

    queue.playing = true;
    queue.connection.dispatcher.end();
    queue.textChannel.send(`${message.author} ⏭ skipped the song`).catch(console.error);
  }
};
