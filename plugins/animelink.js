let handler = async m => let nime =`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 Animelink [ 1/5 ] 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ https://kusonime.com
┃ ❖ https://anoboy.media
┃ ❖ https://oploverzz.net
┃ ❖ https://Otakudesu.moe
┃ ❖ https://neonime.site
┃ ❖ https://gomunime.online
┃ ❖ https://samehadaku.vip
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim() // Tambah sendiri kalo mau
await conn.sendButton(m.chat, nime, '𝚈𝚊𝚖𝚊𝚒𝙱𝚘𝚝𝚣ッ々 - ``` Since August 2021 ```\nCMD : Animelink', 'NEXT ➡️', '#id30')

handler.help = ['animelink']
handler.tags = ['anime']
handler.command = /^(animelink)$/i
handler.register = true

module.exports = handler
