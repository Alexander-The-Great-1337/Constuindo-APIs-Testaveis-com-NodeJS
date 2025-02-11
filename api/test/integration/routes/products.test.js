import Product from "../../../src/models/product.js";
import { init, request, expect, app } from "../helpers.js";

describe('Routes: Products', () => {
  const defaultProduct = {
    name: 'Default product',
    description: 'product description',
    price: 100,
  };

  const expectedProduct = [{
    __v: 0,
    _id: '56cb91bdc3464f14678934ca',
    name: 'Default product',
    description: 'product description',
    price: 100,
  }];

  beforeEach(async () => {
    await Product.deleteMany();

    const product = new Product(defaultProduct);
    product._id = '56cb91bdc3464f14678934ca';
    return await product.save();
  });

  afterEach(async () => await Product.deleteMany());

  before(async () => {
    await init();
  });

  after(async () => await app.database.connection.close());

  describe('GET /products', () => {
    it('should return a list of products', done => {
      request
        .get('/products')
        .end((err, res) => {
          expect(res.body).to.eql(expectedProduct);
          done(err);
        });
    });
  });
});
