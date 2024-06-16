import Cptec from "../src/services/Cptec";

describe('Cptec teste', () => {
    it("Cidade Válida", async () => {
        const r = await new Cptec().listaCidades("Areias");
        expect(r).toEqual(expect.stringContaining("<nome>Areias</nome>"));
        //        expect(response.body.nome).toBe("Canas");
    });

    it("previsao", async () => {
        const r = await new Cptec().previsao("616");
        expect(r).toEqual(expect.stringContaining("<nome>Areias</nome>"));
    });

    it("previsao7dias", async () => {
        const r = await new Cptec().previsao7dias("616");
        expect(r).toEqual(expect.stringContaining("<nome>Areias</nome>"));
    });

    it("previsaoEstendida", async () => {
        const r = await new Cptec().previsaoEstendida("616");
        expect(r).toEqual(expect.stringContaining("<nome>Areias</nome>"));
    });
});
