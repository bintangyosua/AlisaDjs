const mongo = require('../database/connect.js');
const ProfileSchema = require('../database/models/profile.js');

module.exports.run = (client) => {
    client.on('message', message => {
        const { member } = message

        addXP(member.id, 23)
    })
}

const addXP = async (userId, xpToAdd) => {
    await mongo().then(async mongoose => {
        try {
            const result = await ProfileSchema.findOneAndUpdate({
                userId
            }, {
                userId,
                $inc: {
                    xp: xpToAdd
                }
            }, {
                upsert: true,
                new: true
            })

            console.log('RESULT', result)
        } finally {
            mongoose.connection.close()
        }
    })
}