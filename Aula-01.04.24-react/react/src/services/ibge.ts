import { RegiaoProps } from "../types";
import api from "./api";

class Ibge {
  async regioes(): Promise<RegiaoProps[]> {
    const { data } = await api.get("/regioes?orderBy=nome");
    return data;
  }
}

const ibge = new Ibge();
export default ibge;
