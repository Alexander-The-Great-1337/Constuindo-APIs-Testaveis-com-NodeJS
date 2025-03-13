class UsersController {
    constructor(User) {
        this.User = User;
    }

    async get(req, res) {
        try {
            const users = await this.User.find({});
            res.send(users);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async getById(req, res) {
        const { id } = req.params;
        try {
            const user = await this.User.find({ _id: id });
            res.send(user);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async create(req, res) {
        try {
            const user = new this.User(req.body);
            await user.save();

            res.status(201).send(user);
        } catch (error) {
            res.status(422).send(error.message);
        }
    }

    async update(req, res) {
        const body = req.body;
        try {
            const user = await this.User.findById(req.params.id);

            user.name = body.name;
            user.email = body.email;
            user.role = body.role;

            if (body.password) {
                user.password = body.password;
            }

            await user.save();

            res.sendStatus(200);
        } catch (error) {
            res.status(422).send(error.message);
        }
    }

    async remove(req, res) {
        try {
            await this.User.deleteOne({ _id: req.params.id });
            res.sendStatus(204);
        } catch (error) {
            res.status(400).send(error.message);
        }
    }

    async authenticate(req, res) {
        return res.send({ token: 'fake-token' });
    }

}

export default UsersController;