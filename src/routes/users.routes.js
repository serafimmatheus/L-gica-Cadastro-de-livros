import { Router } from "express";
import {
  createUsersController,
  deletedUserController,
  getUsersController,
  updateUserController,
} from "../controllers/users.controller";
import { verifyEmailAvailabilityMiddleware } from "../middlewares/verifyEmailAvailability.middleware";
import { verifyAuthMiddleware } from "../middlewares/verifyAuth.middleware";

export const router = Router();

router.get("", getUsersController);
router.post("", verifyEmailAvailabilityMiddleware, createUsersController);
router.put("/:id", verifyAuthMiddleware, updateUserController);
router.delete("/:id", verifyAuthMiddleware, deletedUserController);
