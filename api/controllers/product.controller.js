const Product = require("../models/product.model");
const searchHelper = require("../../helper/search");

// GET /api/product
// GET /api/product?sortKey=key&&sortValue=value
// GET /api/product?keyword=word
module.exports.allProduct = async (req, res) => {
  try {
    let find = {
      status: 1,
    };

    //Sort
    let sort = {};

    if (req.query.sortKey && req.query.sortValue) {
      sort[req.query.sortKey] = req.query.sortValue;
    }

    // Search
    let objSearch = searchHelper(req.query);

    if (objSearch.regex) {
      find.name = objSearch.regex;
    }

    const product = await Product.find(find).sort(sort);
    res.json(product);
  } catch (error) {
    res.json({
      code: 400,
      message: "Lỗi!",
    });
  }
};

// GET /api/product/detailProduct/:id
module.exports.detailProduct = async (req, res) => {
  try {
    let find = {
      status: 1,
      _id: req.params.id,
    };

    const product = await Product.find(find);
    res.json(product);
  } catch (error) {
    res.json({
      code: 400,
      message: "Lỗi!",
    });
  }
};

// GET /api/product/:id
module.exports.product = async (req, res) => {
  try {
    // console.log(req.params);

    let find = {
      status: 1,
      cateID: req.params.id,
    };

    const product = await Product.find(find);
    res.json(product);
  } catch (error) {
    res.json({
      code: 400,
      message: "Lỗi!",
    });
  }
};

// POST /api/product/create
module.exports.create = async (req, res) => {
  try {
    const product = new Product(req.body);
    const data = await product.save();

    res.json({
      code: 200,
      message: "Tạo thành công!",
      data: data,
    });
  } catch (error) {
    res.json({
      code: 400,
      message: "Lỗi!",
    });
  }
};
