const getAllProduct = async (req,res) => {
    res.status(200).json({msg: "Hii I m getAllProduct"})
}

const getAllProductTesting = async (req,res) => {
    res.status(200).json({msg: "Hii i am getAllProductTesting"})
}

module.exports = {getAllProduct, getAllProductTesting}