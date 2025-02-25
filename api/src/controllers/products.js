class ProductsController {
  constructor(Product) {
    this.Product = Product;
  }
  
  async get(req, res) {
    try {
      const products = await this.Product.find({});
      res.send(products);
    } catch (err) {
      res.status(400).send(err.message);
    }
  }

  async getById(req, res) {
    const { id } = req.params;
    try {
      const product = await this.Product.find({ _id: id });
      res.send(product);
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  }
}

export default ProductsController;