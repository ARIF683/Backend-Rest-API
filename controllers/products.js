const ProductModels = require("../models/products");


const getAllProduct = async (req,res) => {

    const { company, name } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = company;
    }
    
    if (name) {
        queryObject.name = {$regex : name, $options: "i"}
    }

    const Products = await ProductModels.find(queryObject);
    res.status(200).json({ Products })
}

const getAllProductTesting = async (req,res) => {
    const ProductsTesting = await ProductModels.find(req.query)
    res.status(200).json({ ProductsTesting})
}

module.exports = {getAllProduct, getAllProductTesting}