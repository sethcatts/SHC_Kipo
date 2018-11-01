const commando = require('discord.js-commando');
class sub extends commando.Command {
   constructor(client) {
      super(client, {
         name: 'sub',
         group: 'base',
         memberName: 'sub',
         description: 'return the difference of the argument'
      });
   }
   async run(message, args) {
      var str = args.split("-");
      var ans = parseInt(str[0]) - parseInt(str[1]);
      message.channel.send("Answer: " + ans);
   }
}
module.exports = sub;
