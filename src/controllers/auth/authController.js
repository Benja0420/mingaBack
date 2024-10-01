import User from "../../models/user/userModel.js";

import bcrypt from 'bcrypt';

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
        const newUser = new User(req.body);
        newUser.password = bcrypt.hashSync(req.body.password, 10);
        await newUser.save();
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
        }
    }
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
async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            res.status(400).json({ message: 'mail dont exists' });
        }
        if (bcrypt.compareSync(req.body.password, user.password)) {
            res.status(200).json(user);
        } else {
            res.status(400).json({ message: 'Mail or password invalidi' });
        }
    } catch (error) {
    }
}

export default { getUsers, getUserById, createUser, updateUser, deleteUser, login };