import { CategoryProps, ErrorProps } from "../types";
import api from "./api";

class Category {
  async list(): Promise<CategoryProps[] | ErrorProps> {
    try {
      const { data } = await api.get("/categoria");
      return data;
    } catch (error: any) {
      if (error.response) {
        // O servidor respondeu com um status diferente de 2xx
        return { message: `Falha: ${error.response.status} - ${error.response.statusText}` };
      } else if (error.request) {
        // A requisição foi feita, mas nenhuma resposta foi recebida
        return { message: "O servidor não está acessível" };
      } else {
        return { message: error.message };
      }
    }
  }

  async create(name:string): Promise<CategoryProps[] | ErrorProps> {
    try {
      const { data } = await api.post("/categoria", {name});
      return data;
    } catch (error: any) {
      if (error.response) {
        // O servidor respondeu com um status diferente de 2xx
        return { message: `Falha: ${error.response.status} - ${error.response.statusText}` };
      } else if (error.request) {
        // A requisição foi feita, mas nenhuma resposta foi recebida
        return { message: "O servidor não está acessível" };
      } else {
        return { message: error.message };
      }
    }
  }
}

const category = new Category();
export default category;
