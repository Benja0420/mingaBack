import User from "../../models/user/user.js";

async function getUsers(req, res) {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
async function getUserById(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}
async function createUser(req, res) {
    try {
        const user = await User.findOne({ user: req.body.user, email: req.body.email });
        if (user) {
            res.status(400).json({ message: 'User already exists' });
        }
        const newUser = await User.create({ user: req.body.user, email: req.body.email, password: req.body.password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).send({ message: error.message });
    }
}
async function updateUser(req, res) {
    try {
        const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        }
        else {
            res.status(200).json(user);
    }}
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}

async function deleteUser(req, res) {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            await user.remove();
            res.status(200).json({ message: 'User removed' });
        }
        else {
            res.status(404).json({ message: 'User not found' });
        }
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
}

export { getUsers, getUserById, createUser, updateUser, deleteUser };