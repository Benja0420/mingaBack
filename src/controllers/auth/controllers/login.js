import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import User from "../../../models/user/userModel.js";

async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "Email not found" });
    }
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const token = jwt.sign(
        { userId: user._id, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: "1h" }
      );
      res.status(200).json({ token });
    } else {
      return res.status(400).json({ message: "Email or password invalid" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Error on login" });
  }
}
export default login;
