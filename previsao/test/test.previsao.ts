import Cptec from "../src/services/Cptec";

describe("Cptec", () => {
  test("listaCidades", async () => {
    const cptec = new Cptec();
    const result = await cptec.listaCidades("Salto");
    expect(result).toMatchObject({
      nome: "Salto",
      uf: "SP",
    });
  });
});
