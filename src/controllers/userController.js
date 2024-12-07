import {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser as removeUser,
} from "../services/userService.js";
import { setFlash } from "../middleware/flash.js";

export const index = async (req, res) => {
  const users = await getAllUsers();
  res.render("users/index", { users });
};

export const create = (req, res) => {
  res.render("users/create");
};

export const store = async (req, res) => {
  await createUser(req.body);
  setFlash(req, "success", "User created successfully");
  res.redirect("/users");
};

export const edit = async (req, res) => {
  const user = await getUserById(req.params.id);
  res.render("users/edit", { user });
};

export const update = async (req, res) => {
  await updateUser(req.params.id, req.body);
  setFlash(req, "success", "User updated successfully");
  res.redirect("/users");
};

export const deleteUser = async (req, res) => {
  await removeUser(req.params.id);
  setFlash(req, "success", "User deleted successfully");
  res.redirect("/users");
};

export const view = async (req, res) => {
  const user = await getUserById(req.params.id);
  res.render("users/view", { user });
};
