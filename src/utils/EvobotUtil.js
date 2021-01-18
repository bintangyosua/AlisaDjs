exports.canModifyQueue = (member) => {
    const { channelID } = member.voice;
    const botChannel = member.guild.voice.channelID;
    
    if (channelID !== botChannel) {
      member.send("You need to join the voice channel first!").catch(console.error);
      return;
    }
  
    return true;
  };
  
  let config;
  
  try {
    config = require("./config.json");
  } catch (error) {
    config = null;
  }

const { YOUTUBE_API_KEY, SOUNDCLOUD_CLIENT_ID, STAY_TIME, MAX_PLAYLIST_SIZE, QUEUE_LIMIT, token, ownerID, prefix, PRUNING, default_prefix, DEFAULT_VOLUME } = require('../utils/config.json')