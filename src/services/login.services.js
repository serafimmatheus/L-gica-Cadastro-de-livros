import { db } from "../database";
import jwt from "jsonwebtoken";
import * as bcrypt from "bcryptjs";

export const loginServices = (email, password) => {
  const alreadEmailExists = db.find((user) => user.email === email);

  if (!alreadEmailExists) {
    return "Email or password invalid!";
  }

  const comparePassword = bcrypt.compareSync(
    password,
    alreadEmailExists.password
  );

  if (!comparePassword) {
    return "Email or password invalid!";
  }

  const token = jwt.sign({ email: email }, "SECRET_KEY", { expiresIn: "24h" });

  return token;
};
