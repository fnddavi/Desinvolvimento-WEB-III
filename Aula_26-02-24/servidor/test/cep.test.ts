import obter, { obterCep } from "../src/cep";
import { Request, Response } from "express";
import request from "supertest";
import app from "../src";

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

describe("CEP HTTP", () => {
  it("CEP  Válido", async () => {
    const req = { body: { cep: "12325240" } } as Request;
    const res = { json: jest.fn() } as unknown as Response;

    await obterCep(req, res);
    expect(res.json).toHaveBeenCalledWith(
      expect.objectContaining({ cep: "12325-240" })
    );
  });

  it("CEP  Incompleto", async () => {
    const req = { body: { cep: "1232524" } } as Request;
    const res = { json: jest.fn() } as unknown as Response;

    await obterCep(req, res);
    expect(res.json).toHaveBeenCalledWith({
      message: expect.any(String),
    });
  });
});

describe("Teste de integração", () => {
  it("CEP  Válido", async () => {
    const response = await request(app).get("/").send({ cep: "12325240" });
    expect(response.body.cep).toBe("12325-240");
  });

  it("CEP  inválido", async () => {
    const response = await request(app).get("/").send({ cep: "12325240" });
    expect(response.body.cep).toBe("true");
  });

  it("CEP 1223807", async () => {
    const response = await request(app).get("/").send({ cep: "1223807" });
    expect(response.body.cep).toMatch(/Request failed/i);
  });
});
