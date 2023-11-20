let mongoose = require("mongoose");

// create a book model
let groceryModel = mongoose.Schema(
  {
    item:String,
    brand:String,
    cost:String,
    quantity:Number,                     
  },
  {
    collection: "grocery",
  }
);

module.exports = mongoose.model("grocery", groceryModel);                                   