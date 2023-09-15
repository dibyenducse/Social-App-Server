import express from 'express';
const router = express.Router();
import {
    createPost,
    deletePost,
    getPost,
    updatePost,
} from '../controller/PostController.js';

router.post('/', createPost);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;
