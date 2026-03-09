import { Router } from "express";
import * as orderController from "../controllers/orderController.js";

const router = Router();

router.post("/", orderController.create);
router.get("/list", orderController.list);
router.get("/:id", orderController.getOrder);
router.put("/:id", orderController.update);
router.delete("/:id", orderController.deleteOrder);

export default router;