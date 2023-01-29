const express = require("express");
const connectDB = require("./db/conn");
const product_routes = require("./routes/products");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Yes , I am working...");
});

app.use("/api/products", product_routes);

const port = process.env.PORT || 5000;
const startServer = async () => {
  try {
    app.listen(port, () => {
      console.log(`app is listening on port : ${port}`);
    });
  } catch (err) {
    console.log(`The error while connecting is : ${err}`);
  }
};
startServer();
connectDB();
