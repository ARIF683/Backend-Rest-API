const ProductModels = require("../models/products");


const getAllProduct = async (req,res) => {
    const Products = await ProductModels.find(req.query)
    res.status(200).json({ Products })
}

const getAllProductTesting = async (req,res) => {
    const ProductsTesting = await ProductModels.find(req.query)
    res.status(200).json({ ProductsTesting})
}

module.exports = {getAllProduct, getAllProductTesting}