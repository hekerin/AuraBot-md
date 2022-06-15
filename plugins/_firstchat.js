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
Perkenalkan aku adalah AuraBot!
Kamu bisa menggunakan Haruno untuk membuat sticker, mendownload video youtube, facebook, tiktok, instagram, atau hanya sekedar bersenang senang! Fitur selengkapnya tentang Haruno bisa di lihat di *.menu*

Kami tidak akan melakukan spam broadcast ke users.

Jangan lupa patuhi rules, dan harap tidak menelpon, vc, spam, mengirimkan bug atau virtex ke nomor bot.
Jika ada bug atau hal yang ingin ditanyakan silahkan menghubungi owner.
Terimakasih!
`
await conn.send3ButtonImg(m.chat, await (await fetch(thumbfoto)).buffer(), anu.trim(), wm, `Menu Utama`, `Donasi`, `.donasi`)
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
