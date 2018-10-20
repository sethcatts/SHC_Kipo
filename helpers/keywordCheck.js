const tools = require("./componentFunctions.js");
module.exports = {
   keywordCheck: function(message) {
      contentArray = message.content.split("");
      //switch(contentArray) {
      //case contentArray.includes("weeb" || "weeboo"):
      tools.sendImage(message, "./images/otaku.png");
      //}
   }
}
