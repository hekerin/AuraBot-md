let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
    let res = await fetch(global.API('xteam', '/randomimage/wpmobile', {}, 'APIKEY'))
    let img = await res.buffer()
    if (!img) throw 'Limit owner habis 🙈'
    
  conn.sendFile(m.chat, img, '', 'Nih Wallpapernya', m, 0, { thumbnail: Buffer.alloc(0) })
}

handler.help = ['wpanime']
handler.tags = ['anime']
handler.command = /^(wpanime)$/i
handler.limit = true


module.exports = handler
