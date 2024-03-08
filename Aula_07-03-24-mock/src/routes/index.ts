import { Router, Request, Response } from "express";
import fabricante from "./fabricante";

const router = Router();

router.use("/fabricante", fabricante);

//aceita qualquer método HTTP ou URL
router.use((_: Request, res: Response) =>
  res.json({ error: "Requisição desconhecida" })
);

export default router;