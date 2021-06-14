const { Client, Collection } = require("discord.js");
const { token, mongoPath } = require("./src/utils/config.json");

// ---------------------------------------- COLLECTIONS ---------------------------------------- //

const client = new Client({
    disableEveryone: true
});

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

// --------------------------------------------- M O N G O D B --------------------------------------------- //

client.models = { user: require('./src/database/models/profile.js') }
require('./src/database/connect.js')

client.login(token);