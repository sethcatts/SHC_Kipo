const botconfig    = require("./botconfig.json");
const tools        = require("./helpers/componentFunctions.js")
const Commando     = require('discord.js-commando');
const path         = require("path");
const keywordCheck = require("./helpers/keywordCheck.js");

const client = new Commando.Client({
   owner: botconfig.ownerID,
   commandPrefix: botconfig.prefix
});

client.on('ready', () => {
   console.log("Kipo status: ONLINE");
})

client.on('message', (message) => {
   console.log("Running keyword check");
   keywordCheck.keywordCheck(message);
})

client.registry
   .registerGroups([
      ["base", "base commands"]
   ])
   .registerDefaults()
   .registerCommandsIn(path.join(__dirname, 'commands'));


client.login(botconfig.token);
