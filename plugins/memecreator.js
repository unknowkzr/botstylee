const uploadImage = require('../lib/uploadImage')
const uploadFile = require('../lib/uploadFile')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, text }) => {
  await m.reply(global.wait)

let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    stiker = await sticker(false, meme, global.packname, global.author)
    if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
        quoted: m
    })


handler.help = ['memecreator <teks>|<teks>']
handler.tags = ['creator']
handler.command = /^(memecreator)$/i
handler.limit = true
handler.group = false
handler.register = true
module.exports = handler
