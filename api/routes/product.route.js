const express = require("express");
const router = express.Router();
const controller = require("../controllers/product.controller");

router.get("/", controller.allProduct);
router.get("/detailProduct/:id", controller.detailProduct);
router.get("/:id", controller.product);
router.post("/create", controller.create);

module.exports = router;