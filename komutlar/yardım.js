const Discord = require('discord.js')
const client = new Discord.Client()
const db = require('quick.db')
exports.run = (client, message, args, member) => {
const yardım = new Discord.MessageEmbed()
  .setAuthor(`Asreaper Yardım Menüsü`, client.user.avatarURL())
  .setColor("0x36393F")
  .setThumbnail(client.user.avatarURL())
  .setDescription(`• Hey! <@${message.author.id}> beni kullandığın için teşekkür ederim!\n •  Prefixim: **!**\n • Dilim: **TR** :flag_tr:\n • Üyelik durumu: ${db.has(`üyelikk_${message.author.id}`, "üyelik") ? `**Gold üye!**` : `**Normal üye!**`}`)
  .addField(" • Kategoriler:", `> • [!kullanıcı](Link): **Kullanıcı yardım menüsünü gösterir.**\n > • [!moderasyon](Link): **Moderasyon yardım menüsünü gösterir.**\n > • [!kayıtsistemi](Link): ** Kayıt sistemi yardım menüsünü gösterir.**\n > • [!korumasistemi](Link): ** Koruma sistemi yardım menüsünü gösterir.**\n > • [!logosistemi](Link): ** Logo sistemi yardım menüsünü gösterir.**\n > • [!çekilişsistemi](Link): ** Çekiliş sistemi yardım menüsünü gösterir.**`)
  .addField(" • Güncelleme Notları:", "**Güncelleme v0.4:** Çekiliş sistemi eklendi!")

  .addField(" • Linkler:", "• [Davet Et](Link) • [Destek Sunucusu](Link) • [Web Site](Link) •")
  .setImage("")
.setFooter("Asreaper", message.author.avatarURL())
.setTimestamp()
  message.channel.send(yardım)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["y", "help", "h"],
    permLevel: 0
}

exports.help = {
    name: "yardım",
    description: "westra",
    usage: "westra"
}