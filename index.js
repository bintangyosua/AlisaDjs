const { Client, Collection } = require("discord.js");
const { prefix, token, mongoPath } = require("./src/config.json")

const client = new Client({
    disableEveryone: true
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();
client.queue = new Map();
client.vote = new Map();


// Run the command loader
["command", "events"].forEach(handler => {
    require(`./src/handlers/${handler}`)(client);
});


//  XP  AND LEVEL SYSTEM  //


//  ENDS OF XP  AND LEVEL SYSTEM  //

//  GONNA USE EVENT HERE  //


client.login(token);