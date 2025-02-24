import Product from "../../../src/models/product.js";
import { init, request, expect, app } from "../helpers.js";

describe('Routes: Products', () => {
  const defaultId = '56cb91bdc3464f14678934ca';

  const defaultProduct = {
    name: 'Default product',
    description: 'product description',
    price: 100,
  };

  const expectedProduct = [{
    __v: 0,
    _id: defaultId,
    name: 'Default product',
    description: 'product description',
    price: 100,
  }];

  beforeEach(async () => {
    await Product.deleteMany();

    const product = new Product(defaultProduct);
    product._id = defaultId;
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

  describe('/products/:id when an id is specified', () => {
    it('should return 200 with on project', done => {
      request
        .get(`/products/${defaultId}`)
        .end((err, res) => {
          expect(res.statusCode).to.eql(200);
          expect(res.body).to.eql(expectedProduct);
          done(err);
        });
    });
  });
});
