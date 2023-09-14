import express from 'express';
const router = express.Router();
import { createPost } from '../controller/PostController.js';

router.post('/', createPost);

export default router;
