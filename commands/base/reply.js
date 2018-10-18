const commando = require('discord.js-commando');
class reply extends commando.Command {
   constructor(client) {
      super(client, {
         name: 'reply',
         group: 'base',
         memberName: 'reply',
         description: 'reply to the command user'
      });
   }
   async run(message, args) {
      message.channel.send("Hello, " + message.author);
   }
}
module.exports = reply;
