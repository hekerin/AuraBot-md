let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  conn.sendFile(m.chat, global.API('https://rest-beni.herokuapp.com/api/randomimage/cosplay'), 'cosplay.jpg', '_*Nih Wibu*_', m)
}
handler.help = ['cosplay']
handler.tags = ['anime']

handler.command = /^(cosplay)$/i

module.exports = handler
