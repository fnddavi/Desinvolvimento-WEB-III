import PrevisaoController from "../src/controllers/PrevisaoController";
import { Request, Response } from "express";

describe("PrevisaoController teste", () => {
    it("lista cidades", async () => {
        const req = { params: { cidade: "areias" } } as unknown as Request;
        const res = {} as unknown as Response;
        const next = () => {};
        await PrevisaoController.listaCidades(req, res, next);
        expect(res.locals).toMatchObject({nome: "Areias"});
    });

    it("Previsao 7 dias", async () => {
        const req = {} as unknown as Request;
        const res = { 
            locals: { id: "616" },
            send: jest.fn() // Adicione uma função send simulada
        } as unknown as Response;
        await PrevisaoController.previsao7dias(req, res); // Use await aqui
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ nome: "Areias" })); 
    });

    it("Previsao", async () => {
        const req = {} as unknown as Request;
        const res = { 
            locals: { id: "616" },
            send: jest.fn() // Adicione uma função send simulada
        } as unknown as Response;
        await PrevisaoController.previsao(req, res);
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ nome: "Areias" }));
    });

    it("Previsao Estendida", async () => {
        const req = {} as unknown as Request;
        const res = { 
            locals: { id: "616" },
            send: jest.fn() // Adicione uma função send simulada
        } as unknown as Response;
        await PrevisaoController.previsaoEstendida(req, res);
        expect(res.send).toHaveBeenCalledWith(expect.objectContaining({ nome: "Areias" }));
    });
});
