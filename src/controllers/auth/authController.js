import getUsers from "../../controllers/auth/controllers/getUsers.js";
import getUserById from "../../controllers/auth/controllers/getUserById.js";
import createUser from "../../controllers/auth/controllers/createUser.js";
import updateUser from "../../controllers/auth/controllers/updateUser.js";
import deleteUser from "../../controllers/auth/controllers/deleteUser.js";
import login from "../../controllers/auth/controllers/login.js";

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  login,
};
