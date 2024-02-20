import express from "express";
import dotenv from "dotenv";
import routes from "./routes";
import conectar from "./models/connections";
dotenv.config();

const PORT = process.env.PORT;

const app = express();
app.use(express.json());

conectar();

app.listen(PORT, function () {
  console.log(`Rodando na porta ${PORT}`);
});

app.use(routes);


//