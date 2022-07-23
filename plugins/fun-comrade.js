let handler = async (m, { conn }) => {
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
 let pp = './src/avatar_contact.png'   
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/comrade', {
        avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), 'comrade.png', ' Sekarang gambar Anda terinfeksi USSR', m)
}

handler.help = ['comrade']
handler.tags = ['fun']

handler.command = /^(comrade)$/i

module.exports = handler
