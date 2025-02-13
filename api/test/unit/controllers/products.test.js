import ProductsController from '../../../src/controllers/products.js';
import sinon from 'sinon';
import Product from '../../../src/models/product.js';

describe('Controllers: Products', () => {
  const defaultRequest = {
    params: {},
  }
  const defaultProduct = [{
    __v: 0,
    _id: '56cb91bdc3464f14678934ca',
    name: 'Default product',
    description: 'product description',
    price: 100,
  }];
  
  describe('get() products', () => {
    it('should return a list of products', async () => {
      const response = {
        send: sinon.spy()
      };

      Product.find = sinon.stub();

      Product.find.withArgs({}).resolves(defaultProduct);

      const productsController = new ProductsController(Product);

      await productsController.get(defaultRequest, response);

      sinon.assert.calledWith(response.send, defaultProduct);
    });

    it('should return 400 when an error occurs', async () => {
      const request = {};
      const response = {
        send: sinon.spy(),
        status: sinon.stub(),
      };
      response.status.withArgs(400).returns(response);
      Product.find = sinon.stub();
      Product.find.withArgs({}).rejects({ message: 'Error' });
      
      const productsController = new ProductsController(Product);
      await productsController.get(request, response);
      sinon.assert.calledWith(response.send, 'Error');
    });
  });

  describe('getById()', () => {
    it('should return one product', async () => {
      const fakeId = 'a-fake-id';
      const request = {
        params: {
          id: fakeId
        }
      };
      const response = {
        send: sinon.spy()
      };

      Product.find = sinon.stub();
      Product.find.withArgs({ _id: fakeId }).resolves(defaultProduct);

      const productsController = new ProductsController(Product);
      await productsController.getById(request, response);

      sinon.assert.calledWith(response.send, defaultProduct);
    });
  });

  describe('when adding products', () => {
    it('should save a product into the database', async () => {
      

    });
  });
});