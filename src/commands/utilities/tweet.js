const tokensss = require('../../utils/twitter.json');
const twitter = require('twitter-lite');


module.exports = {
    name: 'tweet',
    description: 'Display twitter account',
    category: '🕹   **Misc :**',
    usage: "twitter <username> ",
    aliases: ["twt"],
    ownerOnly: true,
    run: async(client, message, args) => {

        let Text = args.join(" ");

        if (!Text) return message.channel.send(`Please Give Something!`);

        let Replaced = Text.replace(/ +/g, " ");

        const tokens = {
            consumer_key: tokensss.consumer_key,
            consumer_secret: tokensss.consumer_secret,
            access_token_key: tokensss.access_token,
            access_token_secret: tokensss.access_token_secret
          };

        const tweet = new twitter(tokens);

        tweet.post('statuses/update', { status: Replaced }).then(result => {
            message.channel.send('You successfully tweeted this : "' + result.text + '"');
          }).catch(console.error);

    }
}