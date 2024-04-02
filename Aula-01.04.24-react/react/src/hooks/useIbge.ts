import { useContext } from "react";
import { ctx } from "../contexts/ContextIbge";

export default function useIbge() {
    return useContext(ctx);
  }
  
