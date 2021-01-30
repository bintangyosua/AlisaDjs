const { tictactoe } = require('reconlx');

module.exports = {
    name: 'tictactoe',
    description: 'Play TicTacToe with other member.',
    aliases: ['ttc'],
    usage: 'tictactoe <@mention>',
    category: `🎮   **Fun :**`,
    run: async ( client, message, args ) => {
        const member = message.mentions.members.first() 
        if(!member)  return  message.channel.send('Please specify a member')

        new tictactoe({
            player_two: member, 
            message: message
        });
    }
}