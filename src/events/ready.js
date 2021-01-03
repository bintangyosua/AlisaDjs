const db = require("quick.db")
const { client } = require("discord.js")
const { mongoPath } = require('../config.json')
 


module.exports.run = async (client, message, args) => {
  console.log("JOIN NOC SERVER" )
  client.user.setActivity("Youtube")
}