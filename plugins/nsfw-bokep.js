let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {

let res = await fetch('https://telegra.ph/file/97e5e587a1d27b7b96701.jpg')
		
	conn.sendButtonImg(m.chat, res, '', wm, 'Iyah bg saya khilaf', `tch`, m)

}

handler.help = ['bokep' ]
handler.tags = ['nsfw']
handler.command = /^(bokep)$/i

module.exports = handler