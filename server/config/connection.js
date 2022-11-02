const mongoose = require("mongoose");

const uri =
  "mongodb+srv://nighthawk:nofomo@nofomo.76lpu4l.mongodb.net/nofomo?retryWrites=true&w=majority";

mongoose.connect(
  uri,
  // process.env.MONGODB_URI || "mongodb://localhost:27017/nofomo",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
