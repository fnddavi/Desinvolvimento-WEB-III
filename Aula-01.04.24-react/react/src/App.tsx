import { Provedor } from "./contexts/ContextIbge";
import Principal from "./pages/Principal";

function App() {
  return (
      <Provedor>
        <Principal />
      </Provedor>
  );
}

export default App;