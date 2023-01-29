const Product = require("../models/product");

exports.getAllProducts = async (req, res) => {
  try {
    const { name, sort, select, page } = req.query;
    const queryObject = {};
    if (name) {
      queryObject.name = { $regex: name, $options: "i" };
    }

    let apiData = Product.find(queryObject);
    if (sort) {
      let result = sort.replace(",", " ");
      apiData = apiData.sort(result);
    }

    if (select) {
      let result = select.split(",").join(" ");
      apiData = apiData.select(result);
    }
    if (page) {
      let page = Number(req.query.page) || 1;
      let limit = Number(req.query.limit) || 3;
      let skip = (page - 1) * limit;
      apiData = apiData.skip(skip).limit(limit);
    }

    const products = await apiData;
    res
      .status(200)
      .json({ message: "Here are all Products !", data: products });
  } catch (err) {
    console.log(`The error is : ${err}`);
  }
};

exports.addProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();
    res.send(result);
  } catch (err) {
    console.log(err);
  }
};
