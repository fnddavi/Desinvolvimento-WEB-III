import request from "supertest";

import app from "../src";

describe('Teste Integrado', () => {
    it("Teste Previsão", async () => {
        const response = await request(app).get("/previsao/areias");
        expect(response.body.nome).toBe("Areias");
    });

    it("Teste Previsão 7 dias", async () => {
        const response = await request(app).get("/previsao7/areias");
        expect(response.body.nome).toBe("Areias");
    });

    it("Teste Previsão Estendida", async () => {
        const response = await request(app).get("/estendida/areias");
        expect(response.body).toMatchObject({nome: "Areias"});;
    });
});
