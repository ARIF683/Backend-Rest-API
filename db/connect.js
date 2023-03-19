const mongoose = require("mongoose");


const connectDB = async (uri) => {
    console.log("Database connected")
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

module.exports = connectDB