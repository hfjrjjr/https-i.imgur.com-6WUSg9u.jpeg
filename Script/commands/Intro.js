const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "intro",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "🔰Rahat Islam🔰",
 description: "Show  Info",
 commandCategory: "info",
 usages: "info",
 cooldowns: 2
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const callback = () => api.sendMessage({
 body: `
┏━━━━━━━━━━━━━━━━┓
┃ 🌟𝐎𝐖𝐍𝐄𝐑 𝐈𝐍F𝐎🌟
┣━━━━━━━━━━━━━━━━┫
┃👤𝐍𝐀𝐌𝐄      :𝐀𝐁𝐈𝐑 𝐇𝐀𝐒𝐀𝐍 𝐑𝐀𝐇𝐀𝐓
┃🚹𝐆𝐄𝐍𝐃𝐄𝐑    :𝐌𝐀𝐋𝐄
┃🎂𝐀𝐆𝐄       :18
┃🕌𝐑𝐄𝐋𝐈𝐆𝐈𝐎𝐍 : 𝐈𝐒𝐋𝐀𝐌
┃🏫𝐄𝐃𝐔𝐂𝐀𝐓𝐈𝐎𝐍 :𝐇𝐒𝐂 𝐃𝐎𝐍𝐄💚
┃🏡𝐀𝐃𝐃𝐑𝐄𝐒𝐒 :𝐌𝐘𝐌𝐄𝐍𝐒𝐈𝐍𝐆𝐇 𝐁𝐀𝐀𝐍𝐆𝐋𝐀𝐃𝐄𝐒𝐇
┣━━━━━━━━━━━━━━━━┫
┃𝐓𝐈𝐊𝐓𝐎𝐊 :@𝐘𝐎𝐔𝐑 𝐑𝐀𝐇𝐀𝐓 𝐁𝐁𝐙
┃📢𝐓𝐄𝐋𝐄𝐆𝐑𝐀𝐌 :𝐑𝐀𝐇𝐀𝐓 𝐁𝐀𝐁𝐀𝐘
┃🌐𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 :𝐀𝐁𝐈𝐑 𝐇𝐀𝐒𝐀𝐍 𝐑𝐀𝐇𝐀𝐓
┣━━━━━━━━━━━━━━━━┫
┃🕒𝐔𝐏𝐃𝐀𝐓𝐄𝐃 𝐓𝐈𝐌𝐄 :${time}
┗━━━━━━━━━━━━━━━━┛`,
 attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));

 return request("https://i.imgur.com/6WUSg9u.jpeg")
 .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
 .on('close', () => callback());
};
