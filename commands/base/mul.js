const commando = require('discord.js-commando');
class mul extends commando.Command {
   constructor(client) {
      super(client, {
         name: 'mul',
         group: 'base',
         memberName: 'mul',
         description: 'return the product of the argument'
      });
   }
   async run(message, args) {
      var str = args.split("*");
      var ans = parseInt(str[0]) * parseInt(str[1]);
      message.channel.send("Answer: " + ans);
   }
}
module.exports = mul;
