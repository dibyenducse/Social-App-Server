import express from 'express';
const router = express.Router();
import {
    createPost,
    getPost,
    updatePost,
} from '../controller/PostController.js';

router.post('/', createPost);
router.get('/:id', getPost);
router.put('/:id', updatePost);

export default router;
