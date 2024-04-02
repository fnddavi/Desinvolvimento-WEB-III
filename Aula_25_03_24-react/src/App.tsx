import { createContext, useContext, useEffect, useState } from "react";
import { CepProps, PessoaProps } from "./types";
import api from "./api";

const Contexto = createContext({} as CepProps);

function App() {
  const [resultado, setResultado] = useState({} as CepProps);
  const [cep, setCep] = useState("12243750");

  useEffect(() => {
    async function obter() {
      const { data } = await api.get(`${cep}/json`);
      setResultado(data);
    }
    obter();
  });

  return (
    <Contexto.Provider value={resultado}>
      <Form />
      <Resultado />
    </Contexto.Provider>
  );
}

export default App;

function Form() {
  const [entrada, setEntrada] = useState("");
  return (
    <div>
      <label>CEP</label>
      <input value={entrada} onChange={(e) => setEntrada(e.target.value)} />
    </div>
  );
}

function Resultado() {
  const { logradouro, bairro } = useContext(Contexto);
  return (
    <div>
      oie {logradouro} {bairro}
    </div>
  );
}
