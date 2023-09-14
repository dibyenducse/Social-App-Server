import PostModel from '../Models/postModel.js';
import mongoose from 'mongoose';
import UserModel from '../Models/userModel.js';

//create a new post
export const createPost = async (req, res) => {
    const newPost = new PostModel(req.body);

    try {
        const post = await newPost.save();
        res.status(200).json('Post Created Successfully');
        console.log(post);
    } catch (error) {
        res.status(500).json(error);
    }
};
