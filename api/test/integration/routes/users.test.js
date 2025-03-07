import User from "../../../src/models/user.js";
import { init, request, expect, app } from "../helpers.js";

describe('Routes: Users', () => {
  before(async () => {
    await init();
  });

  after(async () => await app.database.connection.close());


  const defaultId = '56cb91bdc3464f14678934ca';

  const defaultAdmin = {
    name: 'Jhon Doe',
    email: 'jhon@mail.com',
    password: '123password',
    role: 'admin'
  };
  const expectedAdminUser = {
    _id: defaultId,
    name: 'Jhon Doe',
    email: 'jhon@mail.com',
    role: 'admin'
  };

  beforeEach(async() => {
    const user = new User(defaultAdmin);
    user._id = '56cb91bdc3464f14678934ca';
    await User.deleteMany({});
    await user.save();
  });

  afterEach(async() => await User.deleteMany({}));

  describe('GET /users', () => {
    it('should return a list of users', (done) => {

      done();
    });
  });

});