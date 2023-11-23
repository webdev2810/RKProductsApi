const bodyParser = require('body-parser');

const express = require("express");
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());

// const apiData = require("./productData.json");

const products = require("./productData.json")
const singleApiData = require("./singleProductData.json");



app.get("/", (req, res) => {
  res.send("Now, Productss are live")
});

app.get("/api/products", (req, res) => {
  res.send(products)
})

app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
  
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  });
// app.get("/products/singleproduct/:id",  (req, res) => {


//   // let sProduct = singleApiData.findById(`${id}`);
  
//   res.send({singleApiData});
// })
app.listen(port, () => {
  console.log(`RKJwells API Keys listening on port`);
});


// // index.js
// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 3001;

// app.use(cors());

// const products = [
//   {
//     id: 1,
//     name: 'Diamond Necklace',
//     price: 499.99,
//     imageUrl: 'diamond_necklace.jpg',
//     description: 'Beautiful diamond necklace for any occasion.',
//   },
//   {
//     id: 2,
//     name: 'Gold Earrings',
//     price: 199.99,
//     imageUrl: 'gold_earrings.jpg',
//     description: 'Elegant gold earrings to complement your style.',
//   },
//   // Add more products as needed
// ];

// // Get all products
// app.get('/api/products', (req, res) => {
//   res.json(products);
// });

// // Get details for a single product
// app.get('/api/products/:id', (req, res) => {
//   const productId = parseInt(req.params.id);
//   const product = products.find(p => p.id === productId);

//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404).json({ error: 'Product not found' });
//   }
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });
