import getUsers from "./controllers/getUsers.js";
import getUserById from "./controllers/getUserById.js";
import createUser from "./controllers/createUser.js";
import updateUser from "./controllers/updateUser.js";
import deleteUser from "./controllers/deleteUser.js";
import login from "./controllers/login.js";

export default {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  login,
};
