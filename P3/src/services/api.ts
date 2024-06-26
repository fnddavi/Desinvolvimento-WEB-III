import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL || "",
  headers: {
    "Content-Type": "application/json",
  },
});

/*
O tratamento de erro, configurado no interceptor de resposta do Axios,
intercepta todas as respostas de requisições e pode lidar com os erros adequadamente.
*/
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if( error.response.data && error.response.data.error_message){
        return Promise.reject({ message: error.response.data.error_message });
      }
      return Promise.reject({ message: error.response });
    } else if (error.request) {
      if (error.code === "ECONNABORTED") {
        return Promise.reject({ message: "Conexão de rede perdida (timeout)" });
      } else if (error.code === "ENOTFOUND") {
        return Promise.reject({ message: "Servidor não encontrado" });
      }
      // Qualquer outra situação onde a requisição foi feita mas não houve resposta
      return Promise.reject({
        message: "Servidor inoperante ou sem conexão de rede",
      });
    } else {
      return Promise.reject({ message: error.message });
    }
  }
);
