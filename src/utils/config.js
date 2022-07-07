const config = {
    ownerID: ['454629351607107595'],
    token: '',
    botClient: '',
    // replace BOTID with the bot's ID
    inviteLink: 'https://discord.com/oauth2/authorize?client_id=780018362138886144&scope=bot&permissions=2147483647',
    // For looking up Twitch, Fortnite, Steam accounts
    api_keys: {
      youtube: '',
      soundcloud: '',
      google: '',
      lol: '',
      brawlstars: '',
      anilist: '',
      clashroyal: '',
    },
    twitter: {
      consumer_key: '',
      consumer_secret: '',
      acces_token: '',
      acces_token_secret: ''
    },
    instagram: {
      username: '',
      password: ''
    },
    // add plugins/commands here if you don't want them loaded in the bot.
    disabledCommands: [],
    disabledPlugins: [],
    websiteURL: '',
    // support server
    SupportServer: {
      // Link to your support server
      link: 'https://discord.gg/uXFZScA',
      // Your support's server ID
      GuildID: '',
      // This for using the suggestion command on your server
      ModRole: '',
      // What channel to post the suggestions
      SuggestionChannel: '',
      // Where the bot will send Guild join/leave messages to
      GuildChannel: '',
    },
    // THESE SETTINGS ARE FOR DMS ONLY
	  defaultSettings: {
		  // default settings
		  prefix: '$',
		  Language: 'en-US',
		  plugins: ['Fun', 'Image', 'Misc', 'NSFW', 'Recording', 'Searcher'],
	  },
    // URL to mongodb
    MongoDBURL: '',
    // This will spam your console if you enable this but will help with bug fixing
	  debug: false,
};

module.exports = config;
