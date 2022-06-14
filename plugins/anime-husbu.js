let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('https://rest-beni.herokuapp.com/api/randomimage/husbu'), 'Nih', wm, 'NEXT', '.husbu', m)
}
handler.help = ['husbu']
handler.tags = ['anime']
handler.command = /^(husbu)$/i

module.exports = handler
