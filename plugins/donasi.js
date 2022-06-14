let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
    let donasi = `
┌〔 Donasi • Emoney 〕
├ GoPay: 6281393227036
├ OVO: -
├ Dana: 6281393227036
├ Pulsa(Telkom): 6281393227036
└────

┌「 *NOTE* 」
├ Jika Aplikasi Pembayaran
│ Belum Premium Premium
│ Anda Bisa Scan Qris Di Atas
│
├ Donasi Berapapun 
│ Asal Ikhlas
└────
`
await conn.send3ButtonImg(m.chat, await (await fetch('https://telegra.ph/file/a04269b1f8d8de7398e66.jpg')).buffer(), donasi.trim(), wm, `Owner`, `.owner`)
  
}
handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^dona(te|si)$/i
handler.limit = false

module.exports = handler
