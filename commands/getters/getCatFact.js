const commando = require('discord.js-commando');
const request  = require('request');
const tools    = require("D:/Programming & Computer Science/Projects/Kipo/helpers/componentFunctions.js");
class reply extends commando.Command {
   constructor(client) {
      super(client, {
         name: 'catfact',
         group: 'getters',
         memberName: 'catfact',
         description: 'State a cat fact from the cat facts API'
      });
   }
   async run(message, args) {
      var api = "https://cat-fact.herokuapp.com/facts/random"
      request(api, (error, response, body) => {
         var obj = JSON.parse(body);
         tools.embed(message, "Cat Fact", obj.text + "\n\n- CatFacts.com", null);
      })
   }
}
module.exports = reply;
