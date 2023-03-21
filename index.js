require("dotenv").config();
const express = require("express");
const app = express();
const router = require("./routes/products");
const rateLimit = require("express-rate-limit");
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 5000

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 Mins
    max: 100,
})
app.use(limiter)
app.set('trust proxy', 1)

app.get("/", (req, res) => {
    res.send("Hii I am live")
})

app.use("/api/product", router);

const start = async () => {
    await connectDB(process.env.MONGODB_URL);
    try {
        app.listen(PORT, () => {
            console.log("Connected Successfully");
        })
    } catch (error) {
        console.log(error)
    }
}
start()