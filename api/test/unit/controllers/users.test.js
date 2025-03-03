import UsersController from "../../../src/controllers/users.js";
import sinon from 'sinon';
import User from "../../../src/models/user.js";

describe('Controller: Users', () => {
    const defaultUser = [
        {
            __v: 0,
            _id: '56cb91bdc3464f14678934ca',
            name: 'Default User',
            email: 'user@email.com',
            password: 'password',
            role: 'user'
        }
    ];

    const defaultRequest = {
        params: {}
    };

    describe('get() users', async () => {
        it('should return a list of users', async () => {
            const response = {
                send: sinon.spy(),
            };

            User.find = sinon.stub();

            User.find.withArgs({}).resolves(defaultUser);

            const usersController = new UsersController(User);

            await usersController.get(defaultRequest, response);
            sinon.assert.calledWith(response.send, defaultUser);
        });

        it('should reutrn 400 when an error occurs', async () => {
            const request = {};
            const response = {
                send: sinon.spy(),
                status: sinon.stub(),
            };

            response.status.withArgs(400).returns(response);
            User.find = sinon.stub();
            User.find.withArgs({}).rejects({ message: 'Error' });

            const usersController = new UsersController(User);

            await usersController.get(request, response);
            sinon.assert.calledWith(response.send, 'Error');
        });
    });
});