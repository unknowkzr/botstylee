let handler = async m => let nime = `
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 Animelink [ 5/5 ] 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ https://moenime.web.id
┃ ❖ https://nontonanimeid.com
┃ ❖ https://pendekarsubs.us
┃ ❖ https://melodysubs.net
┃ ❖ https://pucuktranslation.pw
┃ ❖ https://kazefuri.net
┃ ❖ https://haruzorasubs.net
┃ ❖ https://myanimelist.net
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim() // Tambah sendiri kalo mau
await conn.send2Button(m.chat, nime, '𝚈𝚊𝚖𝚊𝚒𝙱𝚘𝚝𝚣ッ々 - ``` Since August 2021 ```\nCMD : Animelink', '📍Menu📍', '$?')

handler.command = /^id10$/i
handler.register = true

module.exports = handler