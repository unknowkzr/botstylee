let handler = async m => let nime =`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 Animelink [ 2/5 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ https://otakudere.net
┃ ❖ https://huntersekaisub.blogspot.com
┃ ❖ https://o.anibatch.me
┃ ❖ https://animeku.me
┃ ❖ https://anikyojin.net
┃ ❖ https://samehadaku.vip
┃ ❖ https://riie.jp
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim() // Tambah sendiri kalo mau
await conn.sendButton(m.chat, nime, '𝚈𝚊𝚖𝚊𝚒𝙱𝚘𝚝𝚣ッ々 - ``` Since August 2021 ```\nCMD : Animeinfo', 'NEXT ➡️', '#id25')

handler.command = /^(id30)$/i
handler.register = true

module.exports = handler
