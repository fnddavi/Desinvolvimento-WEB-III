import { Router } from "express";
import controller from "../controllers/UserControlers";

const routes = Router();

routes.post("/", controller.create);

export default routes;
