const commando = require('discord.js-commando');
class add extends commando.Command {
   constructor(client) {
      super(client, {
         name: 'add',
         group: 'base',
         memberName: 'add',
         description: 'return the addition of the argument'
      });
   }
   async run(message, args) {
      var str = args.split("+");
      var ans = parseInt(str[0]) + parseInt(str[1]);
      message.channel.send("Answer: " + ans);
   }
}
module.exports = add;
