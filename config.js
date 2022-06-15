let fs = require('fs')
global.owner = JSON.parse(fs.readFileSync('./src/owner.json')) // Put your number to folder /src/owner.json
global.mods = JSON.parse(fs.readFileSync('./src/moderator.json')) // Want some help?

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  bg: 'http://bochil.ddns.net',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://api.chipa.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  neoxr: 'https://neoxr-api.herokuapp.com',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  lol: 'https://api.lolhuman.xyz',
  adicug: 'https://api.adiofficial.xyz',
  xcod: 'https://api-xcoders.xyz',
  dhamz: 'https://api.dhamzxploit.my.id',
  beni: 'https://rest-beni.herokuapp.com',
  beta: 'https://betabotz-api.herokuapp.com'

}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://api.xteam.xyz': '34475b5f1c86e1b0',
  'https://melcanz.com': 'mvEUFB8a',
  'https://api.lolhuman.xyz': 'apikeylu',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://api.chipa.xyz': 'pais',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://api.adiofficial.xyz': 'apikey lu',
  'https://api-xcoders.xyz': 'gqxXn7vJCi',
  'https://betabotz-api.herokuapp.com': 'BetaBotz'
}
//Digiflazz
global.user = 'weguwaWmpJ0D'
global.key = 'dev-5f3bb400-1693-11ec-b22f-afd54f76077a'
//Global Wait And Error
global.wait = '「 ⏱️ 」Wait bossku...'
global.eror = '「❗」Server ERROR!'

//========Url Template Buttons=========//
global.dtu = "🄸🄽🅂🅃🄰🄶🅁🄰🄼"
global.urlnya = "https://www.instagram.com/rhosad_"

//============= callButtons =============//
global.dtc = '🅿🅷🅾🅽🅴'
global.phn = '+6282229992371'

//============= Games ================//
global.benar = '_*Benar✅*_'
global.salah = '_*Salah❌*_'
global.dikit = "dikit lagi, semangat ya :')"
global.wm = 'Rho_Bot'
global.packname = 'Rho_Bot'
global.author = 'IG @rhosad_'
global.pp = 'https://telegra.ph/file/a04269b1f8d8de7398e66.jpg'
global.image = 'https://telegra.ph/file/cbcc745f6dcdcc2c15f4c.jpg'

global.multiplier = 100 // The higher, The harder levelup

//=========== Requirements ==========//

global.baileys = require('@adiwajshing/baileys')
global.fs = require('fs')
global.data = JSON.parse(fs.readFileSync('./data.json'))
global.fetch = require('node-fetch')
global.bochil = require('@bochilteam/scraper')

let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
