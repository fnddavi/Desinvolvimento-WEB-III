import { Router } from "express";
import FabricanteController from "../controllers/FabricanteController";

const router = Router();
const controller = new FabricanteController();

router.get("/", controller.list);
router.post("/", controller.save);
router.put("/", controller.update);
router.delete("/", controller.remove);

export default router;