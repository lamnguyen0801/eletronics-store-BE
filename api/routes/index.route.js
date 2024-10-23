const productCategoryRoute = require("./productCategory.route");
const product = require("../routes/product.route");

module.exports = (app) => {
    app.use("/api/productCategory", productCategoryRoute);
    app.use("/api/product", product);
}