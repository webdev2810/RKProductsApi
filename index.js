// const connectToMongo = require("./db");
// const express = require("express");
// var cors = require('cors')

// connectToMongo();
// var app = express()
// const port = 5000;

// app.use(cors())
// app.use(express.json())


// //Available Routes
// app.use('/api/products', require('./routes/products'))

// app.listen(port, () => {
//   console.log(`RKJwells API Keys listening on port ${port}`);
// });



const express = require("express");
const cors = require('cors')

const app = express()
const port = process.env.PORT || 3000;

app.use(cors());

const apiData = require("./productData.json");



app.get("/", (req, res) => {
  res.send("Now, Productss are live")
});

app.get("/products", (req, res) => {
  res.send(apiData)
})
app.listen(port, () => {
  console.log(`RKJwells API Keys listening on port`);
});