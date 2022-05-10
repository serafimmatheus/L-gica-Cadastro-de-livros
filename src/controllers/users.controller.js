import {
  createdUserServices,
  deleteUserServices,
  getUserServices,
  updateUserServices,
} from "../services/users.services";

export const createUsersController = async (req, res) => {
  const user = req.body;

  const createdUser = await createdUserServices(user);

  return res.status(201).json(createdUser);
};

export const getUsersController = (req, res) => {
  const allUsers = getUserServices();

  return res.status(200).json(allUsers);
};

export const updateUserController = (req, res) => {
  const { name, email } = req.body;
  const { id } = req.params;

  const updateUser = updateUserServices(id, email, name);

  return res.status(200).json(updateUser);
};

export const deletedUserController = (req, res) => {
  const { id } = req.params;

  const deleteUser = deleteUserServices(id);

  return res.json(deleteUser);
};
