const User = require("../models/user");

exports.getAllUser = async (req, res) => {
  const queryObject = {};
  let apiData = User.find(queryObject);
  const { name, email, sort, select, page } = req.query;
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }
  if (email) {
    queryObject.email = { $regex: email, $options: "i" };
  }
  if (sort) {
    let result = sort.replace(",", " ");
    apiData = apiData.sort(result);
  }
  if (select) {
    let result = select.split(",").join(" ");
    apiData = apiData.select(result);
  }
  const user = await apiData;
  res.status(200).json({ user });
};

exports.addUser = async (req, res) => {
  let user = new User(req.body);
  let result = await user.save();
  res.send(result);
};
