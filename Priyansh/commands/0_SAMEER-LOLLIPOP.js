const fs = require("fs");
module.exports.config = {
  name: "lollipop",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("lollipop") ||
     react.includes("Lollipop") || react.includes("Lolli") || react.includes("LOLLI") ||
react.includes("lolipop") ||
react.includes("LOLLIPOP") ||     
react.includes("Lolipopp")) {
    var msg = {
        body: `${name} 𝐋𝐎 𝐁𝐀𝐁𝐘 𝐀𝐏𝐊𝐈 𝐋𝐎𝐋𝐋𝐈𝐏𝐎𝐏 💐✿
        •⊰ ☞𓅂 𝐌𝐀𝐃𝐄 ♡ 𝐁𝐘 ♡ 𝐒𝐀𝐌𝐄𝐄𝐑𓅂☜ ⊱•`,
attachment: fs.createReadStream(__dirname + `/noprefix/4e25b337b891027386f3c5b3be28c119.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🍭", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
