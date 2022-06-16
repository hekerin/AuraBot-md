let handler = async (m, { conn }) => {
     conn.reply(m.chat, `Rahasia ya pak!`, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


