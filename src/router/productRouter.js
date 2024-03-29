const express = require('express');
const router = express.Router();
const productController = require("../controller/productController.js");

router.get("/product", productController.getAllproduct);
router.post("/product", productController.createproduct);
router.put("/product/:id", productController.updateProduct);
router.delete("/product/:id", productController.deleteProduct);
router.get("/product/:id", productController.getProductById);

module.exports = router;
