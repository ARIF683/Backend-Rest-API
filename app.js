const express = require("express");
const app = express();
const router = require("./routes/products");
const connectDB = require("./db/connect");
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
    res.send("Hii I am live")
})

app.use("/api/product", router);

const start = async () => {
    await connectDB();
    try {
        app.listen(PORT, () => {
            console.log("Connected Successfully");
        })
    } catch (error){
        console.log(error)
    }
}
start()