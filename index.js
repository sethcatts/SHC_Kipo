const botconfig    = require("./botconfig.json");
const Commando     = require('discord.js-commando');
const path         = require("path");
const tools        = require("./helpers/componentFunctions.js");

//Init client
const client = new Commando.Client({
   owner: botconfig.ownerID,
   commandPrefix: botconfig.prefix
});

//On login status update
client.on('ready', () => {
   console.log("Kipo status: ONLINE");
   client.user.setGame(tools.getStatus());
})

//Register command groups
client.registry
   .registerGroups([
      ["base", "base commands"],
      ["getters", "Get commands"]
   ])
   .registerDefaults()
   .registerCommandsIn(path.join(__dirname, 'commands'));

//Bot login method call
client.login(botconfig.token);
