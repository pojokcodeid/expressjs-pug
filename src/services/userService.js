import {
  findAll,
  create,
  findById,
  update,
  deleteUser as remove,
} from "../repositories/userRepository.js";

export const getAllUsers = () => {
  return findAll();
};

export const createUser = (data) => {
  return create(data);
};

export const getUserById = (id) => {
  return findById(id);
};

export const updateUser = (id, data) => {
  return update(id, data);
};

export const deleteUser = (id) => {
  return remove(id);
};
