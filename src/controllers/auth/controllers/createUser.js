import User from "../../../models/user/userModel.js";

async function createUser(req, res) {
  try {
    const user = await User.findOne({
      user: req.body.user,
      email: req.body.email,
    });
    if (user) {
      res.status(400).json({ message: "User already exists" });
    }
    const newUser = new User(req.body);
    newUser.password = bcrypt.hashSync(req.body.password, 10);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
export default createUser;
