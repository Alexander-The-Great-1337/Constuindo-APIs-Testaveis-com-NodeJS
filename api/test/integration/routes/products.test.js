import { init, request, expect } from "../helpers.js";

describe('Routes: Products', () => {
  const defaultProduct = {
    name: 'Default products',
    description: 'product description',
    price: 100,
  };

  before(async () => {
    await init(); // Initialize the app
  });

  describe('GET /products', () => {
    it('should return a list of products', done => {
      request
        .get('/products')
        .end((err, res) => {
          if (err) return done(err);
          expect(res.body[0]).to.eql(defaultProduct);
          done();
        });
    });
  });
});
