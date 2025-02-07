import User from "../../../models/user/userModel.js";

async function deleteUser(req, res) {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await user.remove();
      res.status(200).json({ message: "User removed" });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
export default deleteUser;
