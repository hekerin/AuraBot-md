# AuraBot-md

<a href = "https://github.com/RFIunknown/AuraBot-md"><img src = "https://cardivo.vercel.app/api?name=AuraBot-md&description=AuraBot,%20Bot%20WhatsApp%20multi%20device.%20Created%20by%20Nurutomo,%20BochilGaming,%20and%20RFIunknown.&image=http://telegra.ph/file/29f2d451412ae151a2dfb.jpg?cb=20200606024545&usqp=CAU&usqp=CAU&backgroundColor=%23ecf0f1&github=RFIunknown&pattern=topography&colorPattern=%23eaeaea"/><a>

<a href="https://visitor-badge.glitch.me/badge?page_id=RFIunknown/AuraBot-md"><img title="Visitor" src="https://visitor-badge.glitch.me/badge?page_id=RFIunknown/AuraBot-md"></a>
<a href="https://github.com/RFIunknown/AuraBot-md/network/members"><img title="Forks" src="https://img.shields.io/github/forks/RFIunknown/AuraBot-md?label=Forks&color=blue&style=flat-square"></a>
<a href="https://github.com/RFIunknown/AuraBot-md/watchers"><img title="Watchers" src="https://img.shields.io/github/watchers/RFIunknown/AuraBot-md?label=Watchers&color=green&style=flat-square"></a>
<a href="https://github.com/RFIunknown/AuraBot-md/stargazers"><img title="Stars" src="https://img.shields.io/github/stars/RFIunknown/AuraBot-md?label=Stars&color=yellow&style=flat-square"></a>
<a href="https://github.com/RFIunknown/AuraBot-md/graphs/contributors"><img title="Contributors" src="https://img.shields.io/github/contributors/RFIunknown/AuraBot-md?label=Contributors&color=blue&style=flat-square"></a>
<a href="https://github.com/RFIunknown/AuraBot-md/issues"><img title="Issues" src="https://img.shields.io/github/issues/RFIunknown/AuraBot-md?label=Issues&color=success&style=flat-square"></a>
<a href="https://github.com/RFIunknown/AuraBot-md/issues?q=is%3Aissue+is%3Aclosed"><img title="Issues" src="https://img.shields.io/github/issues-closed/RFIunknown/AuraBot-md?label=Issues&color=red&style=flat-square"></a>
<a href="https://github.com/RFIunknown/AuraBot-md/pulls"><img title="Pull Request" src="https://img.shields.io/github/issues-pr/RFIunknown/AuraBot-md?label=PullRequest&color=success&style=flat-square"></a>
<a href="https://github.com/RFIunknown/AuraBot-md/pulls?q=is%3Apr+is%3Aclosed"><img title="Pull Request" src="https://img.shields.io/github/issues-pr-closed/RFIunknown/AuraBot-md?label=PullRequest&color=red&style=flat-square"></a>


## Grup Bot
[![Grup WhatsApp](https://img.shields.io/badge/WhatsApp-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://chat.whatsapp.com/BKUUviabCwFIr9pIRe9iuE)

 [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy?template=https://github.com/RFIunknown/AuraBot-md)
 
 [![Run on Repl.it](https://repl.it/badge/github/RFIunknown/AuraBot)](https://repl.it/github/RFIunknown/AuraBot-md)

## UNTUK PENGGUNA WINDOWS/VPS/RDP

* Unduh & Instal Git [`Klik Disini`](https://git-scm.com/downloads)
* Unduh & Instal NodeJS [`Klik Disini`](https://nodejs.org/en/download)
* Unduh & Instal FFmpeg [`Klik Disini`](https://ffmpeg.org/download.html) (**Jangan Lupa Tambahkan FFmpeg ke variabel lingkungan PATH**)
* Unduh & Instal ImageMagick [`Klik Disini`](https://imagemagick.org/script/download.php)

```bash
git clone https://github.com/RFIunknown/AuraBot-md.git
cd AuraBot-md
npm i
node .
```

---------

## UNTUK PENGGUNA TERMUX

* Download Termux [`Klik Disini`](https://github.com/termux/termux-app/releases/download/v0.118.0/termux-app_v0.118.0+github-debug_universal.apk)

```
$ pkg update && upgrade -y
$ apt update && upgrade -y
$ pkg install ffmpeg
$ pkg install nodejs-lts
$ pkg install git
$ git clone https://github.com/RFIunknown/AuraBot-md.git
$ cd AuraBot-md
$ npm i
$ node .
```
---------
## UNTUK PENGGUNA HEROKU

### Instal Buildpack
* heroku/nodejs
* https://github.com/jonathanong/heroku-buildpack-ffmpeg-latest.git
* https://github.com/mcollina/heroku-buildpack-imagemagick.git

---------
## CARA SETTINGS

Untuk menambahkan atau mengedit owner ada di `settings/owner.json`
Cantumkan sumber sc wajib!!

---------
## Arguments `node . [--options] [<session name>]` 

### `--session <nama file>`

menggunakan session dari nama file yang berbeda, default `session.data.json`

contoh nama file `family.json` maka penggunaannya `node . --session 'family'`

### `--prefix <prefix>`

* `prefixes` dipisahkan oleh masing-masing karakter
Setel awalan

### `--server`

Digunakan untuk [heroku](https://heroku.com/) atau pindai melalui situs web

### `--db <url mongodb kamu>`

Buka file package.json dan isikan url mongodb kamu di bagian `mongo: --db url mongodb`!

### `--db <json-server-url>`

menggunakan db eksternal alih-alih db lokal, **disarankan** menggunakan mongodb

contoh server dengan mongodb `mongodb+srv://<username>:<password>@name-of-your-db.thhce.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

contoh server dengan repl `https://json-server.nurutomo.repl.co/`

kode: `https://repl.it/@Nurutomo/json-server`

`node . --db 'https://json-server.nurutomo.repl.co/'`

server harus memiliki spesifikasi seperti ini

#### GET

```http
GET /
Accept: application/json
```

#### POST

```http
POST /
Content-Type: application/json
{
 data: {}
}
```

### `--big-qr`

Jika qr unicode kecil tidak mendukung

### `--img`

Aktifkan pemeriksa gambar melalui terminal

### `--test`

**Development** Testing Mode

### `--trace`

```js
conn.logger.level = 'trace'
```

### `--debug`

```js
conn.logger.level = 'debug'
```


##### Special Thanks to
[![Nurutomo](https://github.com/Nurutomo.png?size=100)](https://github.com/Nurutomo)
[![BochilGaming](https://github.com/BochilGaming.png?size=100)](https://github.com/BochilGaming)
