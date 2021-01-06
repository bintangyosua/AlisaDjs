const { Client, Collection } = require("discord.js");
const { token, mongoPath, default_prefix } = require("./src/config.json");
// ---------------------------------------- COLLECTIONS ---------------------------------------- //
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

// ---------------------------------------- X P  A N D  L E V E L  S Y S T E M ---------------------------------------- //

// ---------------------------------------- E N D S  O F  X P  A N D  L E V E L  S Y S T E M ---------------------------------------- //

// ---------------------------------------- G O N N A  U S E  E V E N T  H E R E ---------------------------------------- //

// --------------------------------------------- M O N G O D B --------------------------------------------- //
client.models = { user: require('./src/database/models/user.js') }
require('./src/database/connect.js')

client.login(token);