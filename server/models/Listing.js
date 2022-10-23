const { model, Schema } = require("mongoose");

const listingSchema = new Schema({
    name: String,
    description: String,
    price: Number,
    createAt: String
})


module.exports = model('Listing', listingSchema);