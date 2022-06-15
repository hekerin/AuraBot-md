let fetch = require('node-fetch')
const client = require('nekos.life');

let handler = async(m, { conn, args, usedPrefix }) => {
    if (args.length == 0) return conn.reply(m.chat, `Untuk menggunakan ${usedPrefix}random\nSilahkan ketik: ${usedPrefix}random [query]\nContoh: ${usedPrefix}random madara\n\nquery yang tersedia:\nyotshuma\nshinomia\nyumeko\ntejina\nchiho\nboruto\nkaori\nshizuka\nkaga\nkotori\nmikasa\nakiyama\ngremory\nisuzu\nshina\nkagura\nshinka\neba\nelaina\nyuri\nerza\nhinata\nminato\nnaruto\nsagiri\nnezuko\nrize\nanna\ndeirada\nyuki\nasuna\nayuzawa\nchitoge\nemilia\nhestia\ninori\nitachi\nmadara\nsakura\nsasuke\ntsunade\nonepiece\nkeneki\nmegumin\ntoukachan\nakira\nitori\nkurumi\nmiku`, m)
   if (args[0] == 'hentai'){
 await m.reply('Searching Bokep...')
  let res = await fetch(`https://api.waifu.pics/nsfw/waifu`)
   if (!res.ok) throw await res.text()
    let json = await res.json()
    if (!json.url) throw 'Error!'
//  conn.reply(m.chat, res)
   conn.sendFile(m.chat, json.url, '', 'Nih Wibu Bokepnya 🗿', m)    
      
   } if (args[0] == 'yotshuma'|| args[0] == 'shinomia'|| args[0] == 'yumeko'|| args[0] == 'tejina'|| args[0] == 'chiho'|| args[0] == 'boruto'|| args[0] == 'kaori'|| args[0] == 'shizuka'|| args[0] == 'kaga'|| args[0] == 'kotori'|| args[0] == 'mikasa'|| args[0] == 'akiyama'|| args[0] == 'gremory'|| args[0] == 'isuzu'|| args[0] == 'shina'|| args[0] == 'kagura'|| args[0] == 'shinka'|| args[0] == 'eba'|| args[0] == 'elaina'|| args[0] == 'yuri'|| args[0] == 'erza'|| args[0] == 'hinata'|| args[0] == 'minato'|| args[0] == 'naruto'|| args[0] == 'sagiri'|| args[0] == 'nezuko'|| args[0] == 'rize'|| args[0] == 'anna'|| args[0] == 'deirada'|| args[0] == 'yuki'|| args[0] == 'asuna'|| args[0] == 'ayuzawa'|| args[0] == 'chitoge'|| args[0] == 'emilia'|| args[0] == 'hestia'|| args[0] == 'inori'|| args[0] == 'itachi'|| args[0] == 'madara'|| args[0] == 'sakura'|| args[0] == 'sasuke'|| args[0] == 'tsunade'|| args[0] == 'onepiece'|| args[0] == 'keneki'|| args[0] == 'megumin'|| args[0] == 'toukachan'|| args[0] == 'akira'|| args[0] == 'itori'|| args[0] == 'kurumi'|| args[0] == 'miku') {
  await m.reply('Searching...')
  let res = await (await fetch(`https://api-invibot.herokuapp.com/api/wallpaper/${args[0]}?apikey=APIKEY`)).buffer()
  
//  conn.reply(m.chat, res)
   conn.sendFile(m.chat, res, '', 'Nih Wibu', m)    
} else {
        conn.reply(m.chat, `Maaf query tidak tersedia. Silahkan ketik ${usedPrefix}random untuk melihat list query`, m)
        }


            
}

handler.help = ['random <query>']
handler.tags = ['anime']
handler.command = /^(random|anime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
