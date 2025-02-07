import User from "../../../models/user/userModel.js";

async function getUsers(req, res) {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
export default getUsers;
