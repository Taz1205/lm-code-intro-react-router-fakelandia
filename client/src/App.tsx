import { MisdemeanoursContext } from "../../client/src/components/misdemeanours/misdemeanour_context";
import useMisdemeanours from "./hooks/useMisdemeanours";
import Router from "./components/router/router";

function App() {
  const misdemeanours = useMisdemeanours();

  return (
    <MisdemeanoursContext.Provider value={misdemeanours}>
      <div className="min-h-screen">
        <Router />
      </div>
    </MisdemeanoursContext.Provider>
  );
}

export default App;
