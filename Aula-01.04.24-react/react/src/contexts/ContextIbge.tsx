import { createContext, useEffect, useState } from "react";
import { ContextProps, RegiaoProps } from "../types";
import ibge from "../services/ibge";


const ctx = createContext({} as ContextProps);

function Provedor({ children }: any) {
  const [regioes, setRegioes] = useState([] as RegiaoProps[]);

  useEffect( () => {
    ibge.regioes().then( r => setRegioes(r) );
  });

  return (
    <ctx.Provider value={{regioes}}>
        {children}
    </ctx.Provider>
  );
}

export { Provedor, ctx };
