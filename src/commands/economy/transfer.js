const eco = require("discord-economy");
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'transfer',
    category: ':money_with_wings:   Economy :',
    run: async (client, message, args) => {
        var user = message.mentions.users.first()
    var amount = args[1]
 
    if (!user) return message.reply('Reply the user you want to send money to!')
    if (!amount) return message.reply('Specify the amount you want to pay!')
 
    var output = await eco.FetchBalance(message.author.id)
    if (output.balance < amount) return message.reply('You have fewer credits than the amount you want to transfer!')
    
    var transfer = await eco.Transfer(message.author.id, user.id, amount)
    const embed = new MessageEmbed()
        .setAuthor("Transferred", "https://lh3.googleusercontent.com/proxy/q6gVu6MOwoPAmEsrvWpHXQmBlgKSVEIH59Gh18kaxCm7b7Pnxsa5CsIMQjRtjkrVmq0Xqc13Jzv8x6gy5yWusCe1OW2kZjsu-Thy__8sbfz-q41ksFuYDCk2cm7kHfA")
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`Transfering credits successfully done!\nBalance from ${message.author.tag}: ${transfer.FromUser}\nBalance from ${user.tag}: ${transfer.ToUser}`)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.id}|usage: transfer <mention> <amount>`, message.author.displayAvatarURL())
    message.channel.send(embed)
    }
}