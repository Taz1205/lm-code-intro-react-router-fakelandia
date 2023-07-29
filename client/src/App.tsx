import { MisdemeanoursContext } from "../../client/src/components/misdemeanours/misdemeanour_context";
import useMisdemeanours from "./hooks/useMisdemeanours";
import Router from "./components/router/router";

function App() {
  const misdemeanoursContext = useMisdemeanours();

  return (
    <MisdemeanoursContext.Provider value={misdemeanoursContext}>
      <div className="min-h-screen">
        <Router />
      </div>
    </MisdemeanoursContext.Provider>
  );
}

export default App;
