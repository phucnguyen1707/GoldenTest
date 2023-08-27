const Product = require("../model/Product");

class ProductController {
  async getAll(req, res, next) {
    try {
      const result = await Product.find({});
      res.json(result);
      console.log(res);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async getById(req, res, next) {
    try {
      const productId = req.params.id;
      const result = await Product.findOne({ _id: productId });

      if (!result) {
        return res.status(404).json({ message: "Product not found" });
      }

      res.json(result);
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
  async create(req, res, next) {
    try {
      const { name, price, description, image } = req.body;
      const newProduct = await Product.create({
        name,
        price,
        description,
        image,
      });
      res.json(newProduct);
    } catch (error) {
      res.status(500).json({ error: next.error });
    }
  }

  async update(req, res, next) {
    try {
      const productId = req.params.id;
      await Product.updateOne({ _id: productId }, req.body);
      res.json({ message: "Product updated successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }

  async delete(req, res, next) {
    try {
      const productId = req.params.id;
      await Product.deleteOne({ _id: productId });
      res.json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: "Internal server error" });
    }
  }
}

module.exports = new ProductController();
