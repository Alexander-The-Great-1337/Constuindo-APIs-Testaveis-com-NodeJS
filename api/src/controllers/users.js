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

}

export default UsersController;