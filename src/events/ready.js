const { client } = require("discord.js");
const { mongoPath, default_prefix } = require('../utils/config.json');
const axios = require('axios');

module.exports.run = async (client, message, args) => {  
  setInterval(async ()=>{
  let textList = [`${client.guilds.cache.size} servers | ${default_prefix}help`, `${client.users.cache.size} users | ${default_prefix}play`, `don't cry don't be shy`]
    var text = textList[Math.floor(Math.random() * textList.length)];
    client.user.setActivity(text , { type: 'WATCHING' })
  },10000) // milliseconds
  console.log("Lumina already for vacation together")
}