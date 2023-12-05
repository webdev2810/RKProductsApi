const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const express = require("express");
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());


const products  = require("./productData.json")
const singleApiData = require("./singleProductData.json");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // You may need to create the 'uploads' directory
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}${ext}`);
  },
});

const upload = multer({ storage });

// Define a route for image upload
app.post('/api/upload', upload.single('image'), (req, res) => {
  // Handle the uploaded file
  const uploadedFilePath = req.file.path;
  console.log('Image uploaded to:', uploadedFilePath);

  // Send a response to the client
  res.status(200).json({ message: 'Image uploaded successfully' });
});


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


