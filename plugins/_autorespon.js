let fs = require('fs')
let moment = require('moment-timezone')

let handler = m => m

handler.all = async function (m) {
    if (m.chat.endsWith('status@broadcast')) {
        console.log('Status Wangsaf')
    }
    let { isBanned } = db.data.chats[m.chat]
    let { banned } = db.data.users[m.sender]
    let { group } = db.data.settings
    let setting = db.data.settings
    let user = global.db.data.users[m.sender]
    
    
    // salam
    let reg = /(ass?alam|اَلسَّلاَمُ عَلَيْكُمْ|السلام عليکم)/i
    let isSalam = reg.exec(m.text)
    if (isSalam && !m.fromMe) {
        m.reply(`وَعَلَيْكُمْ السَّلاَمُ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ\n_wa\'alaikumussalam wr.wb._`)
    }
    
    // ketika ada yang invite/kirim link grup di chat pribadi
    let isinvit = /chat.whatsapp/i.exec(m.text)
  if (isinvit && !m.fromMe){
        this.sendButton(m.chat, `
╭┈─────────────
╰──Sewa Bot!*──➤

 * Gratis 3 hari percobaan untuk grup! Agar bot tetap berada di grup anda dengan waktu lebih lama silahkan sewa bot dengan harga dibawah ini
 * ુོ➪ Info untuk Gabung premium :
 *〲 Rp. 5k = 1 minggu Premium
 *〲 Rp. 7k = 2 minggu Premium
 *〲 Rp. 15k = 1 bulan Premium
 *〲 Rp. 20k = 2 bulan Premium
 *〲 Rp. 30k = 3 bulan Premium
 *〲 Rp. 40k = 4 bulan Premium
 *〲 Rp. 50k = VIP PERMANEN
 
•°°°🕊°°°°°🕊°°°°°🕊°°°°°
`.trim(), wm, 'Pemilik Bot', '.owner', m)
    }
   let istiktok = /(tiktok.com)/i.test(m.text)
    if (m.text.startsWith('https://') && istiktok && !m.fromMe) {
       this.sendButton(m.chat, `*terdeteksi link Tiktok yang dikirim*\nbisa langsung Download dengan pencet tombol dibawah 👇`, wm, 'Download', `.tt ${m.text}`, m)
    }
   let isyt = /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/g.test(m.text)
    if (m.text.startsWith('https://') && isyt && !m.fromMe) {
       this.send2Button(m.chat, `*terdeteksi link dari Youtube yang dikirim*\nbisa langsung Download dengan pencet tombol dibawah 👇`, wm, 'Video', `.ytmp4 ${m.text}`,'Audio', `.ytmp3 ${m.text}`, m)
    }
   let isinsta = /(?:(?:http|https):\/\/)?(?:www.)?(?:instagram.com|instagr.am|instagr.com)\/(\w+)/g.test(m.text)
    if (m.text.startsWith('https://') && isinsta && !m.fromMe) {
       this.sendButton(m.chat, `*terdeteksi link Instagram yang dikirim*\nbisa langsung Download dengan pencet tombol dibawah 👇`, wm, 'Download', `.ig ${m.text}`, m)
    }
  
    if (m.isGroup) {
    if (m.fromMe) return
    if (m.mentionedJid.includes(this.user.jid) && m.isGroup) {
    	await this.send2Button(m.chat, m.msg.contextInfo.expiration == 604800 ? '\n\nketik *.ephe* untuk matiin pesan sementaranya, biar tombolnya bisa dipake' : 'uhm.. iya ada apa?', wm, `${isBanned ? 'UNBAN' : 'MENU'}`, `${isBanned ? '.unban' : '.?'}`, `${!m.isGroup ? 'DONASI' : isBanned ? 'UNBAN' : 'BAN'}`, `${!m.isGroup ? '.donasi' : isBanned ? '.unban' : '.ban'}`, m)
    }
}
    
    if (/^bot$/i.test(m.text)) {
        await this.sendButton(m.chat, !(m.isGroup || m.isPrems) && group ? 'hanya grup' : isBanned ? 'chat banned' : banned ? 'user banned' : 'aktif', wm, !(m.isGroup || m.isPrems) && group ? 'donasi' : isBanned ? 'unban' : banned ? 'minta owner kalo mau di unban' : 'donasi', !(m.isGroup || m.isPrems) && group ? '.donasi' : isBanned ? '.unban' : banned ? '.owner' : '.donasi', m)
    }


    // backup db
    if (setting.backup) {
        if (new Date() * 1 - setting.backupDB > 1000 * 60 * 60) {
            let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
            await global.db.write()
            this.reply(global.owner[0] + '@s.whatsapp.net', `Database: ${date}`, null)
            let data = fs.readFileSync('./database.json')
            await this.sendMessage(owner[0] + '@s.whatsapp.net', { document: data, mimetype: 'application/json', fileName: 'database.json' }, { quoted: null })
            setting.backupDB = new Date() * 1
        }
    }

    return !0
}

module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari"
    if (time >= 4) {
        res = "Selamat pagi"
    }
    if (time > 10) {
        res = "Selamat siang"
    }
    if (time >= 15) {
        res = "Selamat sore"
    }
    if (time >= 18) {
        res = "Selamat malam"
    }
    return res
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
