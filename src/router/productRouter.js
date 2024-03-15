const express = require('express');
const router = express.Router();
const productController = require("../controller/productController.js");

router.get("/product", productController.getAllproduct);

module.exports = router;
