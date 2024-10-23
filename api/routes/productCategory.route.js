const express = require("express");
const router = express.Router();
const controller = require("../controllers/productCategory.controller");

router.get("/", controller.productCategory);
router.post("/create", controller.create);

module.exports = router;