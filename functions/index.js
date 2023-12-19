<<<<<<< HEAD:functions/index.js
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const express = require("express");
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());


const products  = require("../productData.json")
const singleApiData = require("../singleProductData.json");


app.get("/", (req, res) => {
  res.send("Now, Productss are live")
});

app.get("/api/products", (req, res) => {
  res.send(products)
})


app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = singleApiData.find(p => p.id === productId);
  
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ error: 'Product not found' });
  }
});

app.listen(port, () => {
  console.log(`RKJwells API Keys listening on port`);
});



app.use('/.netlify/functions/api', app);
=======
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
const express = require("express");
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());


const products  = require("../productData.json")
const singleApiData = require("../singleProductData.json");


app.get("/", (req, res) => {
  res.send("Now, Productss are live")
});

app.get("/api/products", (req, res) => {
  res.send(products)
})


app.get('/api/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);
  const product = singleApiData.find(p => p.id === productId);
  
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ error: 'Product not found' });
  }
});

app.listen(port, () => {
  console.log(`RKJwells API Keys listening on port`);
});



app.use('/.netlify/functions/api', app);
>>>>>>> 774dee2267bcf0e686f739d0eb31188217eb7108:index.js
module.exports.handler = serverless(app);