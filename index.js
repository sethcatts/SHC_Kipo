const botconfig  = require("./botconfig.json");
const tools      = require("./componentFunctions.js")
const Commando   = require('discord.js-commando');
const path       = require("path");

const client = new Commando.Client({
   owner: botconfig.ownerID,
   commandPrefix: botconfig.prefix
});

client.on('ready', () => {
   console.log("Kip status: ONLINE");
})

client.on('message', (message) => {
   if(message.content.includes("kip" || "Kip")) {
      tools.sendImage(message, "images/x to doubt.jpg");
   }
})

client.registry
   .registerGroups([
      ["base", "base commands"]
   ])
   .registerDefaults()
   .registerCommandsIn(path.join(__dirname, 'commands'));


client.login(botconfig.token);
