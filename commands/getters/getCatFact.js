const commando = require('discord.js-commando');
const request  = require('request');
const tools    = require('./componentFunctions.js');
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
      request('https://cat-fact.herokuapp.com/facts/random',
             (error, response, body) => {
         var obj = JSON.parse(body);
         tools.embed(message, "Cat Fact", obj.text + "\nby CatFacts.com", null);
      })
   }
}
module.exports = reply;
