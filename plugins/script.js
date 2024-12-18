




const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *𝐯𝐢𝐬𝐡𝐰𝐚 𝐚𝐧𝐝 𝐬𝐚𝐝𝐞𝐞𝐩𝐚*

> *SURON-MD REPO:*
*|* *https://github.com/Vishwa500/SOURON-MD*

> *SUPPORT GROUP:*
*|* *https://whatsapp.com/channel/0029Vaxq8k8L7UVXgIT36A2n*
*╰──────────────●●►*

> *CREATED BY VISHWA AND SADEEPA*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363321386877609@newsletter',
      newsletterName: "SUORON ᴄʜᴀɴɴᴇʟ",
      serverMessageId: 999
    },
externalAdReply: { 
title: 'SOURON-MD',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/Vishwa500/SOURON-MD" ,
thumbnailUrl: "https://i.ibb.co/WF67wzY/738.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
