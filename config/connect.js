const mongoose = require("mongoose");

const connectDB = async(url) => {
  try {
    const {connection} =await mongoose.connect(url)
    console.log(connection.host);
    
  } catch (error) {
    console.log(error);
    
  }
};

module.exports = connectDB;
