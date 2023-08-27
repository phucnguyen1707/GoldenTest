const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");

// Route for getting a specific product by ID
router.get("/:id", productController.getById);

// Route for getting all products
router.get("/", productController.getAll);

router.post("/create", productController.create);
router.put("/update/:id", productController.update);
router.delete("/delete/:id", productController.delete);

module.exports = router;
