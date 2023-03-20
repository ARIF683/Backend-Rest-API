const ProductModels = require("../models/products");


const getAllProduct = async (req, res) => {

    const { company, name, sort, select  } = req.query;
    const queryObject = {};

    if (company) {
        queryObject.company = company;
    }

    if (name) {
        queryObject.name = { $regex: name, $options: "i" }
    }

    let  apiData = ProductModels.find(queryObject);


    if (sort) {
        let fixSort = sort.split(",").join(" ");
        apiData = apiData.sort(fixSort);
    }
    if (select) {
        let fixSelect = select.split(",").join(" ");
        apiData = apiData.select(fixSelect);
    }
    const Products = await apiData;
    res.status(200).json({ Products })
}

const getAllProductTesting = async (req, res) => {
    const ProductsTesting = await ProductModels.find(req.query)
    res.status(200).json({ ProductsTesting })
}

module.exports = { getAllProduct, getAllProductTesting }