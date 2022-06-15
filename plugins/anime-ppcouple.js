let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
  let res = await fetch(global.API('https://rest-beni.herokuapp.com/api/randomimage/couple'))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json) throw 'Lagi error'
  await conn.sendFile(m.chat, json.male, '', 'Nih PP Yg Cowo', m)
  await conn.sendFile(m.chat, json.female, '', 'Dan Ni PP YgCewe', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['anime']
handler.command = /^(pp(cp|couple))$/i
handler.limit = true

module.exports = handler