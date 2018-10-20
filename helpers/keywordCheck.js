const tools = require("./componentFunctions.js");
module.exports = {
   //ARGS: messsage[object]
   //Send a specified text or image base on keyword use.
   keywordCheck: function(message) {
      contentArray = message.content.split(" ");
      console.log(contentArray);
      //not sure how to implement this without it being awful, ill come back
   }
}
