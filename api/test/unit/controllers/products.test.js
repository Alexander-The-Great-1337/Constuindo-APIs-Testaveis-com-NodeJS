import ProductsController from '../../../src/controllers/products.js';
import sinon from 'sinon';
import { expect } from '../helper.js';

describe('Controllers: Products', () => {
  const defaultProducts = [{
    name: 'Default products',
    description: 'product description',
    price: 100,
  }];
  
  describe('get() products', () => {
    it('should return a list of products', () => {
      const request = {};
      const response = {
        send: sinon.spy()
      };

      const productsController = new ProductsController();
      productsController.get(request, response);

      expect(response.send.called).to.be.true;
      expect(response.send.calledWith(defaultProducts)).to.be.true;
    });
  });
});