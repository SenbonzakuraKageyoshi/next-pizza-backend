import Router from 'express';
import { updateUser } from '../controllers/userController/index.js';
import authCheck from '../utils/authCheck.js';

const router = Router();

router.post('/update-user', authCheck, updateUser);

export default router;