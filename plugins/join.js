let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text, usedPrefix }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link Salah'
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`).then(() => {
        var jumlahHari = 86400000 * 0.5
        var now = new Date() * 1
        if (now < global.DATABASE.data.chats[res.gid].expired) global.DATABASE.data.chats[res.gid].expired += jumlahHari
        else global.DATABASE.data.chats[res.gid].expired = now + jumlahHari
    })
    await conn.sendButton(res.gid, `
*${conn.user.name}* adalah bot whatsapp yang dibangun dengan Nodejs, *${conn.user.name}* diundang oleh @${m.sender.split`@`[0]}
    
ketik *${usedPrefix}menu* untuk melihat daftar perintah`.trim(), '𝚈𝚊𝚖𝚊𝚒𝙱𝚘𝚝𝚣ッ', 'MENU', `${usedPrefix}?`, { contextInfo: { mentionedJid: [m.sender] } })
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['premium']

handler.command = /^join$/i

handler.premium = true

module.exports = handler
