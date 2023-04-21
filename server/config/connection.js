const mongoose = require("mongoose");
require("dotenv").config({ path: "../.env" });
console.log(process.env.MONGODB_URI);

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/bird-nerd",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// Export connection
module.exports = mongoose.connection;
