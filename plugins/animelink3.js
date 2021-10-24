let handler = async m => let nime =`
┏ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┇       *「 Animelink [ 3/5 ] 」*
┣ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
┃ ❖ https://asta.zonawibu.cc
┃ ❖ https://anitoki.web.id
┃ ❖ https://anime-indo.co
┃ ❖ https://meownime.moe
┃ ❖ https://meownime.ltd
┃ ❖ https://miownime.com
┃ ❖ https://nimegami.com
┃ ❖ https://anisubindo.video
┃ ❖ https://wibudesu.com
┃ ❖ https://shirainime.com
┗ ┅ ━━━━━━━━━━━━━━━━━━━━ ┅ ━
`.trim() // Tambah sendiri kalo mau
await conn.sendButton(m.chat, nime, '𝚈𝚊𝚖𝚊𝚒𝙱𝚘𝚝𝚣ッ々 - ``` Since August 2021 ```\nCMD : Animelink', 'NEXT ➡️', '#id20')

handler.command = /^(id25)$/i
handler.register = true

module.exports = handler
