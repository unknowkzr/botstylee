let moment = require('moment-timezone')
let handler = m => m

handler.all = async function (m) {

    if (m.chat.endsWith('broadcast')) return
    if (m.fromMe) return
    if (m.isGroup) return
    if (db.data.settings.groupOnly) return
    let user = global.DATABASE.data.users[m.sender]
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    await this.sendButton(m.chat, `
Hai, ${ucapan()}
${user.banned ? 'kamu dibanned⚠️' : 'Ada yang bisa saya bantu?\n\n𝚈𝚊𝚖𝚊𝚒𝙱𝚘𝚝𝚣ッ'}
`.trim(), '𝚈𝚊𝚖𝚊𝚒𝙱𝚘𝚝𝚣ッ', user.banned ? '⛔ PEMILIK BOT ⛔' : '🔱 MENU 🔱', user.banned ? ',owner' : '#?', m)
    user.pc = new Date * 1
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Oyasumii🌃"
    if (time >= 4) {
        res = "Ohayoo🌄"
    }
    if (time > 10) {
        res = "Konnichiwaa☀️"
    }
    if (time >= 15) {
        res = "Konbanwaa🌅"
    }
    if (time >= 18) {
        res = "Oyasumii🌛"
    }
    return res
}
