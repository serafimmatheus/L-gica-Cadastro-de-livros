import { Router } from "express";
import {
  createBookController,
  deletedBookController,
  getAllBookController,
  updateBookController,
} from "../controllers/books.controller";
import { verifyAuthMiddleware } from "../middlewares/verifyAuth.middleware";

export const router = Router();

router.get("", verifyAuthMiddleware, getAllBookController);
router.post("", verifyAuthMiddleware, createBookController);
router.put("/:id", verifyAuthMiddleware, updateBookController);
router.delete("/:id", verifyAuthMiddleware, deletedBookController);
