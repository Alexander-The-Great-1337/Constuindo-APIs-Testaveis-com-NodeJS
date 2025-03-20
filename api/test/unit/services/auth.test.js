import AuthService from '../../../src/services/auth.js';
import bcrypt from 'bcrypt';
import { expect, use } from 'chai';
import Util from 'node:util';
import sinon from 'sinon';

const hashAsync = Util.promisify(bcrypt.hash);

describe('Service: Auth', () => {
  context('authenticate', () => {
    it('should authenticate an user', async () => {
      const fakeUserModel = {
        findOne: sinon.stub(),
      };
      const user =  {
        name: 'Jhon',
        email: 'jhondoe@gmail.com',
        password: '12345',
      };

      const authService = new AuthService(fakeUserModel);
      const hashedPassword = await hashAsync('12345', 10);
      const userFormDatabase = {
        ...user,
        password: hashedPassword,
      };
      fakeUserModel.findOne.withArgs({ email: 'jhondoe@gmail.com' }).resolves(
        userFormDatabase
      );
      const res = await authService.authenticate(user);
      expect(res).to.eql(userFormDatabase);
    });
    it('should return false when the password does not match', async () => {
      const user = {
        email: 'jhondoe@mail.com',
        password: '12345',
      };
      const fakeUserModel = {
        findOne: sinon.stub(),
      };
      fakeUserModel.findOne.resolves({ email: user.email, password: 'aFakeHasedPassword' });
      const authService = new AuthService(fakeUserModel);
      const response = await authService.authenticate(user);

      expect(response).to.be.false;
    });
  });
});