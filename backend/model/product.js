const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
    {
        _id:{
            type: Number,
            required: true  
        },
        name: {
            type: String,
            required: true // Make name required
        },
        description: {
            type: String
        },
        price: {
            type: Number,
            required: true // Make price required
        },
        category: {
            type: String
        },
        images: {
            type: [String] // Array of image URLs
        },
        stockQuantity: {
            type: Number,
            required: true // Make stock quantity required
        }
    }
);

module.exports = mongoose.model('product', productsSchema);
