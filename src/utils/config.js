const config = {
    ownerID: ['454629351607107595'],
    token: 'NzgwMDE4MzYyMTM4ODg2MTQ0.X7o-tQ.yZU_o4GNIzftWBv5w7pYY-YBvd4',
    botClient: '78001836213888614',
    // replace BOTID with the bot's ID
    inviteLink: 'https://discord.com/oauth2/authorize?client_id=780018362138886144&scope=bot&permissions=2147483647',
    // For looking up Twitch, Fortnite, Steam accounts
    api_keys: {
      youtube: 'AIzaSyCif62ywPMNSox0gAkPCiwTqLtfPObf9QM',
      soundcloud: '294324164',
      google: 'AIzaSyADN8dgaE3hj6aGnBgqcwMBKEIm1YKRYoc',
      lol: 'RGAPI-41ea0c9d-fcf2-4978-9abd-91aac14f8f44',
      brawlstars: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjA2N2Q5Yjk1LWVlZjctNDM2OC1iMzUyLWQ0YzMzZDg4NDEyNSIsImlhdCI6MTYxMTA0NTg2NSwic3ViIjoiZGV2ZWxvcGVyLzdjZTJjZDM1LThhNDMtYjUwZS04Y2QyLWQwN2FkM2E4OWI0MSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMzYuNzMuMzMuNDkiLCIwLjAuMC4wIl0sInR5cGUiOiJjbGllbnQifV19.pVcIKn-J9LjwzDnU6kAvIk3TLiMvfzPlgy9JNhmY1r1zBHRAeoNC-uRhowYPjciw4kb39t7Wafoyea_CnHlS2Q',
      anilist: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjRhNWFkYTMwOWEyMTU2MmFmMThmZGEyOTk4MWI5NTllMWJmY2YwYjVmMmNjODNhMjg1ODZjYWNhNTc2ZDVlNmQ3ZGY2YjdlMzE1NGE4M2Y4In0.eyJhdWQiOiI0NjI3IiwianRpIjoiNGE1YWRhMzA5YTIxNTYyYWYxOGZkYTI5OTgxYjk1OWUxYmZjZjBiNWYyY2M4M2EyODU4NmNhY2E1NzZkNWU2ZDdkZjZiN2UzMTU0YTgzZjgiLCJpYXQiOjE2MTE2NTczODAsIm5iZiI6MTYxMTY1NzM4MCwiZXhwIjoxNjQzMTkzMzgwLCJzdWIiOiI5NTU0MjciLCJzY29wZXMiOltdfQ.pT2KYYcRlFhQRkixLjAr57Hrcsr-fO2W3qZf8t7BKFR53KG3dEry-Os7W2sRKIktrM9cF1ajgj_WZRKu-czYxos8kBciLk-imYPKAjgHiwPY3ZEjND6C0u47H0PcW4vB8L2kJmAkBbZoEDPm7-durd5uheyRsGtV6NNyea8_dnkQlqrk4FsavWm9Lck1KMeeB3L6ftpTHTFOdoCaAWIHwyGdWiRxBG13Ok1bYBCtmSUd-RGXGa5Jct2mvGaT0COi18sxUSw6BEwsiUJ7zsKR3HYO7iZNgWYJbD38Ju103Ata3Bsv49I8mhd2r_XdGrOSKz3x61VX_Ul4neg8_k745fcag-lO0AhJc61chUPNwHosaUtHGPJ-0ITkVSdA2TN9kq1ovNlo_xyzHRfYQBdqsW47QaILM1cnReNRcrO-x1yw3dA42W6ZYtpSjWVQs06O5GYa-73am4RVLxrHu0Lh-CldMe3WRA9vssCG5IAyrbHQNrojc_inGZGzU6KPYZry3g8mJvRoa5EXowrjMrhGqMSQK0OvNiI_Lb_aVlM4LXRR7E5HidM5UzxXKqUL0YClLbnKtmMJR5_21iG_r4UbKrfsgOZ8iDag0rcIKvJ-Ru_NHkGh5rSo3S-Ejy6MlaG-dPDd8p9cgFSYwUDK3vg9QMZToH675WAxA0aDuyLyeiM',
      clashroyal: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjVkN2FlOGZmLWVmZGYtNDcxMy1iZGNkLTFjNWM3MzkyYThmMSIsImlhdCI6MTYxMTY3MzcxNCwic3ViIjoiZGV2ZWxvcGVyLzdiZmYzN2NiLTVmYmMtOWRlOS1lNWIzLThkOTJhYTkyM2U3ZCIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIzNi43My4zNS41IiwiMC4wLjAuMCJdLCJ0eXBlIjoiY2xpZW50In1dfQ.BF6HMKx4MO0qzXnsmQrvwda1AC0oM89HPY7VPk9vGyys-Z7vdsfTfj_mwBsyHOmnc9ImWySBlWyx3YV8FNgoqQ',
    },
    twitter: {
      consumer_key: 'GvzCOJyA51jj48dmGfw8SxDqT',
      consumer_secret: 'zVbbehwEUOxJPZMaP00RkX5cSZAqeDgIYUE3fWt7WarHycBw1r',
      acces_token: '1049514569960284160-mqiWYtN5gnOGQwppvbakCeG2kda5Fk',
      acces_token_secret: 'Q9igjaYHW740p0VdK1sTW00DezEPXhepdKjVRspcUiB6H'
    },
    instagram: {
      username: 'sassyuiki',
      password: 'lelouch345'
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
      GuildID: '684041004667633664',
      // This for using the suggestion command on your server
      ModRole: '690120355318464552',
      // What channel to post the suggestions
      SuggestionChannel: '794091942103351396',
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
    MongoDBURL: 'mongodb+srv://luxyz:lelouch345@cluster0.3ibhz.mongodb.net/Cluster0?retryWrites=true&w=majority',
    // This will spam your console if you enable this but will help with bug fixing
	  debug: false,
};

module.exports = config;