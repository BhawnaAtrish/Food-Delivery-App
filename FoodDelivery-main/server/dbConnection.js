const mongoose = require('mongoose');

const dotENV= require('dotenv');
dotENV.config();

 const dbConnect=async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017')
  .then(() => console.log('Connected to Database!'));
    } catch (error) {
        console.log("DB not Connected"+error);
    }
}
module.exports= dbConnect;