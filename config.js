
 
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

//--------------------------VISHWA---------------------------------------
module.exports = {
SESSION_ID: process.env.SESSION_ID || "lWFxhRgR#LzFEvx1LozfLj3--svqyRFdx2zHScJzI-EWKaW9Y2U8",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "https://i.ibb.co/nbW1jqm/7fd7240f2ed306a6.jpg",
ALIVE_MSG: process.env.ALIVE_MSG || "*ᴍɪᴄᴋᴇʏ-ᴍᴅ ᴡᴀ ʙᴏᴛ ᴀʟɪᴠᴇ ɴᴏᴡ* 👋 \n\n> ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴠɪꜱʜᴡᴀ ᴀɴᴅ ꜱᴀᴅᴇᴇᴘᴀ",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "MICKEY-MD",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};

//--------------MADE by vishwa ---------------->-
