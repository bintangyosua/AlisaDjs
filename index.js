const { Client, Collection } = require("discord.js");
const { token, mongoPath, default_prefix } = require("./src/config.json");
const RPC = require('discord-rpc');

const rpc = new RPC.Client({
    transport: "ipc"
});

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Non Official Cover",
        state: "Making Discord Bot",
        startTimestamp: new Date(),
        largeImageKey: "icon",
        smallImageKey: "testing",
    });

    console.log("Rich presence is now active");
})

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

rpc.login({
    clientId: "780018362138886144"
})

client.login(token);