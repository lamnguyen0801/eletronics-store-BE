const ProductCategory = require("../models/productCategory.model");

// GET /api/productCategory
module.exports.productCategory = async (req, res) => {
    try {
        let find = {
            status: 1
        }
    
        const productCategory = await ProductCategory.find(find);
        res.json(productCategory);

    } catch(error) {
        res.json({
            code: 400,
            message: "Lỗi!"
        });
    }
}

// POST /api/productCategory/create
module.exports.create = async (req, res) => {
    try {
        const product = new ProductCategory(req.body);
        const data = await product.save();

        res.json({
            code: 200,
            message: "Tạo thành công!",
            data: data
        });
    } catch (error) {
        res.json({
            code: 400,
            message: "Lỗi!"
        });
    }
}