const mongoose = require('mongoose');

async function connect(){
    console.log("Connecting to database")
    await mongoose.connect("", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log("Connected to database")
}

module.exports = connect()
