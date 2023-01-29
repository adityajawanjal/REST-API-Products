const express = require("express");
const { getAllProducts, addProduct } = require("../controllers/products");
const router = express.Router();

router.route("/").get(getAllProducts).post(addProduct);

module.exports = router;