import { v4 as uuidv4 } from "uuid";
import * as bcrypt from "bcryptjs";
import { db } from "../database";

export const createdUserServices = async (user) => {
  const { email, name, password } = user;
  const password_hash = await bcrypt.hash(password, 10);

  const newUser = {
    id: uuidv4(),
    email,
    name,
    password: password_hash,
  };

  db.push(newUser);

  return newUser;
};

export const getUserServices = () => {
  return db;
};

export const updateUserServices = (id, email, name) => {
  const updateUser = {
    id,
    email,
    name,
  };

  const userUpdate = db.findIndex((user) => user.id === id);

  if (userUpdate === -1) {
    return "User not found.";
  }

  db[userUpdate] = { ...db[userUpdate], ...updateUser };

  return db[userUpdate];
};

export const deleteUserServices = (id) => {
  const removeUser = db.findIndex((user) => user.id === id);

  if (removeUser === -1) {
    return "User not found.";
  }

  db.splice(removeUser, 1);

  return "";
};
