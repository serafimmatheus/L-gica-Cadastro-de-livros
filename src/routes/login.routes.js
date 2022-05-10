import { Router } from "express";
import { loginController } from "../controllers/login.controller";

export const router = Router();

router.post("", loginController);
