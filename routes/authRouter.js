import Router from 'express';
import { register, login, getUser } from '../controllers/authController/index.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/get-user', getUser);

export default router;