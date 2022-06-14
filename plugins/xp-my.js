const uploadImage = require('../lib/uploadImage')
let fetch = require('node-fetch')

let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let caption = `
Limit: *${user.limit}*
EXP: *${user.exp}*
Level: *${user.level}*
Role: *${user.role}*
Banned: *${user.banned}*
Joincount: *${user.joincount}*
`.trim()
    let pp = await(await fetch('http://telegra.ph/file/29f2d451412ae151a2dfb.jpg')).buffer()
    try {
      pp = await ( await fetch(await conn.getProfilePicture(who))).buffer()
    } catch (e) {
    } finally {
      await conn.reply(m.chat, caption, m, { contextInfo: {
        externalAdReply: {
          sourceUrl: 'https://youtu.be/-tKVN2mAKRI',
          title: user.name,
          body: 'AuraBot',
          thumbnail: pp
        }
    }})
  }
}
handler.help = ['my [@62XXXX]']
handler.tags = ['xp']
handler.command = /^(my|limit)$/i
module.exports = handler
