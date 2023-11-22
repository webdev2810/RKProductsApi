
const express = require("express");
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;

app.use(cors());

const apiData = require("./productData.json");
const singleApiData = require("./singleProductData.json");



app.get("/", (req, res) => {
  res.send("Now, Productss are live")
});

app.get("/products", (req, res) => {
  res.send(apiData)
})
app.get("/singleProduct/:id", (req, res) => {


  let sProduct = singleApiData.find(`${id}`);
  // if (!sProduct) {
  //   return res.status(404).send("Product Not Found");
  // }
  // if (sProduct.Product.toString() !== req.user.id) {
  //   return res.status(200).send(singleApiData);
  // }
  res.send(sProduct)
})
app.listen(port, () => {
  console.log(`RKJwells API Keys listening on port`);
});