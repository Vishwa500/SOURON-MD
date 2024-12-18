



const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["SOURON-MD"],
    react: "👑",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `❁ ════ ❃•⇆•❃ ════ ❁

*👋 HELLO ${pushname}*\n\n *I AM SOURON-MD V1*\n\n *A MULTIDEVICE BOT 😗*\n\n *CREATED BY VISHWA AND SADEEPA*\n\n *DON'T FORGET TO ENJOY BRO😎*\n\n\n *THANK YOU.😊*

❁ ════ ❃•⇆•❃ ════ ❁

> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴠɪꜱʜᴡᴀ ᴀɴᴅ ꜱᴀᴅᴇᴇᴘᴀ*

╰━❁ ═══ ❃•⇆•❃ ═══ ❁━╯
`

await conn.sendMessage(from,{image:{url:config.ALIVE_IMG},caption:madeMenu},{quoted:mek})

}catch(e){
console.log(e)
reply(`${e}`)
}
})
