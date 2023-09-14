import express from 'express';
const router = express.Router();
import { createPost, getPost } from '../controller/PostController.js';

router.post('/', createPost);
router.get('/:id', getPost);

export default router;
