let handler = async m => let nime = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 Animelink [ 4/5 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ https://shirainime.com
┃ ❖ https://animeku.com
┃ ❖ https://naruchiha.id
┃ ❖ https://gantzid.com
┃ ❖ https://animekompi.web.id
┃ ❖ https://www.pandanime.online
┃ ❖ https://Koenime.com
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim() // Tambah sendiri kalo mau
await conn.sendButton(m.chat, nime, '𝚈𝚊𝚖𝚊𝚒𝙱𝚘𝚝𝚣ッ々 - ``` Since August 2021 ```\nCMD : Animelink', 'NEXT➡️', '#id10')

handler.command = /^id20$/i
handler.register = true

module.exports = handler