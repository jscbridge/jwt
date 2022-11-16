const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/jwt";

mongoose.connect(url, function (err) {
  if (err) throw err;
  console.log("BBDD ON");
});
