const tools = require("./componentFunctions.js");
module.exports = {
   //ARGS: messsage[object]
   //Send a specified text or image base on keyword use.
   //This implementation is truly awful, fix later
   keywordCheck: function(message) {
      contentArray = message.content.split(" ");
      if(contentArray.includes("weeb") || contentArray.includes("weaboo")) {
         message.channel.send("Did someone say weeb?");
         tools.sendImage(message, "./images/otaku.png");
      } else if(contentArray.includes("randomstringplaceholder")
             || contentArray.includes("randomstringplaceholder")
             || contentArray.includes("randomstringplaceholder")) {
         tools.sendImage(message, "./images/noswearing.jpg");
      } else if(contentArray.includes("randomstringplaceholder")
             || contentArray.includes("randomstringplaceholder")
             || contentArray.includes("randomstringplaceholder")) {
         tools.sendImage(message, "./images/dudetrustme.png");
      } else if(contentArray.includes("randomstringplaceholder")
             || contentArray.includes("bot")
             || contentArray.includes("robot")) {
         tools.sendImage(message, "./images/watcher.jpg");
      } else if(contentArray.includes("fun")
             || contentArray.includes("randomstringplaceholder")
             || contentArray.includes("randomstringplaceholder")) {
         message.channel.send("STOP STOP STOOOPP!")
         tools.sendImage(message, "./images/funpolice.jpg");
      }
   }
}
