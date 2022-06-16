let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, global.API('https://rest-beni.herokuapp.com/api/randomimage/milf'), 'Nih', wm, 'NEXT', '.milf', m)
}
handler.help = ['milf']
handler.tags = ['nsfw']
handler.command = /^(milf)$/i

module.exports = handler
