
const eco = require("discord-economy");

module.exports = {
    name: 'work',
    category: ':money_with_wings:   Economy :',
    run: async (client, message, args) => { 
    var output = await eco.Work(message.author.id, {
      failurerate: 10,
      money: Math.floor(Math.random() * 500),
      jobs: ['cashier', 'shopkeeper', 'teacher', 'detective', 'author', 'pilot', 'employer', 'gamer', 'youtuber', 'web devaloper', 'virtual assistant', 'interpreter/translator', 'writer', 'photographer', 'editor', 'filmmaker', 'graphic designer', 'traveler', 'fire chief', 'engineer', 'romance novelist', 'cruise ship entertainer', 'Food scientist', 'Art therapist', 'musician', 'magician', 'zookeeper', 'personal trainer', 'fashion designer', 'windmaker', 'concert promoter', 'astronaut', 'video game designer', 'toy creator', 'cruise director', 'professional athlete', 'ethical computer hacker', 'wardrobe stylist', 'personal shopper', 'marine biologist', 'mystery shopper', 'interior designer', 'chocolatier', 'supercar driving instructor', 'driver', 'food critic', 'professional video gamer', 'voice actor']
    })
    //10% chance to fail and earn nothing. You earn between 1-500 coins. And you get one of those 3 random jobs.
    if (output.earned == 0) return message.reply('Awh, you did not do your job well so you earned nothing!')
 
    message.channel.send(`${message.author.username}
You worked as a \` ${output.job} \` and earned :money_with_wings: ${output.earned}
You now own :money_with_wings: ${output.balance}`)
    }
}