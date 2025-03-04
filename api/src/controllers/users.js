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

}

export default UsersController;