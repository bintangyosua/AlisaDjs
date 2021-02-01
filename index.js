const { Client, Collection } = require("discord.js");
const { token, mongoPath, default_prefix } = require("./src/utils/config.json");
const Levels = require("discord-xp");
const mongoCurrency = require('discord-mongo-currency');
const eco = require('discord-mongoose-economy');

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

// ---------------------------------------- X P  A N D  L E V E L  S Y S T E M ---------------------------------------- //

Levels.setURL(mongoPath);  //This need to be done only once.
mongoCurrency.connect(mongoPath);
eco.connect(mongoPath)
// ---------------------------------------- G O N N A  U S E  E V E N T  H E R E ---------------------------------------- //

// --------------------------------------------- M O N G O D B --------------------------------------------- //
client.models = { user: require('./src/database/models/profile.js') }
require('./src/database/connect.js')

client.login(token);