let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `

gak ada Group.
Terimakasih.

`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['groupofficial']
handler.tags = ['main']
handler.command = /^auragc|gr(u|ou)(p|b)official|gcofficial$/i
module.exports = handler
