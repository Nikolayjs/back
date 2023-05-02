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

router.post("/user/:uId/cart/:gId", GameController.addToCart);
router.post("/user/:uId/removeFromCart/:gId", GameController.removeFromCart);
// router.post("user/:id/purchased/:id", GameController.purchasedGames);

export default router;
