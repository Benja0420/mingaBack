import User from "../../../models/user/userModel.js";

async function updateUser(req, res) {
  try {
    const user = await User.findOneAndUpdate({ _id: req.params.id }, req.body, {
      new: true,
      runValidators: true,
    });
    if (!user) {
      res.status(404).json({ message: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
}
export default updateUser;
