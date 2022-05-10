import { loginServices } from "../services/login.services";

export const loginController = (req, res) => {
  const { email, password } = req.body;

  const loginUser = loginServices(email, password);

  return res.status(200).json(loginUser);
};
