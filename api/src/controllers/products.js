class ProductsController {
  get(request, response) {
    response.send([{
    name: 'Default products',
    description: 'product description',
    price: 100,
  }]);
  }
}

export default ProductsController;