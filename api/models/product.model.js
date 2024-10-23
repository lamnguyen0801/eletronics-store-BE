const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
    {
        name: String,
        seoTitle: String,
        status: {
            type: Number,
            default: 1 
        },
        image: String,
        listImage: {
            type: [String],
        },
        price: Number,
        promotionPrice: Number,
        quantity: Number,
        warranty: Number,
        description: String,
        detail: String,
        cateID: String,
        createdBy: String,
        updateBy: String,
    },
    {
        timestamps: true
    }
);

const Product = mongoose.model('Product', productSchema, 'product');

module.exports = Product;