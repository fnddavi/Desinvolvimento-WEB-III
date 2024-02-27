import obter from "../src/cep";

describe("CEP", () => {
  test("Cep valido", async () => {
    const r = await obter("12325240");
    expect(r).toMatchObject({
      cep: "12325-240",
      logradouro: "Rua Professora Anita de Oliveira Cordeiro Gomes",
    });
  });

  test("Cep invalido", async () => {
    const r = await obter("12325241");
    expect(r).toMatchObject({
      erro: "true",
    });
  });

  test("Cep incompleto", async () => {
    const r = await obter("1232524");
    expect(r).toMatchObject({
      message: "Request failed with status code 400", //Ou message: expect.any(String)
    }); 
  });
});
