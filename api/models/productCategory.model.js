const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema(
    {
        name: String,
        seoTitle: String,
        status: {
            type: Number,
            default: 1 
        },
        createdBy: String,
        updateBy: String,
    },
    {
        timestamps: true
    }
);

const ProductCategory = mongoose.model('ProductCategory', productCategorySchema, 'product-category');

module.exports = ProductCategory;