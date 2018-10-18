const botconfig  = require("./botconfig.json");
const tools      = require("./helpers/componentFunctions.js")
const Commando   = require('discord.js-commando');
const path       = require("path");

const client = new Commando.Client({
   owner: botconfig.ownerID,
   commandPrefix: botconfig.prefix
});

client.on('ready', () => {
   console.log("Kipo status: ONLINE");
})

client.registry
   .registerGroups([
      ["base", "base commands"]
   ])
   .registerDefaults()
   .registerCommandsIn(path.join(__dirname, 'commands'));


client.login(botconfig.token);
