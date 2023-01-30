const express = require("express");
const { getAllUser, addUser } = require("../controllers/users");
const router = express.Router();

router.route("/").get(getAllUser).post(addUser);

module.exports = router;
