//https://api.cryptonator.com/api/ticker/doge-usd
const commando = require('discord.js-commando');
const request  = require('request');
const tools    = require("D:/Programming & Computer Science/Projects/Kipo/helpers/componentFunctions.js");
class methods extends commando.Command {
   constructor(client) {
      super(client, {
         name: 'crypto',
         group: 'getters',
         memberName: 'crypto',
         description: 'get the price of the crypto used as argument'
      });
   }
   async run(message, args) {
      var api = "//https://api.cryptonator.com/api/ticker/" + args + "-usd";
      request(api, (error, response, body) => {
         var obj = JSON.parse(body);
         tools.embed(message, obj.base,
                     obj.price + "\n\n- Cryptonator", null);
      })
   }
}
module.exports = methods;
