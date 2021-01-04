const { Client, Collection } = require("discord.js");
const { token, mongoPath, default_prefix } = require("./src/config.json");


const client = new Client({
    disableEveryone: true
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();
client.queue = new Map();
client.vote = new Map();
client.prefix = new Map();

// Run the command loader
["command", "events"].forEach(handler => {
    require(`./src/handlers/${handler}`)(client);
});


//  XP  AND LEVEL SYSTEM  //


//  ENDS OF XP  AND LEVEL SYSTEM  //


//  GONNA USE EVENT HERE  //


//  MONGODB //
client.models = { user: require('./src/database/models/user.js') }
require('./src/database/connect.js')

client.login(token);