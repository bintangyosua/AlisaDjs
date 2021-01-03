const { client } = require("discord.js")
const { mongoPath } = require('../config.json')
 


module.exports.run = async (client, message, args) => {
  console.log("JOIN NOC SERVER" )
  client.user.setActivity("Roleplay | $help for help | Don't cru don't be shy")
}