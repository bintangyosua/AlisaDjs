const eco = require("discord-economy");

module.exports = {
    name: 'delete',
    category: ':money_with_wings:   Economy :',
    run: async (client, message, args) => {
        var user = message.mentions.users.first()
        if (!user) return message.reply('Please specify a user I have to delete in my database!')
     
        if (!message.guild.me.hasPermission(`ADMINISTRATION`)) return message.reply('You need to be admin to execute this command!')
     
        var output = await eco.Delete(user.id)
        if (output.deleted == true) return message.reply('Successfully deleted the user out of the database!')
     
        message.reply('Error: Could not find the user in database.')
     
      
    }
}