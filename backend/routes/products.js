const express = require("express");
const products = require("../model/product");
const router = express.Router();

router.get("/test", (req, res) => res.send("product routes is working"));
// router.post("/", (req ,res)=>{

//     products.create(req.body).then(()=>res.json({msg:"product aded!!!!"})).catch(()=>res.status(400).json({msg:"products not aded"}));

// })
// Route to create a new product
router.post("/", async (req, res) => {
    try {
        // Create a new product instance using the request body
        const newProduct = new products(req.body);

        // Save the new product to the database
        await newProduct.save();

        // Respond with success message and status code 201 (Created)
        return res.status(201).json({ msg: "Product added successfully", product: newProduct });
    } catch (error) {
        // If an error occurs, respond with error message and status code 400 (Bad Request)
        console.error("Error creating product:", error);
        return res.status(400).json({ error: "Failed to add product" });
    }
});
router.get("/", (req, res) => {
    products.find()
        .then(products => {
            res.json(products);
        })
        .catch(error => {
            res.status(500).json({ error: error.message });
        });
});

// Route to get a product by its ID
router.get("/:id", async (req, res) => {
    try {
        // Extract the product ID from the request parameters
        const productId = req.params.id;

        // Find the product by its ID in the database
        const product = await products.findById(productId);

        // If the product is found, send it as a JSON response
        if (product) {
            return res.status(200).json(product);
        } else {
            // If the product is not found, send a 404 (Not Found) response
            return res.status(404).json({ error: "Product not found" });
        }
    } catch (error) {
        // If an error occurs, respond with error message and status code 500 (Internal Server Error)
        console.error("Error fetching product:", error);
        return res.status(500).json({ error: "Failed to fetch product" });
    }
});
module.exports = router;


// router.get("/:id", (req, res) => {
//     const productId = req.params.id;

//     products.findById(productId)
//         .then(product => {
//             if (!product) {
//                 return res.status(404).json({ error: "Product not found" });
//             }
//             res.json(product);
//         })
//         .catch(error => {
//             res.status(500).json({ error: error.message });
//         });
// });