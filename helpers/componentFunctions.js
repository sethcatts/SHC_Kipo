const Commando     = require('discord.js-commando');

module.exports = {

   //ARGS: message(object), image[directory](string)
   //Send image file to specified channel
   sendImage: function(msg, image) {
      console.log("Sending Image");
      msg.channel.send({
         files:[{
            attachment: image
         }]
      });
   },

   //ARGS: message(object), title(string),
   //      text(string), color[hex code](string)
   //Create an embed message in the specified channel
   embed: function(message, title, text, color=0xFF0000) {
      message.channel.send({
         embed: {
            title:title,
            color: color,
            description: text
         }
      });
   },

   //ARGS: None
   //Return a status for Kipo
   getStatus: function() {
      var StatusList = ["League of Legends: TDM", "NANI!?", "amazing", "Loading...",
                        "Nekopara Vol 3", "Tetris Blitzkrieg", "yoooo",
                         "unhelpful", "Kip", "You never know", "Tik Taq Tou"];
      return StatusList[Math.floor((Math.random() * 10) + 1)];
   },

   //ARGS: args
   //Placeholder function
   placeHolderFunction: function(args) {
      //Code... or the lack of it.
   }

}
