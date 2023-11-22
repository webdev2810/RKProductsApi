const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/"

mongoose.set('strictQuery', false);

const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("Connected to Mongo Successfully");
  })
}
// const connectTOMongo = () => {
//   mongoose.connect(mongoURI, {useNewUrlParser:true,useUnifiedTopology:true},).then(() => 
//     console.log('Connected to Mongo Successfully'))
//     .catch((err) => { console.error(err);});
// };

module.exports = connectToMongo;

