import dataSource from "../data-source";
import Fabricante from "../entities/Fabricante";
import { Request, Response } from "express";

export default class FabricanteController {
  public async save(req: Request, res: Response): Promise<Response> {
    const { nome } = req.body;
    if (!nome || nome.length === 0) {
      return res.status(400).json({ erro: "Forneça o nome" });
    }

    try {
      const result = await dataSource.manager.save(Fabricante, { nome });
      return res.json(result);
    } catch (e) {
      if (e.message.includes("UNIQUE constraint failed: fabricantes.nome")) {
        return res.status(409).json({ erro: "Nome repetido" });
      } else {
        return res.status(500).json({ erro: e.message });
      }
    }
  }

  public async list(_: Request, res: Response): Promise<Response> {
    try {
      const result = await dataSource.manager.find(Fabricante);
      return res.json(result);
    } catch (e) {
      return res.status(500).json({ erro: "Problemas com o BD" });
    }
  }

  public async update(req: Request, res: Response): Promise<Response> {
    const { id, nome } = req.body;
    if (!id ) {
      return res.status(400).json({ erro: "Forneça o identificador" });
    }
    if (!nome || nome.length === 0) {
      return res.status(400).json({ erro: "Forneça o nome" });
    }

    try {
      const fabricante = await dataSource.manager.findOneBy(Fabricante, {id});
      if( !fabricante ){
        return res.status(409).json({ erro: "Registro não localizado" });
      }
      fabricante.nome = nome;
      const result = await dataSource.manager.save(fabricante);
      return res.json(result);
    } catch (e) {
      if (e.message.includes("UNIQUE constraint failed: fabricantes.nome")) {
        return res.status(409).json({ erro: "Nome repetido" });
      } else {
        return res.status(500).json({ erro: e.message });
      }
    }
  }

  public async remove(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    try {
      // remove o registro e retorna a quantidade de registros removidos
      const deleteResult = await dataSource.manager.delete(Fabricante, { id });
      if (deleteResult.affected > 0) {
        return res.json({ message: "Registro excluído" });
      } else {
        return res.status(400).json({ message: "Registro não localizado" });
      }
    } catch (e) {
      return res.status(500).json({ erro: e.message });
    }
  }
}
