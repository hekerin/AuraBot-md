let moment = require('moment-timezone')
let fetch = require('node-fetch')
let handler = m => m

handler.all = async function (m, { isBlocked }) {

    if (m.chat.endsWith('broadcast') || m.fromMe || isBlocked || m.isGroup || db.data.settings[this.user.jid].group) return
    let user = global.db.data.users[m.sender]
    let name = conn.user.name
    if (new Date - user.pc < 86400000) return // setiap 24 jam sekali
    let anu = `
Hai ${await this.getName(m.sender)}, ${ucapan()}
Saya adalah AuraBot, salah satu bot whatsapp multi device ada yang bisa saya bantu?

Kamu bisa menggunakan AuraBot untuk membuat sticker, mendownload video youtube, facebook, tiktok, instagram, atau hanya sekedar bersenang senang! Fitur selengkapnya tentang Aurabot bisa di lihat di *.menu*
`
await conn.send3ButtonImg(m.chat, await (await fetch('https://telegra.ph/file/a04269b1f8d8de7398e66.jpg')).buffer(), anu.trim(), wm, `Menu`, `.menu`, `Donasi`, `.donasi`)
user.pc = new Date * 1
}

module.exports = handler

function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  res = "jangan lupa tidur yaah, lop yu<3"
  if (time >= 4) {
    res = "Selamat Pagi ☀"
  }
  if (time > 10) {
    res = "Selamat Siang 🌞"
  }
  if (time >= 15) {
    res = "Selamat Sore 🌝"
  }
  if (time >= 18) {
    res = "Selamat Malam 🌚"
  }
  return res
}