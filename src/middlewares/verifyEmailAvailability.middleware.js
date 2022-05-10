import { db } from "../database";

export const verifyEmailAvailabilityMiddleware = (req, res, next) => {
  const { email } = req.body;
  const verifyEmail = db.find((user) => user.email === email);

  if (verifyEmail) {
    return res.status(400).json({ error: "Email already exists." });
  }

  next();
};
