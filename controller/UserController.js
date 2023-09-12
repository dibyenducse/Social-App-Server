import UserModel from '../Models/userModel.js';

//get a user
export const getUser = async (req, res) => {
    const id = req.params.id;

    try {
        const user = await UserModel.findByID(id);
        if (user) {
            res.status(200).json(user);
            console.log('User data found');
        }
    } catch (error) {
        res.status(500).json(error);
    }
};
