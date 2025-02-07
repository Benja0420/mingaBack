import User from "../../../models/user/userModel.js";

async function getUserById(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
export default getUserById;
