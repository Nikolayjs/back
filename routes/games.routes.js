import express from "express";
import { GameController } from "../controllers/index.js";
import {
  checkAuth,
  handleValidation,
  gameValidation,
} from "../middleware/index.js";

const router = express.Router({ mergeParams: true });

router.get("/games", GameController.getAll);
router.get("/search", GameController.getAllWithSearch);
router.get("/games/:id", GameController.getOne);
router.get("/categories", GameController.getCategories);
router.post(
  "/games",
  checkAuth,
  gameValidation,
  handleValidation,
  GameController.create
);
router.patch(
  "/games/:id",
  checkAuth,
  gameValidation,
  handleValidation,
  GameController.update
);
router.delete("/games/:id", checkAuth, GameController.remove);

export default router;
