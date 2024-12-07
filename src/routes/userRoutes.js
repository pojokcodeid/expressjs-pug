import { Router } from "express";
import {
  index,
  create,
  store,
  edit,
  update,
  deleteUser,
  view,
} from "../controllers/userController.js";

const router = Router();

router.get("/", index);
router.get("/create", create);
router.post("/create", store);
router.get("/:id/edit", edit);
router.post("/:id/edit", update);
router.get("/:id/delete", deleteUser);
router.get("/:id", view);

export default router;
