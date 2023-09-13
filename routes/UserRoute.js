import express from 'express';
import { getUser, updateUser } from '../controller/UserController.js';
const router = express.Router();

router.get('/:id', getUser);
router.put('/:id', updateUser);

export default router;
