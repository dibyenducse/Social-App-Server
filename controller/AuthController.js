import UserModel from '../Models/userModel.js';

//Registering a new user
export const registerUser = async (req, res) => {
    const { username, password, firstname, lastname } = req.body;

    const newUser = new UserModel({ username, password, firstname, lastname });

    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
// login User

export const loginUser = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await UserModel.findOne({ username: username });

        if (user) {
            const validity = await bcrypt.compare(password, user.password);

            validity
                ? res.status(200).json(user)
                : res.status(400).json('Wrong Password');
        } else {
            res.status(404).json('User does not exists');
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
