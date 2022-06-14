let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('https://rest-beni.herokuapp.com/api/randomimage/neko'), 'Nih', wm, 'NEXT', '.neko', m)
}
handler.help = ['neko']
handler.tags = ['anime']
handler.command = /^(neko)$/i

module.exports = handler
