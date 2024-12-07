import User from "../models/userModel.js";

export const findAll = async () => {
  return await User.find();
};

export const create = async (data) => {
  const newUser = new User(data);
  return await newUser.save();
};

export const findById = async (id) => {
  return await User.findById(id);
};

export const update = async (id, data) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

// Mengganti delete dengan deleteUser
export const deleteUser = async (id) => {
  return await User.findByIdAndDelete(id);
};
