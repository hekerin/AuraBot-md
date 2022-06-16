let fetch = require('node-fetch')
let handler = async (m, { conn, command, args }) => {
  if (args[0] === 'Nekopoi.care') {
      conn.reply(m.chat, '*Tobat woy*', m)
      return
  }
if (args[0] === 'nekopoi.care') {
      conn.reply(m.chat, '*Tobat woy*', m)
      return
     
}

  if (args[0] === 'Nhentai.net') {
      conn.reply(m.chat, '*Tobat woy*', m)
      return

  }
  if (args[0] === 'nhentai.net') {
      conn.reply(m.chat, '*Tobat woy*', m)
      return
  }
  let full = /f$/i.test(command)
  if (!args[0]) return conn.reply(m.chat, 'Tidak ada url', m)
  let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0]
  let ss = await (await fetch('https://betabotz-api.herokuapp.com/api/other/ssweb-pc?apikey=BetaBotz&text=' + encodeURIComponent(url))).buffer()
  conn.sendFile(m.chat, ss, 'screenshot.png', url, m)
}
handler.help = ['ss', 'ssweb'].map(v => v + ' <url>')
handler.tags = ['tools']
handler.command = /^ss(web)?f?$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
