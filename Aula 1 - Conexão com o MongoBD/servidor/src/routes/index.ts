import { Router } from "express";
import user from "./user";

const routes = Router();

routes.post("/usuario", user);

export default routes;

