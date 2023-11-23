
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
app.get("/singleproduct/:id",  (req, res) => {


  let sProduct = singleApiData.find(req.params.id);
  
  res.send(sProduct);
})
app.listen(port, () => {
  console.log(`RKJwells API Keys listening on port`);
});