import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import conectar from "./models/connections";
dotenv.config();

const PORT = process.env.PORT;

const app = express();

conectar();

app.listen(3001, function () {
  console.log(`Rodando na porta ${PORT}`);
});

app.use(routes);


//