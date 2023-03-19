require("dotenv").config();


const connectDB = require("./db/connect");
const productJson = require("./product.json");
const Product = require("./models/products");

const productDB = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(productJson);
        console.log("Success");
    } catch (error){
        console.log(error)
    }
}

productDB();