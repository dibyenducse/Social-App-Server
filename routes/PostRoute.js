import express from 'express';
const router = express.Router();
import {
    createPost,
    deletePost,
    getPost,
    likePost,
    updatePost,
} from '../controller/PostController.js';

router.post('/', createPost);
router.get('/:id', getPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);
router.put('/:id/like', likePost);

export default router;
