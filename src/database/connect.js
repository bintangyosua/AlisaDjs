const mongoose = require('mongoose');

async function connect(){
    console.log("Connecting to database")
    await mongoose.connect("mongodb+srv://luxyz:lelouch345@cluster0.3ibhz.mongodb.net/Cluster0?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })

    console.log("Connected to database")
}

module.exports = connect()