import express from 'express';
import UsersController from '../controllers/users.js';
import User from '../models/user.js';


const router = express.Router();

const userController = new UsersController(User);

router.get('/', (req, res) => userController.get(req, res));
router.get('/:id', (req, res) => userController.getById(req, res));
router.post('/', (req, res) => userController.create(req, res));
router.put('/:id', (req, res) => userController.update(req, res));
router.delete('/:id', (req, res) => userController.remove(req, res));
router.post('/authenticate', (req, res) => userController.authenticate(req, res));

export default router;