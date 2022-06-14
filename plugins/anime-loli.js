let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('https://rest-beni.herokuapp.com/api/randomimage/loli'), 'Nih', wm, 'NEXT', '.loli', m)
}
handler.help = ['loli']
handler.tags = ['anime']
handler.command = /^(loli)$/i

module.exports = handler
