const botconfig    = require("./botconfig.json");
const Commando     = require('discord.js-commando');
const path         = require("path");
const keywordCheck = require("./helpers/keywordCheck.js");

//Init client
const client = new Commando.Client({
   owner: botconfig.ownerID,
   commandPrefix: botconfig.prefix
});

//On login status update
client.on('ready', () => {
   console.log("Kipo status: ONLINE");
})

//Listen and run keyword check function
client.on('message', (message) => {
   console.log("Running keyword check");
   keywordCheck.keywordCheck(message);
})

//Register command groups
client.registry
   .registerGroups([
      ["base", "base commands"],
      ["getters", "Get commands"]
   ])
   .registerDefaults()
   .registerCommandsIn(path.join(__dirname, 'commands'));


client.login(botconfig.token);
