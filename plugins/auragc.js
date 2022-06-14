let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `

*Join group official Bot!*
Sekedar meramaikan, atau juga jika ada informasi mengenai bot.

https://chat.whatsapp.com/BKUUviabCwFIr9pIRe9iuE

Harap patuhi rules dan peraturan pada masing masing group ya! Terimakasih.

`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['groupofficial']
handler.tags = ['main']
handler.command = /^auragc|gr(u|ou)(p|b)official|gcofficial$/i
module.exports = handler
