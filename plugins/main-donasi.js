const qrku = "http://telegra.ph/file/4728cfbd53c6cbc990413.png"

let handler = async (m, { conn, usedPrefix }) => conn.sendButtonImg(m.chat, qrku, `
╭─「 Donasi • Dana 」
│ • Telkomsel [081393227036]
│ • Dana  [081393227036]
╰────
╭─「 *NOTE* 」
│ Scan Qris All payment 
│ Kemudian ingfokan ke 
│ wa.me/6281393227036
╰────
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
