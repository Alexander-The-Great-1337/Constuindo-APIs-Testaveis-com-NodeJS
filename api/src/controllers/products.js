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
    const { params: { id } } = req;
    try {
      const product = await this.Product.find({ _id: id });

      res.send(product);
    } catch (error) {
      console.error(error);
    }
  }

  async create(req, res) {
    try {
      const { name, description, price } = req.body;

      if (!name || !description || !price ) {
        res.status(400).json({ message: 'All fields must be filled.' });
        return;
      }

      const product = new this.Product({ name, description, price });
      await product.save();
      
      return res.status(201).send(product);
    } catch (error) {
      console.log(error);
    }
  }
}

export default ProductsController;