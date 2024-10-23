const Product = require("../models/product.model");

// GET /api/product/
module.exports.allProduct = async (req, res) => {
    try {  
        let find = {
            status: 1,
        }
    
        const product = await Product.find(find);
        res.json(product);

    } catch(error) {
        res.json({
            code: 400,
            message: "Lỗi!"
        });
    }
}

// GET /api/product/detailProduct/:id
module.exports.detailProduct = async (req, res) => {
    try {    
        let find = {
            status: 1,
            _id: req.params.id
        }
    
        const product = await Product.find(find);
        res.json(product);

    } catch(error) {
        res.json({
            code: 400,
            message: "Lỗi!"
        });
    }
}

// GET /api/product/:id
module.exports.product = async (req, res) => {
    try {
        // console.log(req.params);
        
        let find = {
            status: 1,
            cateID: req.params.id
        }
    
        const product = await Product.find(find);
        res.json(product);

    } catch(error) {
        res.json({
            code: 400,
            message: "Lỗi!"
        });
    }
}

// POST /api/product/create
module.exports.create = async (req, res) => {
    try {
        const product = new Product(req.body);
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